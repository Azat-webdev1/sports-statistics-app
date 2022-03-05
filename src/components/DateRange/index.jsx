/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import TextField from '@mui/material/TextField';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DateRangePicker from '@mui/lab/DateRangePicker';
import Box from '@mui/material/Box';

function DateRange() {
  const [value, setValue] = React.useState([null, null]);

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <Box sx={{ mb: '30px' }}>
        <DateRangePicker
          calendars={2}
          value={value}
          onChange={(newValue) => {
            setValue(newValue);
          }}
          renderInput={(startProps, endProps) => (
            <>
              <Box sx={{ mr: 2 }}> c </Box>
              <TextField
                size="small"
                {...startProps}
              />
              <Box sx={{ mx: 2 }}> по </Box>
              <TextField
                size="small"
                {...endProps}
              />
            </>
          )}
        />
      </Box>
    </LocalizationProvider>
  );
}

export default DateRange;
