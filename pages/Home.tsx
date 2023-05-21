import type { NextPage } from 'next';
import { useState, useEffect } from 'react';
import { parseToken } from '../requests/authorize';
import {
  getUsersTopItemsAllTerm,
  getUsersTopItemsMediumTerm,
  getUsersTopItemsShortTerm,
} from '../requests/users';
import { useRouter } from 'next/router';
import HomeView from '../components/home/homeView';
import { Box, CircularProgress, styled, Typography } from '@mui/material';
import { topArtist } from '../types/data';

const HomeBox = styled(Box)({
  background: '#FBFBFB',
  width: '100%',
  height: '100vh',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  alignContent: 'center',
});

const SpinnerContainer = styled(Box)({
  height: '100vh',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
});

const LogoutBox = styled(Box)({
  width: '100%',
  height: '10vh',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  alignContent: 'center',
  textAlign: 'center',
});

const Home: NextPage = () => {
  const router = useRouter();

  const [accessTokenExists, setAccessTokenExists] = useState<boolean>();
  const [userTopDataAllTerm, setUserTopDataAllTerm] =
    useState<topArtist | null>();
  const [userTopDataMediumTerm, setUserTopDataMediumTerm] =
    useState<topArtist | null>();
  const [userTopDataShortTerm, setUserTopDataShortTerm] =
    useState<topArtist | null>();

  useEffect(() => {
    if (router.asPath.length > 0) {
      const parsedToken = parseToken(router.asPath);
      setAccessTokenExists(parsedToken);
    }
  }, [router]);

  useEffect(() => {
    router.replace('/Home');
    getUsersTopItemsAllTerm((data: topArtist) => {
      setUserTopDataAllTerm(data);
    });
    getUsersTopItemsMediumTerm((data: topArtist) => {
      setUserTopDataMediumTerm(data);
    });

    getUsersTopItemsShortTerm((data: topArtist) => {
      setUserTopDataShortTerm(data);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [accessTokenExists]);

  const handleLogout = () => {
    router.replace('/');
    setAccessTokenExists(false);
    setUserTopDataAllTerm(null);
    setUserTopDataMediumTerm(null);
    setUserTopDataShortTerm(null);
    sessionStorage.removeItem('access_token');
  };

  return (
    <HomeBox>
      {userTopDataAllTerm && userTopDataMediumTerm && userTopDataShortTerm ? (
        <HomeView
          userTopDataAllTerm={userTopDataAllTerm}
          userTopDataMediumTerm={userTopDataMediumTerm}
          userTopDataShortTerm={userTopDataShortTerm}
        />
      ) : (
        <SpinnerContainer>
          <CircularProgress sx={{ color: '#7D82B8' }} size='15vh' />
        </SpinnerContainer>
      )}
      <LogoutBox
        onClick={() => {
          handleLogout();
        }}
      >
        <Typography
          sx={{ color: '#7D82B8', fontWeight: 'normal', fontSize: '3vh' }}
        >
          Logout
        </Typography>
      </LogoutBox>
    </HomeBox>
  );
};

export default Home;
