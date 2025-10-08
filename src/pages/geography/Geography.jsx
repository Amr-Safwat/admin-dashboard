import Header from '../../components/Header';
import {MapChart} from '../../components/Charts/Map Chart/MapChart';

export const Geography = () => {
  return (
    <>
      <Header title={'Geography'} paragraph={'Simple geography chart'} />

      <MapChart />
    </>
  );
};
