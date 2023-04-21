import type { NextPage } from 'next';
import Login from '../components/login/login';
import { Box, styled } from '@mui/material';

const LandingBox = styled(Box)({
  background: '#FBFBFB',
  height: '100%',
  width: '100%',
  margin: '0',

  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
});

const Landing: NextPage = () => {
  return (
    <LandingBox>
      <Login />
    </LandingBox>
  );
};

export default Landing;
