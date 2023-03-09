import { Box, Typography, styled } from '@mui/material'

export const CardBox = styled(Box)({
  height: '50vh',
  width: '25vw',
  maxWidth: '330px',
  borderRadius: '15px',

  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  textAlign: 'center',
  justifyContent: 'space-between',

  boxShadow: '0px 5px 25px 7px rgba(129, 129, 129, 0.25)',
});

export const CardImageBox = styled(Box)({
  height: '30vh',
  width: '24vw',
  maxWidth: '280px',

  marginTop: '1vw',
});

export const ArtistName = styled(Typography)({
  marginTop: '.5vw',
  fontSize: '3vh',
});

export const ArtistDetails = styled(Typography)({
  marginTop: '.2vw',
  mrginBottom: '.2vw',
  fontSize: '1.7vh',
  padding: '0 .5vw 0 .5vw'
});



