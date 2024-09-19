#
# Copyright (C) 2023 Intel Corporation
#
# Licensed under the Apache License, Version 2.0 (the "License");
# you may not use this file except in compliance with the License.
# You may obtain a copy of the License at
#
#    http://www.apache.org/licenses/LICENSE-2.0
#
# Unless required by applicable law or agreed to in writing, software
# distributed under the License is distributed on an "AS IS" BASIS,
# WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
# See the License for the specific language governing permissions and
# limitations under the License.
#

from datetime import datetime
from io import BytesIO
from logging import getLogger
from typing import Dict
import requests

from backend.models.filters_models import RQLFilter
from backend.models.flamegraph_models import FGDateTimeDataRange, FGParamsBaseModel, FGParamsModel, FlameGraph
from backend.utils.flamegraph_utils import get_file_name, get_svg_file
from backend.utils.json_param import json_param
from backend.utils.request_utils import flamegraph_request_params, get_flamegraph_response, get_query_response
from dateutil.relativedelta import relativedelta
from fastapi import APIRouter, Depends, Query
from fastapi.responses import StreamingResponse
from gprofiler_dev import config

logger = getLogger(__name__)
router = APIRouter()
CHUNK_SIZE = 1024 * 100


@router.get(
    "/datetime_with_data",
    response_model=FGDateTimeDataRange,
    responses={204: {"description": "Good request, just has no data"}},
)
def get_datetime_with_data(
    service_name: str = Query(None, alias="serviceName"),
    fg_filter: RQLFilter = json_param("filter", RQLFilter, description="RQL format filter", default=None),
):
    end_time = datetime.utcnow()
    start_time = end_time - relativedelta(years=1)
    fg_params = FGParamsBaseModel(service_name=service_name, start_time=start_time, end_time=end_time, filter=fg_filter)
    result = get_query_response(fg_params, lookup_for="time_range")
    return FGDateTimeDataRange(
        first_date_time=result[0] if result else None, last_date_time=result[-1] if result else None
    )


# TODO: response model here is only for documentation purposes (there is no guarantee that it will be the model),
# TODO: but also i can't validate it will be extremely not efficient not the best practice, need to decide if keep it
@router.get(
    "",
    response_model=FlameGraph,
    responses={200: {"content": {"text/plain": {}}}, 204: {"description": "Good request, just has no data"}},
)
def get_flamegraph(fg_params: FGParamsModel = Depends(flamegraph_request_params)):
    response = get_flamegraph_response(fg_params)
    json_file = BytesIO(response.content)
    return StreamingResponse(json_file, media_type="text/plain")

@router.post("/scan", status_code=201)
def get_flamegraph_svg(flame: Dict):
    return requests.post(
        "https://perfsea.com/scan",
        json={"type": "json", "data": flame},
        headers={
            "CF-Access-Client-Id": config.PERFSEA_ACCESS_KEY_ID,
            "CF-Access-Client-Secret": config.PERFSEA_SECRET_ACCESS_KEY,
        },
    ).json()

@router.get(
    "/download_svg",
    responses={
        200: {"content": {"application/octet-stream": {}}},
        204: {"description": "Good request, just has no data"},
    },
)
def get_flamegraph_svg(
    fg_params: FGParamsModel = Depends(flamegraph_request_params),
):
    mimetype = "application/octet-stream"  # We want this to be downloaded and not displayed

    svg_file_name = get_file_name(fg_params.start_time, fg_params.end_time, fg_params.service_name)
    response = get_flamegraph_response(fg_params, file_type="collapsed_file")
    svg_flamegraph = get_svg_file(response.text)
    return StreamingResponse(
        svg_flamegraph, media_type=mimetype, headers={"Content-Disposition": f"attachment; filename={svg_file_name}"}
    )
