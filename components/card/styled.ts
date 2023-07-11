import { Box, Typography, styled } from '@mui/material';

export const CardBox = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  textAlign: 'center',
  justifyContent: 'space-evenly',

  '@media (max-width: 500px)': {
    height: '40vh',
  },

  height: '55vh',
  borderRadius: '15px',
  margin: '1vh',
  boxShadow: '0px 5px 25px 7px rgba(129, 129, 129, 0.25)',
  overflow: 'hidden',
});

export const SpotifyLogoBox = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  textAlign: 'center',
  width: '100%',
});

export const CardImageBox = styled(Box)({
  maxHeight: '70%',
  maxWidth: '90%',
  margin: '1vw',

  '@media (max-width: 500px)': {
    margin: '2vw',
  },
});

export const ArtistName = styled(Typography)({
  fontSize: '2.3vh',
  fontWeight: 'bold',

  '@media (max-width: 500px)': {
    fontSize: '4vw',
  },
});

export const ArtistDetails = styled(Typography)({
  fontSize: '1.7vh',
  fontWeight: 'normal',
  padding: '0 .5vw 0 .5vw',

  '@media (max-width: 500px)': {
    fontSize: '3vw',
  },
});
