/* eslint-disable @next/next/no-img-element */
import {
  LoginOuterBox,
  SpotifyButton,
  SpotifyButtonTypography,
  LoginImageBox,
  LoginSubText,
  LoginInfoText,
} from './styled';
import { UserAuthorization } from '../../requests/authorize';

const Login = () => {
  return (
    <LoginOuterBox>
      <LoginImageBox>
        <img
          src='https://i.imgur.com/cm3Bn0p.png'
          alt='logo'
          style={{ width: '100%' }}
        />
      </LoginImageBox>
      <LoginSubText>lets see your hand</LoginSubText>
      <SpotifyButton
        onClick={() => {
          UserAuthorization();
        }}
      >
        <SpotifyButtonTypography>Connect with Spotify</SpotifyButtonTypography>
      </SpotifyButton>
      <LoginSubText>
        Welcome please login to Spotify to view your deck!
      </LoginSubText>
      <LoginInfoText>
        This is a small side project created to use the Spotify API to create a
        deck of cards based on your top artist there is no information saved by
        this app once the permission from Spotify runs out of time you must sign
        in again.
      </LoginInfoText>
    </LoginOuterBox>
  );
};

export default Login;
