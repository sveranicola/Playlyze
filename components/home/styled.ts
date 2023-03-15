import { Box, ButtonGroup, Button, Typography, styled } from '@mui/material';

export const HomeViewBox = styled(Box)({
  background: '#FBFBFB',
  width: '100%',

  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
});

export const HeaderBox = styled(Box)({
  background: '#FBFBFB',
  height: '13vh',
  width: '100%',
  minHeight: '150px',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
});

export const LogoBox = styled(Box)({
  height: '70%',
  maxWidth: '350px',
  width: '30%',
});

export const TimeSelect = styled(ButtonGroup)({
  varient: 'outlined',
  marginTop: '3vh',
  maxWidth: '800px',
});

export const TimeButton = styled(Button)({
  color: '#7D82B8',
  borderColor: '#7D82B8',
  height: '4.5vh',
  width: '15vw',
});

export const SliderBox = styled(Box)({
  height: '100%',
  width: '100%',
  marginTop: '3vh',
});
