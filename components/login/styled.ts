import { Box, Button, Typography, styled } from '@mui/material';

export const LoginOuterBox = styled(Box)({
  width: '60%',
  maxWidth: '1000px',
  minHeight: '90vh',
  background: '#FBFBFB',
  boxShadow: '0px 8px 30px 10px rgba(0, 0, 0, 0.25)',

  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
});

export const LoginImageBox = styled(Box)({
  height: '15vh',
  width: '60%',
});

export const LoginSubText = styled(Typography)({
  color: '#7D82B8',
  fontFamily: 'Helvetica',
  fontWeight: 'regular',
  fontSize: '2.5vh',
});

export const SpotifyButton = styled(Button)({
  variant: 'contained',
  backgroundColor: '#1DB954',
  marginTop: '8vh',
  marginBottom: '2vh',
  height: '5vh',
  width: '48%',
  borderRadius: '50px',
});

export const SpotifyButtonTypography = styled(Typography)({
  color: 'white',
  fontFamily: 'Helvetica',
  fontWeight: 'regular',
  fontSize: '2.5vh',
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
