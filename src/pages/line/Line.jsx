import Header from "../../components/Header";
import LineChart from "../../components/Charts/LineChart";

export default function SimpleLineChart() {
  return (
    <>
      <Header title={'Line chart'} paragraph={'This Line chart of team informations'} />

      <LineChart />
    </>
  );
}
