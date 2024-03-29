import { Box, ButtonGroup, Button, Typography, styled } from '@mui/material';

export const HomeViewBox = styled(Box)({
  background: '#FBFBFB',
  width: '100%',

  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
});

export const HeaderBox = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',

  background: '#FBFBFB',
  height: '13vh',
  width: '100%',
});

export const LogoBox = styled(Box)({
  height: '70%',
  maxWidth: '350px',
  width: '30%',

  '@media (max-width: 500px)': {
    height: null,
    maxWidth: null,
    width: '65%',
  },
});

export const ButtonCluster = styled(ButtonGroup)({
  varient: 'outlined',
  marginTop: '3vh',
  maxWidth: '800px',

  '@media (max-width: 500px)': {
    marginTop: '1vh',
  },
});

export const CustomButton = styled(Button)({
  color: '#7D82B8',
  borderColor: '#7D82B8',
  height: '4.5vh',
  width: 'fit-content',
  fontSize: '1.5vh',

  '@media (max-width: 500px)': {
    height: '4.5vh',
    width: 'fit-content',
    fontSize: '1.4vh',
  },
});

export const GridBox = styled(Box)({
  height: '100%',
  width: '100%',
  marginTop: '3vh',

  '@media (max-width: 500px)': {
    marginTop: '1.5vh',
  },
});
