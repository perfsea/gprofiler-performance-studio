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

export const COLORS = {
    WHITE: '#FFFFFF',
    BLACK: '#000000',
    PRIMARY_PURPLE: '#583FFD',
    DARK_PURPLE: '#4431C9',
    LIGHT_PURPLE: '#8894E6',
    DARK_BLUE: '#121923',
    BLUE: '#3248ff',
    NAVY_BLUE: '#101633',
    SECONDARY_ORANGE: '#EE9868',
    SECONDARY_ORANGE_DARK: '#EA7743',
    SECONDARY_ORANGE_LIGHT: '#FDAC65',
    SUCCESS_GREEN: '#49D9B8',
    SUCCESS_GREEN_DARK: '#29B796',
    SUCCESS_GREEN_LIGHT: '#4CEBC7',
    ERROR_RED_LIGHT: '#F88A8A',
    ERROR_RED: '#FF4F4F',
    ERROR_RED_DARK: '#d62424',
    MAIN_GREY: '#37374A',
    DARK_GREY: '#151832',
    LIGHT_GREY: '#F9F9F9',
    HOVER_GREY: '#44465B',
    SILVER_GREY: '#A0AEC0',
    UNDERLINE_GREY: '#e2e2e2',
    PLAIN_GREY: '#808080',
    BG_GREY: '#EFF0F3',
    HR_GREY: '#474A61',
    INPUT_GREY: '#f2f4fa',
    FIELD_BLUE_A: '#E8EDFB',
    FIELD_BLUE_B: '#F2F4FA',
    MASK_BLURRED: 'rgba(236,237,239,.9)',
    MASK_DARK: 'rgba(0,0,0,.5)',
    MASK_LIGHT: 'rgba(255,255,255,.2)',
    STACKS: {
        Java: '#FFAB6E',
        Python: '#FADE7C',
        PHP: '#BABCF0',
        Ruby: '#F28988',
        Node: '#0DDCAA',
        'C++': '#64B6F2',
        '.NET': '#0088C8',
        Kernel: '#F9B7DE',
        Other: '#B375FD',
        Go: '#83E7F4',
        Appid: '#8894E6',
        'Java (inl)': '#F07822',
        'Java (C1)': '#A8693B',
        'Java (interpreted)': '#d1a280',
        root: '#373A4A',
        mine: '#bfbfbf',
    },
    // to be chabged or added:
    DARK_BLUE_1: '#20224C',
    BLUE_3: '#070F23',
    BLUE_1: `#141932`,
    BLUE_9: '#161933',
    BLUE_7: '#121923',
    BLUE_5: '#212E99',
    BLUE_6: '#4706FF',
    BLUE_2: '#3348FE',
    GREY_5: '#43465B',
    NAVY_DARK_BLUE_1: '#46495F',
    BLUE_8: '#2f3449',
    BLUE_4: '#373A4A',
    NAVY_DARK_BLUE: '#4A5568',
    NAVY_DARKER_BLUE: 'rgba(74, 85, 104, .5)',
    GREY_4: '#757575',
    GREY_VERY_LIGHT: '#FCFCFC',
    ALMOST_WHITE: '#ECEDEF',
    GREY_VERY_LIGHT_2: '#d2cfcf',
    ALMOST_WHITE_1: '#FEF3C7',
    ALMOST_WHITE_2: '#FFF1F1',
    ALMOST_WHITE_3: '#eff5fa',
    ALMOST_WHITE_4: '#f4f5f8',
    ALMOST_WHITE_5: '#E5E5E5',
    GREY_1: '#B3B3B3',
    GREY_2: '#bfbfbf',
    GREY_3: '#d9d9d9',
    ORANGE_PAECH: '#FAAE84',
    ORANGE_1: '#F59E0B',
    RED_1: '#FF4F4F',
    PURPLE: '#BEB5F8',
    YELLOW: '#FFD569',
    SIDE_NAV_DARK: '#161934',
};

export const ColorPalette = {
    primary: {
        light: COLORS.LIGHT_PURPLE,
        main: COLORS.PRIMARY_PURPLE,
        dark: COLORS.DARK_PURPLE,
    },
    secondary: {
        light: COLORS.SECONDARY_ORANGE_LIGHT,
        main: COLORS.SECONDARY_ORANGE,
        dark: COLORS.SECONDARY_ORANGE_DARK,
    },
    error: {
        light: COLORS.ERROR_RED,
        main: COLORS.ERROR_RED,
        dark: COLORS.ERROR_RED_DARK,
    },
    success: {
        light: COLORS.SUCCESS_GREEN_LIGHT,
        main: COLORS.SUCCESS_GREEN,
        dark: COLORS.SUCCESS_GREEN_DARK,
        contrastText: COLORS.BLACK,
    },
    grey: {
        light: COLORS.LIGHT_GREY,
        dark: COLORS.DARK_GREY,
        main: COLORS.MAIN_GREY,
        underline: COLORS.UNDERLINE_GREY,
        input: COLORS.INPUT_GREY,
    },
    blue: {
        main: COLORS.BLUE,
        dark: COLORS.DARK_BLUE,
    },
    masked: {
        light: COLORS.MASK_LIGHT,
        blurred: COLORS.MASK_BLURRED,
        dark: COLORS.MASK_DARK,
    },
    background: { main: COLORS.WHITE },
    white: { main: COLORS.WHITE },
    black: { main: COLORS.BLACK },
    hoverGrey: { main: COLORS.HOVER_GREY },
    silverGrey: { main: COLORS.SILVER_GREY },
    bgGrey: { main: COLORS.BG_GREY },
    hrGrey: { main: COLORS.HR_GREY },
    plainGrey: { main: COLORS.PLAIN_GREY },
    fieldBlue: { main: COLORS.FIELD_BLUE_A },
    fieldBlueB: { main: COLORS.FIELD_BLUE_B },
    navyBlue: { main: COLORS.NAVY_BLUE },
};
