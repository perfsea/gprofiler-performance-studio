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

import Tag from './Tag';

const Tags = ({ tags = [], onClose = () => {} }) => {
    return (
        <ul
            onClick={(event) => {
                event.stopPropagation();
            }}
            style={{
                display: 'inline-flex',
                padding: '0px 3px',
                margin: 'auto 0',
                listStyle: 'none',
            }}>
            {tags.map((tag, i) => (
                <li key={tag}>
                    <Tag onClose={() => onClose(i)}>{tag}</Tag>
                </li>
            ))}
        </ul>
    );
};

export default Tags;
