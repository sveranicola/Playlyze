import type { NextPage } from 'next'
import { useEffect } from 'react'
import { parseToken } from '../requests/authorize'
import { useRouter } from 'next/router'

const Home: NextPage = () => {
  const router = useRouter();


  useEffect(() => {
    if (router.asPath.length > 0) {
      parseToken(router.asPath);
      router.replace('/Home');
    }
  }, [router]);

  return (
    <div>
      <h1>HOME FOR NOW</h1>
    </div>
  )
}

export default Home
