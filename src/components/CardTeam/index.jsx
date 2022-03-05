import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardMedia from '@mui/material/CardMedia';

import logoTeam from '../../assets/unnamed.png';
// eslint-disable-next-line react/prop-types
function CardTeam({ name }) {
  return (
    <Card
      sx={{
        maxWidth: '200px',
        height: '150px',
        mb: '30px',
        '@media only screen and (min-width: 768px) and (max-width: 1024px)': {
          mb: '30px',
        },
        '&:hover': {
          transform: 'translatey(-10px)',
        },
      }}
    >
      <CardContent
        sx={{
          textAlign: 'center',
          margin: '0 auto',
          width: '200px',
          height: '150px',
          pt: '5px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Typography
          sx={{
            py: '10px',
            fontSize: 18,
            fontWeight: 500,
            maxWidth: '100%',
          }}
        >
          {name}
        </Typography>
        <CardMedia
          component="img"
          width="190"
          height="110"
          image={logoTeam}
          alt="logoTeam"
        />
      </CardContent>
    </Card>
  );
}

export default CardTeam;
