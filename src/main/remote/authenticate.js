import axios from 'axios';
import jwt_decode from 'jwt-decode';

export const submitAuthentication = (
  baseUrl,
  signIn,
  enqueueSnackbar,
  email,
  password,
  navigate,
  targetUrl
) => {
  const params = new URLSearchParams();
  params.append('username', email);
  params.append('password', password);
  axios
    .post(`${baseUrl}/auth/jwt/login`, params)
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
          enqueueSnackbar('Successfully signed in', { variant: 'success' });
          if (navigate) {
            if (targetUrl) {
              navigate(targetUrl);
            } else {
              navigate(-1);
            }
          }
          // Only if you are using refreshToken feature
          // Redirect or do-something
        } else {
          enqueueSnackbar('Error signing in', { variant: 'error' });
        }
      }
    })
    .catch((err) => {
      if (err.response.status === 400 && err.response.data.detail === 'LOGIN_BAD_CREDENTIALS') {
        enqueueSnackbar('Bad credentials', { variant: 'error' });
      } else {
        enqueueSnackbar(`Unknown error occurred ${err}`, { variant: 'error' });
      }
    });
};
