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
import { Box, styled } from '@mui/material';

const HomeBox = styled(Box)({
  background: '#FBFBFB',
  width: '100%',
  // maxWidth: '1700px',
  alignContent: 'center',

  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
});

const Home: NextPage = () => {
  const router = useRouter();

  const [accessTokenExists, setAccessTokenExists] = useState<boolean>();
  const [userTopDataAllTerm, setUserTopDataAllTerm] = useState();
  const [userTopDataMediumTerm, setUserTopDataMediumTerm] = useState();
  const [userTopDataShortTerm, setUserTopDataShortTerm] = useState();

  useEffect(() => {
    if (router.asPath.length > 0) {
      const parsedToken = parseToken(router.asPath);
      setAccessTokenExists(parsedToken);
    }
  }, [router]);

  useEffect(() => {
    router.replace('/Home');
    getUsersTopItemsAllTerm((data: any) => {
      setUserTopDataAllTerm(data);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [accessTokenExists]);

  useEffect(() => {
    getUsersTopItemsMediumTerm((data: any) => {
      setUserTopDataMediumTerm(data);
    });

    getUsersTopItemsShortTerm((data: any) => {
      setUserTopDataShortTerm(data);
    });
  }, [userTopDataAllTerm]);

  return (
    <HomeBox>
      <HomeView
        userTopDataAllTerm={userTopDataAllTerm}
        userTopDataMediumTerm={userTopDataMediumTerm}
        userTopDataShortTerm={userTopDataShortTerm}
      />
    </HomeBox>
  );
};

export default Home;
