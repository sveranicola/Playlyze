import type { NextPage } from 'next';
import { UserAuthorization } from '../requests/authorize';

const Landing: NextPage = () => {
  return (
    <div >
      <h1>plz login to spotify</h1>

      <button onClick={() => { UserAuthorization()} }> Please do it</button>
    </div>
  )
}

export default Landing
