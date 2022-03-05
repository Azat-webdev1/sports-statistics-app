/* eslint-disable react/prop-types */
import React from 'react';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';

function handleClick(e) {
  e.preventDefault();
}

function BreadcrumbsItem({ teams, children, leagues }) {
  return (
    <Stack spacing={2} sx={{ mt: '10px', mb: '20px' }}>
      <Breadcrumbs aria-label="breadcrumb">
        <Link
          underline="hover"
          key="1"
          color="inherit"
          href="/"
          onClick={handleClick}
        >
          { teams }
          {' '}
          { leagues }
        </Link>
        <Link
          underline="hover"
          key="2"
          color="inherit"
          href="/competitions/"
          onClick={handleClick}
        >
          { children }
        </Link>
      </Breadcrumbs>
    </Stack>
  );
}

export default BreadcrumbsItem;
