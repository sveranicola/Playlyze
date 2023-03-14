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
  height: 'fit-content',
  width: '100%',
  margin: '0px',

  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
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
      router.replace('/Home');
    }
  }, [router]);

  useEffect(() => {
    getUsersTopItemsAllTerm((data: any) => {
      setUserTopDataAllTerm(data);
    });
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
