import {Box, Button, Card, CardContent, Stack, Typography} from '@mui/material';
import NpmSparkLine from '../../components/SparkLineChart/Dashboard';
import {DownloadOutlined} from '@mui/icons-material';
import SimpleLineChart from '../../components/Charts/LineChart';
import Piechart from '../../components/Charts/PieCharts';
import StackedBarChart from '../../components/Charts/Bar';
import { MapChart } from '../../components/Charts/Map Chart/MapChart';

export default function Dashboard() {
  return (
    <>
      <Box sx={{textAlign: 'end', mb: 4}}>
        <Button variant="contained">
          <DownloadOutlined />
          Download Reports
        </Button>
      </Box>

      <Box
        display={'flex'}
        flexDirection={'row'}
        gap={{xs: 2, sm: 1, lg: 2}}
        width="100%"
        flexGrow={1}
        flexWrap={'wrap'}
      >
        <Box flexGrow={1}>
          <Card sx={{padding: 3, borderRadius: 2}}>
            <NpmSparkLine prop="Users" />
          </Card>
        </Box>

        <Box flexGrow={1}>
          <Card sx={{padding: 3, borderRadius: 2}}>
            <NpmSparkLine prop="Conversions" />
          </Card>
        </Box>

        <Box flexGrow={1}>
          <Card sx={{padding: 3, borderRadius: 2}}>
            <NpmSparkLine prop="Monthly Downloads" />
          </Card>
        </Box>

        <Box flexGrow={1}>
          <Card sx={{padding: 3, borderRadius: 2}}>
            <NpmSparkLine prop="Weekly Downloads" />
          </Card>
        </Box>
      </Box>

      <Stack
        className="row-2"
        flexWrap={'wrap'}
        style={{marginTop: '20px'}}
        direction={'row'}
        gap={{xs: 4, sm: 2, lg: 2}}
      >
        <Box className="left-section" flexGrow={1}>
          <Card sx={{py: 3, px: {xs: 1, sm: 4, lg: 4}, borderRadius: 2}}>
            <CardContent>
              <Stack>
                <Stack
                  className="header"
                  direction={'row'}
                  justifyContent={'space-between'}
                >
                  <div>
                    <Typography
                      sx={{
                        color: 'purple',
                        fontWeight: 'bold',
                        fontSize: '20px',
                        paddingBottom: '8px',
                      }}
                    >
                      Revenue Generated
                    </Typography>
                    <Typography>$62,235.89</Typography>
                  </div>
                  <DownloadOutlined />
                </Stack>
                <SimpleLineChart height={300} marginT={0} marginL={0} />
              </Stack>
            </CardContent>
          </Card>
        </Box>

        <Box className="right-section" height={435} width={310} flexGrow={1}>
          <Card sx={{borderRadius: 2}}>
            <Typography
              sx={{
                color: 'purple',
                fontWeight: 'bold',
                fontSize: '20px',
                padding: '17px 20px',
              }}
            >
              Recent Transactions
            </Typography>
          </Card>

          <Box className="list" sx={{mt: 1, overflow: 'auto', height: 378}}>
            <CardPrice name={'transaction-1'} />
            <CardPrice name={'transaction-2'} />
            <CardPrice name={'transaction-3'} />
            <CardPrice name={'transaction-4'} />
            <CardPrice name={'transaction-5'} />
            <CardPrice name={'transaction-6'} />
            <CardPrice name={'transaction-7'} />
            <CardPrice name={'transaction-8'} />
          </Box>
        </Box>
      </Stack>

      <Stack className={'row-3'} direction={'row'} marginTop={3} gap={2} flexWrap={'wrap'}>
        <Box flexGrow={1} width={'28%'}>
          <Card sx={{borderRadius: 2}}>
            <Typography
              sx={{
                color: 'purple',
                fontWeight: 'bold',
                fontSize: '20px',
                paddingLeft: '30px',
                paddingTop: '30px',
              }}
            >
              Compaign
            </Typography>
            <Piechart isDashboard={true} />
          </Card>
        </Box>

        <Box flexGrow={1} width={'45%'}>
          <Card sx={{borderRadius: 2}}>
            <Typography
              sx={{
                color: 'purple',
                fontWeight: 'bold',
                fontSize: '20px',
                paddingLeft: '30px',
                paddingTop: '30px',
              }}
            >
              Compaign
            </Typography>
            <StackedBarChart />
          </Card>
        </Box>

        <Box flexGrow={1} width={'30%'}>
          <Card sx={{borderRadius: 2, width: '100%'}}>
            <Typography
              sx={{
                color: 'purple',
                fontWeight: 'bold',
                fontSize: '20px',
                paddingLeft: '30px',
                paddingTop: '30px',
              }}
            >
              Compaign
            </Typography>
            <MapChart isDashboard={true}/>
          </Card>
        </Box>
      </Stack>
    </>
  );
}

export const CardPrice = ({name = null}) => {
  return (
    <Card
      sx={{
        mt: '5px',
        p: '8px 20px',
        borderRadius: 2,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}
    >
      <Box>
        <Typography variant="h6">{name}</Typography>
        <Typography>this is product.</Typography>
      </Box>
      <Typography>2021-07-05</Typography>
      <Typography color='white' bgcolor={'red'} sx={{p: 1, borderRadius: 2}}>
        $32.92
      </Typography>
    </Card>
  );
};
