import * as React from 'react';
import Box from '@mui/material/Box';
import {LineChart} from '@mui/x-charts/LineChart';

const margin = {right: 24};
const uData = [4000, 4500, 2000, 5780, 1890, 2390, 3490, 5000, 2000, 2800];
const pData = [2400, 1398, 9800, 3908, 5800, 3800, 4300, 2500, 2000, 8000];
const xLabels = [
  'Page A',
  'Page B',
  'Page C',
  'Page D',
  'Page E',
  'Page F',
  'Page G',
  'Page h',
  'Page i',
  'Page j',
];

export default function SimpleLineChart() {
  return (
    <Box sx={{width: '90%', height: 500, mt: 30, ml: 5}}>
      <LineChart
        series={[
          {data: pData, label: 'pv'},
          {data: uData, label: 'uv'},
        ]}
        xAxis={[{scaleType: 'point', data: xLabels}]}
        yAxis={[{width: 50}]}
        margin={margin}
      />
    </Box>
  );
}
