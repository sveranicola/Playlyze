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
import { Box, CircularProgress, styled } from '@mui/material';
import { topArtist } from '../types/data';

const HomeBox = styled(Box)({
  background: '#FBFBFB',
  width: '100%',
  hieght: '100vh',
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

const Home: NextPage = () => {
  const router = useRouter();

  const [accessTokenExists, setAccessTokenExists] = useState<boolean>();
  const [userTopDataAllTerm, setUserTopDataAllTerm] = useState<topArtist>();
  const [userTopDataMediumTerm, setUserTopDataMediumTerm] =
    useState<topArtist>();
  const [userTopDataShortTerm, setUserTopDataShortTerm] = useState<topArtist>();

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
    </HomeBox>
  );
};

export default Home;
