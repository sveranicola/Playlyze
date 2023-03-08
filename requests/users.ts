import axios from 'axios';

export const getUsersTopItems = (cb: any) => {
  const accessToken = JSON.parse(window.sessionStorage.getItem('accessToken') || '');

  axios.get('https://api.spotify.com/v1/me/top/artists', {
    headers: {
      'Authorization': 'Bearer ' + accessToken.access_token,
      'Content-Type': 'application/json',
    },
  })
  .then(res => { cb(res.data)})
  .catch(err => console.log(err))
}
