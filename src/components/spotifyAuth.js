import React, { useEffect } from 'react';
import SpotifyWebApi from 'spotify-web-api-js';

const CLIENT_ID = '33eeeaa39f9646f1aaef25176d6d803b';
const REDIRECT_URI = 'http://localhost:3000/callback';

const SpotifyAuth = () => {
  useEffect(() => {
    // Handle the redirect and extract the access token from the URL hash fragment
    const hash = window.location.hash.substring(1).split('&').reduce((initial, item) => {
      if (item) {
        const parts = item.split('=');
        initial[parts[0]] = decodeURIComponent(parts[1]);
      }
      return initial;
    }, {});

    // If there's an access token in the hash, you can store it in local storage, state, or context as per your application's needs
    if (hash.access_token) {
      localStorage.setItem('spotifyAccessToken', hash.access_token);
    }
  }, []);

  const handleLogin = () => {
    window.location = `https://accounts.spotify.com/authorize?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=token&show_dialog=true`;
  };

  return (
    <div>
      <h2>Spotify Authentication</h2>
      <button onClick={handleLogin}>Login with Spotify</button>
    </div>
  );
};

export default SpotifyAuth;
