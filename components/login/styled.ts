import { Box, Button, Typography, styled } from '@mui/material';

export const LoginOuterBox = styled(Box)({
  height: '90%',
  width: '70%',
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
  height: '20%',
  width: '60%',
});

export const SpotifyButton = styled(Button)({
  variant: 'contained',
  backgroundColor: '#1DB954',
  marginTop: '8vh',
  marginBottom: '2vh',
  height: '5vh',
  width: '60%',
  borderRadius: '50px',
});

export const SpotifyButtonTypography = styled(Typography)({
  color: 'white',
  fontFamily: 'Helvetica',
  fontWeight: 'bold',
  fontSize: '1.5vh',
});

export const LoginSubText = styled(Typography)({
  color: '#7D82B8',
  fontFamily: 'Helvetica',
  fontWeight: 'regular',
  fontSize: '1.7vh',
  width: '80%',
});

export const LoginInfoText = styled(Typography)({
  color: '#7D82B8',
  fontFamily: 'Helvetica',
  fontWeight: 'regular',
  fontSize: '1.5vh',
  marginTop: '1vh',
  width: '66%',
  textAlign: 'center',
});
