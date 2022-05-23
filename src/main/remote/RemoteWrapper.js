import { Alert, Box, Button, Snackbar, Typography } from '@mui/material';
import { authOpenAtom, showErrorMessageAtom } from '../../shared/atoms';

import DialogAuthWrapper from './DialogAuthWrapper';
import React from 'react';
import axios from 'axios';
import { be_server } from '../../shared/constants';
import jwt_decode from 'jwt-decode';
import { useIsAuthenticated } from 'react-auth-kit';
import { useRecoilState } from 'recoil';
import { useSignIn } from 'react-auth-kit';

export function RemoteWrapper() {
  const isAuthenticated = useIsAuthenticated();
  const signIn = useSignIn();
  const [authOpen, setAuthOpen] = useRecoilState(authOpenAtom);
  const [showErrorMessage, setShowErrorMessage] = useRecoilState(showErrorMessageAtom);
  const [error, setError] = React.useState(null);

  const handleSignInButton = () => {
    setAuthOpen(true);
  };

  const onSubmit = ({ email, password }) => {
    const params = new URLSearchParams();
    params.append('username', email);
    params.append('password', password);
    axios
      .post(`${be_server}/auth/jwt/login`, params)
      .then((res) => {
        if (res.status === 200) {
          const { exp } = jwt_decode(res.data.access_token);
          if (
            signIn({
              token: res.data.access_token,
              expiresIn: exp,
              tokenType: 'Bearer'
              //   authState: 'signed_in'
              // refreshToken: res.data.refreshToken, // Only if you are using refreshToken feature
              // refreshTokenExpireIn: res.data.refreshTokenExpireIn
            })
          ) {
            setAuthOpen(false);
            setError(null);
            setShowErrorMessage(false);
            // Only if you are using refreshToken feature
            // Redirect or do-something
          } else {
            //Throw error
          }
        }
      })
      .catch((err) => {
        setShowErrorMessage(true);
        if (err.response.status === 400 && err.response.data.detail === 'LOGIN_BAD_CREDENTIALS') {
          setError('Bad credentials');
        } else {
          setError(err.message);
          console.log(`Unknown error occurred ${err}`);
        }
      });
  };

  return (
    <>
      <Box
        sx={{
          mt: 3
        }}
      >
        {isAuthenticated() ? (
          <Typography>Signed in</Typography>
        ) : (
          <Button variant="contained" color="secondary" onClick={handleSignInButton}>
            Sign in
          </Button>
        )}
      </Box>

      {error && showErrorMessage ? (
        <Snackbar open={true} autoHideDuration={6000}>
          <Alert severity="error" sx={{ width: '100%' }}>
            {error}
          </Alert>
        </Snackbar>
      ) : null}
      {authOpen ? (
        <DialogAuthWrapper logoName={`Using needs server ${be_server}`} handleSignIn={onSubmit} />
      ) : null}
    </>
  );
  // <AuthDialog />
  // <form onSubmit={onSubmit}>
  //   <input
  //     onChange={(e) => setFormData({ ...formData, username: e.target.value })}
  //     // value={formData.username}
  //   />
  //   <input
  //     type={'password'}
  //     onChange={(e) => setFormData({ ...formData, password: e.target.value })}
  //     // value={formData.password}
  //   />

  //   <button>Submit</button>
  // </form>
}
