import type { NextPage } from 'next';
import { useState, useEffect } from 'react';
import { parseToken } from '../requests/authorize';
import { getUsersTopItems } from '../requests/users';
import { useRouter } from 'next/router';

const Home: NextPage = () => {
  const router = useRouter();

  const [accessTokenExists, setAccessTokenExists] = useState<boolean>()
  const [userTopData, setUserTopData] = useState();


  useEffect(() => {
    if (router.asPath.length > 0) {
      const parsedToken = parseToken(router.asPath);
      setAccessTokenExists(parsedToken);
      router.replace('/Home');
    }
  }, [router]);

  useEffect(() => {
    getUsersTopItems((data: any) => {setUserTopData(data)});

  }, [accessTokenExists]);

  useEffect(() => {console.log(userTopData)}, [userTopData])

  return (
    <div>
      <h1>HOME FOR NOW</h1>
    </div>
  )
}

export default Home
