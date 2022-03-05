import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
// eslint-disable-next-line react/prop-types
function CardLeague({ name, country }) {
  return (
    <Card sx={{
      maxWidth: '350px',
      height: '250px',
      mb: '30px',
      '@media only screen and (min-width: 768px) and (max-width: 1024px)': {
        mb: '10px',
        maxWidth: '550px',
        height: '250px',
      },
      '@media only screen and (min-width: 768px) and (max-width: 1024px) and (orientation: landscape)': {
        maxWidth: '550px',
        height: '250px',
        mb: '50px',
      },
      '@media only screen and (min-width: 640px) and (max-height: 1136px) and (orientation: landscape)': {
        mb: '15px',
      },
      '&:hover': {
        transform: 'translatey(-10px)',
      },
    }}
    >
      <CardContent sx={{
        textAlign: 'center',
        margin: '0 auto',
        width: '350px',
        pt: '55px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
      >
        <Typography
          sx={{
            pb: '30px',
            fontSize: 18,
            fontWeight: 500,
            maxWidth: '100%',
          }}
        >
          {name}
        </Typography>
        <Typography
          sx={{
            fontSize: 16,
            maxWidth: '100%',
          }}
        >
          {country}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default CardLeague;
