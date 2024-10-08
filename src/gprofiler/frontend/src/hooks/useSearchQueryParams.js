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

import { useCallback, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { StringParam, useQueryParams } from 'use-query-params';

import { PAGES } from '../utils/consts';

const searchQueryParam = 'search';

const useSearchQueryParams = ({ setSearchValue, searchValue }) => {
    let location = useLocation();

    const [queryParams, setQueryParams] = useQueryParams({
        [searchQueryParam]: StringParam,
        date: StringParam,
    });
    const { search } = queryParams;

    const handleSearchChange = useCallback(() => {
        setQueryParams({ [searchQueryParam]: searchValue || undefined });
    }, [setQueryParams, searchValue]);

    useEffect(() => {
        if (location.pathname === PAGES.profiles.to) {
            handleSearchChange();
        }
    }, [searchValue, handleSearchChange, location.pathname]);

    useEffect(() => {
        if (search) {
            setSearchValue(search);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
};

export default useSearchQueryParams;
