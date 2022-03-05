import React from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

function PaginationElem() {
  return (
    <Stack spacing={2}>
      <Pagination
        count={10}
        variant="outlined"
        shape="rounded"
        sx={{
          display: 'flex',
          justifyContent: 'center',
          mt: '50px',
        }}
      />
    </Stack>
  );
}

export default PaginationElem;
