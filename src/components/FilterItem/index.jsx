import React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

function FilterItem() {
  return (
    <Box
      component="form"
      sx={{
        marginBottom: '50px',
        display: 'flex',
      }}
    >
      <TextField
        id="standard-search"
        label="Поиск"
        type="search"
        variant="outlined"
        sx={{
          width: '350px',
          mt: '30px',
        }}
      />
    </Box>
  );
}

export default FilterItem;
