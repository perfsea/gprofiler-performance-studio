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

import datetime
from enum import Enum
from typing import Dict

from pydantic import BaseModel


class CloudProvider(str, Enum):
    AWS = "AWS"
    GCP = "GCP"
    Azure = "Azure"
    Unknown = "Unknown"

    @classmethod
    def _missing_(cls, name):
        for member in cls:
            if member.name.lower() == name.lower():
                return member
        return None


class AgentMetadata(BaseModel):
    current_time: datetime.datetime
    spawn_time: datetime.datetime
    spawn_uptime_ms: int
    public_ip: str
    private_ip: str
    hostname: str
    cloud_provider: CloudProvider
    instance_type: str
    processors: int
    memory_capacity_mb: int
    system_name: str
    os_name: str
    os_release: str
    kernel_release: str
    kernel_version: str
    hardware_type: str
    cloud_info: Dict = {}
    pid: int
    mac_address: str
    agent_version: str
    libc_type: str
    libc_version: str
    python_version: str
    run_mode: str
    deployment_type: str
    run_arguments: Dict
    big_data: Dict = {}


class GetServiceResponse(BaseModel):
    service_id: int
    profiler_process_id: int
    does_service_exist: bool
