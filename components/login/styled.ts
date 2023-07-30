import { Box, Button, Typography, styled } from '@mui/material';

export const LoginOuterBox = styled(Box)({
  height: '98vh',
  width: '100%',
  maxWidth: '900px',
  background: '#FBFBFB',
  boxShadow: '0px 8px 30px 10px rgba(0, 0, 0, 0.25)',

  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  textAlign: 'center',
});

export const LoginImageBox = styled(Box)({
  height: '15%',
  width: '55%',
  marginBottom: '2vh',

  '@media (max-width: 500px)': {
    width: '70%',
    height: 'fit-content',
    marginBottom: '0vh',
  },
});

export const SpotifyButton = styled(Button)({
  variant: 'contained',
  backgroundColor: '#1DB954',
  marginTop: '8vh',
  marginBottom: '2vh',
  height: '5vh',
  width: '60%',
  borderRadius: '50px',

  '@media (max-width: 500px)': {
    marginTop: '5vh',
    marginBottom: '2vh',
    height: '6vh',
    width: '65%',
    borderRadius: '50px',
  },
});

export const SpotifyButtonTypography = styled(Typography)({
  color: 'white',
  fontFamily: 'Helvetica',
  fontWeight: 'bold',
  fontSize: '1.5vh',

  '@media (max-width: 500px)': {
    fontWeight: 'bold',
    fontSize: '1.7vh',
  },
});

export const LoginSubText = styled(Typography)({
  color: '#7D82B8',
  fontFamily: 'Helvetica',
  fontWeight: 'regular',
  fontSize: '1.7vh',
  width: '80%',

  '@media (max-width: 500px)': {
    fontSize: '1.8vh',
    width: '80%',
  },
});

export const LoginInfoText = styled(Typography)({
  color: '#7D82B8',
  fontFamily: 'Helvetica',
  fontWeight: 'regular',
  textAlign: 'center',
  fontSize: '1.5vh',
  marginTop: '1vh',
  width: '66%',

  '@media (max-width: 500px)': {
    fontSize: '1.5vh',
    marginTop: '1vh',
    width: '67%',
  },
});
