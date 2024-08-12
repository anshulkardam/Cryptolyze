import Typography from '@mui/material/Typography';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { useState } from 'react';

export default function PaginationComp({page,handlePageChange}) {
  
  return (
    <Stack alignItems="center" sx={{ paddingBottom: 4 }}>
      <Pagination count={10} page={page} size="large" onChange={(event,value)=> handlePageChange(event,value)} sx={{
        '& .MuiPaginationItem-root': {
          color: 'white',
        },
        '& .Mui-selected': {
          backgroundColor: '#42a5f5 !important',
        },
      }} />
    </Stack>
  );
}
