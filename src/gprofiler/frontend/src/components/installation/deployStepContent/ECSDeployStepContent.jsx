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

import { List, ListItem, ListItemIcon, Typography } from '@mui/material';

import Flexbox from '../../common/layout/Flexbox';

const STEPS = [
    'Go to your ECS cluster and enter the relevant cluster',
    'Click on Services, and choose ‘Create’',
    'Choose the EC2 launch type and the granulate-gprofiler.json task definition you downloaded in the previous step with the latest revision',
    'Enter an indicative service name',
    'Choose the Daemon service type',
];

const ECSDeployStepContent = () => {
    return (
        <Flexbox spacing={5} sx={{ maxWidth: 500 }}>
            <List sx={{ pt: 0 }}>
                {STEPS.map((step, index) => (
                    <ListItem sx={{ alignItems: 'flex-start', py: 2, pl: 0 }} key={index}>
                        <ListItemIcon>
                            <Typography variant='h2_lato'>{index + 1}</Typography>
                        </ListItemIcon>
                        <Typography variant='body1_lato' sx={{ pt: 2 }}>
                            {step}
                        </Typography>
                    </ListItem>
                ))}
            </List>
        </Flexbox>
    );
};

export default ECSDeployStepContent;
