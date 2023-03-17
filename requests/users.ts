import axios from 'axios';

export const getUsersTopItemsAllTerm = (cb: any) => {
  const accessToken = JSON.parse(
    window.sessionStorage.getItem('accessToken') || ''
  );

  axios
    .get(
      'https://api.spotify.com/v1/me/top/artists?limit=50&time_range=long_term',
      {
        headers: {
          Authorization: 'Bearer ' + accessToken.access_token,
          'Content-Type': 'application/json',
        },
      }
    )
    .then((res) => {
      cb(res.data);
    })
    .catch((err) => console.log(err));
};

export const getUsersTopItemsMediumTerm = (cb: any) => {
  const accessToken = JSON.parse(
    window.sessionStorage.getItem('accessToken') || ''
  );

  axios
    .get(
      'https://api.spotify.com/v1/me/top/artists?limit=50&time_range=medium_term',
      {
        headers: {
          Authorization: 'Bearer ' + accessToken.access_token,
          'Content-Type': 'application/json',
        },
      }
    )
    .then((res) => {
      cb(res.data);
    })
    .catch((err) => console.log(err));
};

export const getUsersTopItemsShortTerm = (cb: any) => {
  const accessToken = JSON.parse(
    window.sessionStorage.getItem('accessToken') || ''
  );

  axios
    .get(
      'https://api.spotify.com/v1/me/top/artists?limit=50&time_range=short_term',
      {
        headers: {
          Authorization: 'Bearer ' + accessToken.access_token,
          'Content-Type': 'application/json',
        },
      }
    )
    .then((res) => {
      cb(res.data);
    })
    .catch((err) => console.log(err));
};
