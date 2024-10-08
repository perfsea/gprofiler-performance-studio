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

import { CircularProgress } from '@mui/material';

import Flexbox from '../layout/Flexbox';

const Loader = () => (
    <Flexbox column justifyContent='center' alignItems='center' sx={{ height: '100%', minHeight: '300px' }}>
        <CircularProgress />
    </Flexbox>
);

export default Loader;
