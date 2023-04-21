/*
 *  This function is a redirect to spotify to grant an access token
 *  The access type is using spotify's implicit grant flow for limited
 *  time authorization request.
 */
export const UserAuthorization = async () => {
  let url = 'https://accounts.spotify.com/authorize';
  url += `?client_id=${process.env.NEXT_PUBLIC_CLIENT_ID}`;
  url += `&response_type=token`;
  url += `&redirect_uri=${process.env.NEXT_PUBLIC_REDIRECT_URI}`;
  url += `&scope=user-top-read`;

  window.location.href = url;
};

/*
 * This parses the access token from the url and saves it in the sessions
 * storage for later use
 */
export const parseToken = (token: string) => {
  if (token.includes('access_token')) {
    let tokens = token.split('#');
    let splitTokens = tokens[1].split('&');

    let authTokens: any = {};

    splitTokens.forEach((value) => {
      let temp = value.split('=');
      authTokens[temp[0]] = temp[1];
    });

    sessionStorage.setItem('accessToken', JSON.stringify(authTokens));

    return true;
  } else {
    return false;
  }
};
