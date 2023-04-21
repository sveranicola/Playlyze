import { Box, Typography, styled } from '@mui/material';

export const CardBox = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  textAlign: 'center',
  justifyContent: 'space-evenly',

  height: '45vh',
  borderRadius: '15px',
  margin: '1vh',
  boxShadow: '0px 5px 25px 7px rgba(129, 129, 129, 0.25)',
});

export const SpotifyLogoBox = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  textAlign: 'center',
  width: '100%',
});

export const CardImageBox = styled(Box)({
  height: '60%',
  width: '90%',
  marginTop: '1vw',
});

export const ArtistName = styled(Typography)({
  fontSize: '2vh',
  fontWeight: 'bold',
});

export const ArtistDetails = styled(Typography)({
  fontSize: '1.5vh',
  padding: '0 .5vw 0 .5vw',
});
