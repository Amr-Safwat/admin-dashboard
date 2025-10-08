import {Box} from '@mui/material';
import {DataGrid} from '@mui/x-data-grid';
import {rows, columns} from './data';
import Header from '../../components/Header';

export default function Invoices() {
  return (
    <>
      <Box sx={{height: 800, width: '100%'}}>
        <Header title={'Invoices'} paragraph={'List of invoice balances'} />

        <DataGrid
          checkboxSelection
          rows={rows}
          // @ts-ignore
          columns={columns}
        />
      </Box>
    </>
  );
}
