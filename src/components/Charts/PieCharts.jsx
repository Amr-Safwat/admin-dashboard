import * as React from 'react';
import {PieChart} from '@mui/x-charts/PieChart';
import {desktopOS, valueFormatter} from '../../components/Charts/webUsageStats';

export default function Piechart() {
  return (
    <PieChart
      series={[
        {
          arcLabel: (item) => `${item.value}%`,
          data: desktopOS,
          highlightScope: {fade: 'global', highlight: 'item'},
          faded: {innerRadius: 30, additionalRadius: -20, color: 'gray'},
          valueFormatter,
        },
      ]}
      height={800}
      width={400}
    />
  );
}
