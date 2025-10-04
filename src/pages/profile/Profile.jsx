import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  NativeSelect,
  Select,
  Stack,
} from '@mui/material';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import React from 'react';

export default function Profile() {
  const [userInput, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  return (
    <>
      <Box
        component="form"
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: 2,
        }}
        noValidate
        autoComplete="off"
      >
        <Stack sx={{flexDirection: 'row', gap: 2}}>
          <TextField sx={{flex: 1}} label="First Name" variant="outlined" />
          <TextField sx={{flex: 1}} label="Last Name" variant="outlined" />
        </Stack>
        <TextField label="Email" variant="outlined" />
        <TextField label="Phone Number" variant="outlined" />
        <TextField label="Address 1" variant="outlined" />
        <TextField label="Address 1" variant="outlined" />
        <FormControl sx={{width: '50%'}}>
          <InputLabel>Select</InputLabel>
          <Select value={userInput} label="Select" onChange={handleChange}>
            <MenuItem value={'Admin'}>Admin</MenuItem>
            <MenuItem value={'Manager'}>Manager</MenuItem>
            <MenuItem value={'User'}>User</MenuItem>
          </Select>
        </FormControl>
        <Button
          type="submit"
          sx={{width: '70%', mx: 'auto', my: 5}}
          variant="contained"
        >
          Create Account
        </Button>
      </Box>
    </>
  );
}
