import {Box, Button, Card, CardContent, Stack, Typography} from '@mui/material';
import NpmSparkLine from '../../components/SparkLineChart/Dashboard';
import {DownloadOutlined} from '@mui/icons-material';
import SimpleLineChart from '../../components/Charts/LineChart';

export default function Dashboard() {
  return (
    <>
      <Box sx={{textAlign: 'end', my: 4}}>
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
        <Card sx={{padding: 3, borderRadius: 2}}>
          <NpmSparkLine prop="Users" />
        </Card>

        <Card sx={{padding: 3, borderRadius: 2}}>
          <NpmSparkLine prop="Conversions" />
        </Card>

        <Card sx={{padding: 3, borderRadius: 2}}>
          <NpmSparkLine prop="Monthly Downloads" />
        </Card>

        <Card sx={{padding: 3, borderRadius: 2}}>
          <NpmSparkLine prop="Weekly Downloads" />
        </Card>
      </Box>

      <Stack
        className="row-2"
        flexWrap={'wrap'}
        style={{marginTop: '20px'}}
        direction={'row'}
        gap={2}
      >
        <Stack className="left-section" flexGrow={1}>
          <Card sx={{padding: 3, borderRadius: 2}}>
            <CardContent>
              <Stack>
                <Stack
                  className="header"
                  direction={'row'}
                  justifyContent={'space-between'}
                >
                  <div>
                    <Typography>Revenue Generated</Typography>
                    <Typography>$62,235.89</Typography>
                  </div>
                  <DownloadOutlined />
                </Stack>
                <SimpleLineChart height={300} marginT={0} marginL={0} />
              </Stack>
            </CardContent>
          </Card>
        </Stack>
        <Box
          className="right-section"
          sx={{ overflow: 'auto'}}
          height={435}
          flexGrow={1}
        >
          <Card sx={{borderRadius: 2}}>
            <Typography
              sx={{
                color: 'purple',
                fontWeight: 'bold',
                fontSize: '20px',
                padding: '10px 20px',
              }}
            >
              Recent Transactions
            </Typography>
          </Card>

          <Stack className="list" sx={{mt: 2, overflow: 'auto'}} gap={1}>
            <CardPrice />
            <CardPrice />
            <CardPrice />
            <CardPrice />
            <CardPrice />
            <CardPrice />
            <CardPrice />
            <CardPrice />
          </Stack>
        </Box>
      </Stack>
    </>
  );
}


export const CardPrice = ()=>{
  return (
    <Card
      sx={{
        p: '8px 20px',
        borderRadius: 2,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}
    >
      <Box>
        <Typography variant="h6">sds233cc</Typography>
        <Typography>sds233cc</Typography>
      </Box>
      <Typography>2021-07-05</Typography>
      <Typography bgcolor={'red'} sx={{p: 1, borderRadius: 2}}>$32.92</Typography>
    </Card>
  );
}