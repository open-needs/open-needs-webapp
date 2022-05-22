import React from 'react';
import axios from 'axios';
import { be_server } from '../../shared/constants';
import jwt_decode from 'jwt-decode';
import { useSignIn } from 'react-auth-kit';

export function Wrapper() {
  const signIn = useSignIn();
  const [formData, setFormData] = React.useState({
    username: 'admin@admin.com',
    password: 'admin'
  });

  const onSubmit = (e) => {
    e.preventDefault();
    const params = new URLSearchParams();
    params.append('username', formData.username);
    params.append('password', formData.password);
    axios
      .post(`${be_server}/auth/jwt/login`, params)
      .then((res) => {
        if (res.status === 200) {
          const { exp } = jwt_decode(res.data.access_token);
          if (
            signIn({
              token: res.data.access_token,
              expiresIn: exp,
              tokenType: 'Bearer',
              authState: 'signed_in'
              // refreshToken: res.data.refreshToken, // Only if you are using refreshToken feature
              // refreshTokenExpireIn: res.data.refreshTokenExpireIn
            })
          ) {
            console.log('Signed in');
            // Only if you are using refreshToken feature
            // Redirect or do-something
          } else {
            console.log('Error signing in');
            //Throw error
          }
        }
      })
      .catch((err) => {
        if (err.response.status === 400 && err.response.data.detail === 'LOGIN_BAD_CREDENTIALS') {
          console.log('Bad credentials');
        } else {
          console.log(`Unknown error occurred ${err}`);
        }
      });
  };

  return (
    <form onSubmit={onSubmit}>
      <input
        onChange={(e) => setFormData({ ...formData, username: e.target.value })}
        // value={formData.username}
      />
      <input
        type={'password'}
        onChange={(e) => setFormData({ ...formData, password: e.target.value })}
        // value={formData.password}
      />

      <button>Submit</button>
    </form>
  );
}
