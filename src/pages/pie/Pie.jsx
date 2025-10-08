import Header from '../../components/Header';
import Piechart from '../../components/Charts/PieCharts';

export default function Pie() {
  return (
    <>
      <Header title={'Pie chart'} paragraph={'This informations of team'} />
      <Piechart />;
    </>
  );
}
