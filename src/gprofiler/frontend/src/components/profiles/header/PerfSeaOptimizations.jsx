import { useState, useContext, useEffect } from 'react';
import { Box, Chip, Link, Tooltip, Typography } from '@mui/material';
import { COLORS } from '@/theme/colors';
import SvgIcon from '@mui/material/SvgIcon';
import { FgContext } from '../../../states';
import Button from '../../common/button/Button';
import Flexbox from '../../common/layout/Flexbox';
import Modal from '../../common/dataDisplay/modal/Modal';
import MuiTable from '@/components/common/dataDisplay/table/MuiTable';
import { DATA_URLS } from '@/api/urls';

const PerfSeaOptimizations = ({ disabled = false }) => {
    const { fgOriginData, setFgOriginData } = useContext(FgContext);
    const [openModalId, setOpenModalId] = useState(null);
    const onClose = () => setOpenModalId(null);
    const [notes, setNotes] = useState([]);

    useEffect(() => {
        if (Object.keys(fgOriginData).length !== 0) {
            fetch(DATA_URLS.SCAN_FLAMEGRAPH, {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(fgOriginData),
            })
                .then((res) => {
                    return res.json();
                })
                .then((res) => {
                    setNotes(res);
                });
        }
    }, [fgOriginData]);

    return (
        <>
            <Button
                variant='text'
                disabled={disabled}
                onClick={() => setOpenModalId('Perf Sea')}
                sx={{ minWidth: '98px', textWrap: 'nowrap' }}>
                <SvgIcon style={{ marginRight: '8px', marginLeft: '-4px' }}>
                    <svg
                        width='2877'
                        height='2877'
                        viewBox='0 0 2877 2877'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'>
                        <mask
                            id='mask0_612_2'
                            style={{ maskType: 'alpha' }}
                            maskUnits='userSpaceOnUse'
                            x='0'
                            y='0'
                            width='2877'
                            height='2877'>
                            <circle cx='1438.5' cy='1438.5' r='1432' fill='white' stroke='white' strokeWidth='13' />
                        </mask>
                        <g mask='url(#mask0_612_2)'>
                            <rect x='-456' y='-134' width='4042' height='3266' fill='url(#paint0_linear_612_2)' />
                            <circle cx='1391.5' cy='1781.5' r='609.5' fill='#FFF5C1' />
                            <path
                                d='M229 1374.5C13.7999 1382.1 6.33321 1643.33 29.4999 1773L-244 2093L433 2913.5L2653.5 2969C2703 2629.17 2810.3 1914.2 2843.5 1773C2885 1596.5 2570 1472 2153 1564.5C1736 1657 1698.5 2111.5 1323 2158C947.5 2204.5 498 1365 229 1374.5Z'
                                fill='url(#paint1_linear_612_2)'
                            />
                            <path
                                d='M2310.5 2213.5C1847 2362 1559.5 1722 1295 1852C1030.5 1986.5 1174.5 2250.5 780.5 2436C465.3 2584.4 148.5 2052.83 29.5 1768.5L-285.5 2473L780.5 3015.5L3219 2839.5L2843.5 1768.5C2820.33 1867.33 2681.3 2094.7 2310.5 2213.5Z'
                                fill='url(#paint2_linear_612_2)'
                            />
                            <path
                                d='M3088 1340.27H1541C1963 1340.27 2131.5 1030.77 2328.5 1124.77C2525.5 1218.77 2375.5 1284.27 2544.5 1284.27C2713.5 1284.27 2657 1227.77 2853.5 1218.27C3010.7 1210.67 3075.33 1296.44 3088 1340.27Z'
                                fill='white'
                            />
                            <path
                                d='M1269.99 1136.35C1614.51 1024.4 1628.42 923.325 1718.43 841.316L2134.97 1070.13C2104.9 1156.37 1523.44 1162.28 1269.99 1136.35Z'
                                fill='url(#paint3_linear_612_2)'
                            />
                            <path
                                d='M1772.17 779.534C1911.08 641.167 2144.4 580.937 2243.7 568.118C2269.12 684.057 2276.22 956.336 2101.27 1117.94C1996.64 1214.6 1773.27 1273.66 1561.1 1307.23C1524.76 1455.05 1497.24 1601.03 1481.59 1701.21L1399.51 1448.68L1187.95 1344.09C1281.01 1340.85 1418.53 1329.8 1561.1 1307.23C1615.27 1086.83 1689.02 862.356 1772.17 779.534Z'
                                fill='url(#paint4_linear_612_2)'
                            />
                            <path
                                d='M1286 1054.5C1638.5 971 1660.6 871.4 1757 797L2153.5 1059C2116.5 1142.5 1536.5 1101 1286 1054.5Z'
                                fill='url(#paint5_linear_612_2)'
                            />
                            <path
                                d='M1081 895H-466C-44 895 124.5 585.5 321.5 679.5C518.5 773.5 368.5 839 537.5 839C706.5 839 650 782.5 846.5 773C1003.7 765.4 1068.33 851.167 1081 895Z'
                                fill='white'
                            />
                        </g>
                        <defs>
                            <linearGradient
                                id='paint0_linear_612_2'
                                x1='1565'
                                y1='-134'
                                x2='1565'
                                y2='3132'
                                gradientUnits='userSpaceOnUse'>
                                <stop stopColor='#FFECE1' />
                                <stop offset='1' stopColor='#FFD028' />
                            </linearGradient>
                            <linearGradient
                                id='paint1_linear_612_2'
                                x1='1301.59'
                                y1='1374.42'
                                x2='1301.59'
                                y2='2969'
                                gradientUnits='userSpaceOnUse'>
                                <stop stopColor='#A1B7E1' />
                                <stop offset='1' stopColor='#162CEF' />
                            </linearGradient>
                            <linearGradient
                                id='paint2_linear_612_2'
                                x1='1466.75'
                                y1='1768.5'
                                x2='1466.75'
                                y2='3015.5'
                                gradientUnits='userSpaceOnUse'>
                                <stop stopColor='#94BFFF' />
                                <stop offset='1' stopColor='#4A74B4' />
                            </linearGradient>
                            <linearGradient
                                id='paint3_linear_612_2'
                                x1='1681.31'
                                y1='844.352'
                                x2='1706.57'
                                y2='1153.27'
                                gradientUnits='userSpaceOnUse'>
                                <stop stopColor='#365A9F' />
                                <stop offset='1' stopColor='#142039' />
                            </linearGradient>
                            <linearGradient
                                id='paint4_linear_612_2'
                                x1='2038.35'
                                y1='466.593'
                                x2='1438.49'
                                y2='1679.91'
                                gradientUnits='userSpaceOnUse'>
                                <stop stopColor='#47B2FF' />
                                <stop offset='1' stopColor='#2A6B99' />
                            </linearGradient>
                            <linearGradient
                                id='paint5_linear_612_2'
                                x1='1719.75'
                                y1='797'
                                x2='1719.75'
                                y2='1106.95'
                                gradientUnits='userSpaceOnUse'>
                                <stop stopColor='#3077FF' />
                                <stop offset='1' stopColor='#1D4799' />
                            </linearGradient>
                        </defs>
                    </svg>
                </SvgIcon>
                3 Notes
            </Button>
            <Modal open={openModalId === 'Perf Sea'} onClose={onClose} variant='installationGIF'>
                <Box sx={{ backgroundColor: COLORS.BG_GREY, p: '0rem 2rem 0rem 2rem', borderRadius: 2 }}>
                    <Flexbox column>
                        <Typography
                            variant='h5'
                            sx={{
                                textAlign: 'Center',
                                p: 8,
                            }}>
                            Notes
                        </Typography>
                        <MuiTable
                            getRowId={(row) => row.name}
                            data={notes}
                            columns={[
                                {
                                    field: 'name',
                                    headerName: 'Name',
                                    width: 310,
                                    renderCell: (params) => {
                                        if (params.row.link) {
                                            return (
                                                <Link
                                                    href={'https://perfsea.com/' + params.row.link}
                                                    target='_blank'
                                                    rel='noopener'>
                                                    {params.value}
                                                </Link>
                                            );
                                        } else {
                                            return <>{params.value}</>;
                                        }
                                    },
                                },
                                {
                                    field: 'time',
                                    headerName: '% CPU',
                                    width: 80,
                                },
                                {
                                    field: 'tags',
                                    headerName: 'Tags',
                                    renderCell: (params) => {
                                        if (params.value) {
                                            console.log(params.value, notes);
                                            return (
                                                <>
                                                    {Object.entries(params.value).map(([k, v], i) => (
                                                        <Tooltip title={v}>
                                                            <Chip label={k} />
                                                        </Tooltip>
                                                    ))}
                                                </>
                                            );
                                        }
                                    },
                                },
                                {
                                    field: 'note',
                                    headerName: 'Notes',
                                    width: 450,
                                },
                            ]}
                        />
                        <Typography
                            mt={5}
                            variant='h5'
                            sx={{
                                textAlign: 'Center',
                                color: COLORS.GREY_VERY_LIGHT,
                            }}>
                            <Button sx={{ mb: 5, textAlign: 'center' }} size='large' href='https://perfsea.com/code'>
                                Add More
                            </Button>
                        </Typography>
                    </Flexbox>
                </Box>
            </Modal>
        </>
    );
};

export default PerfSeaOptimizations;