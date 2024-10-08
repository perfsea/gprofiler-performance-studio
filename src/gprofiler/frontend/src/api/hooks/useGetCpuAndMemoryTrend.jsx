{
    /*
     * Copyright (C) 2023 Intel Corporation
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *    http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
}

import _ from 'lodash';
import { stringify } from 'query-string';
import { useContext } from 'react';

import { FilterTagsContext } from '../../states/filters/FiltersTagsContext';
import { SelectorsContext } from '../../states/selectors';
import { DATA_URLS } from '../urls';
import useFetchWithRequest from '../useFetchWithRequest';
import { getStartEndDateTimeFromSelection } from '../utils';

const areParamsDefined = (selectedService, timeSelection) => {
    return !_.isUndefined(selectedService) && !_.isUndefined(timeSelection);
};

const useGetCpuAndMemoryTrend = () => {
    const { selectedService, timeSelection } = useContext(SelectorsContext);
    const { activeFilterTag } = useContext(FilterTagsContext);

    const metricsParams = {
        serviceName: selectedService,
        filter: activeFilterTag?.filter ? JSON.stringify(activeFilterTag) : undefined,
    };

    const timeParams = getStartEndDateTimeFromSelection(timeSelection);
    const { data: cpuAndMemoryTrendData, loading: cpuAndMemoryTrendLoading } = useFetchWithRequest(
        {
            url:
                DATA_URLS.GET_METRICS_CPU_AND_MEMORY_TREND +
                '?' +
                stringify(_.assign({ ...timeParams }, metricsParams)),
        },
        {
            refreshDeps: [selectedService, timeSelection, activeFilterTag],
            ready: areParamsDefined(selectedService, timeSelection),
        }
    );
    return {
        cpuAndMemoryTrendData: cpuAndMemoryTrendData,
        cpuAndMemoryTrendLoading: cpuAndMemoryTrendLoading,
    };
};

export default useGetCpuAndMemoryTrend;
