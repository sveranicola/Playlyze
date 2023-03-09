import type { NextPage } from 'next';
import { useState, useEffect } from 'react';
import { parseToken } from '../requests/authorize';
import { getUsersTopItems } from '../requests/users';
import { useRouter } from 'next/router';
import HomeView from '../components/home/homeView';
import { Box, styled } from '@mui/material';

const HomeBox = styled(Box)({
  background: '#FBFBFB',
  height: '100vh',
  width: '100%',
  margin: '0px',

  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
});

const Home: NextPage = () => {
  const router = useRouter();

  const [accessTokenExists, setAccessTokenExists] = useState<boolean>()
  const [userTopDataMediumTerm, setUserTopDataMediumTerm] = useState();


  useEffect(() => {
    if (router.asPath.length > 0) {
      const parsedToken = parseToken(router.asPath);
      setAccessTokenExists(parsedToken);
      router.replace('/Home');
    }
  }, [router]);

  useEffect(() => {
    getUsersTopItems((data: any) => {setUserTopDataMediumTerm(data)});

  }, [accessTokenExists]);

  // useEffect(() => {console.log(userTopDataMediumTerm)}, [userTopDataMediumTerm])

  return (
    <HomeBox>
      <HomeView userTopDataMediumTerm={userTopDataMediumTerm}/>
    </HomeBox>
  )
}

export default Home
