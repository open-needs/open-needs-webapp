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
        // react auth kit requires the token expiration date in minutes from now
        // this makes sense as the exp field of a JWT is not mandatory and the information might
        // be provided as a separated field by an auth endpoint; FastAPI-Users includes the exp
        // field in the token (default is 60 minutes) and it will be used to calculate the
        // expiration minutes from now by substracting the current date
        const { exp } = jwt_decode(res.data.access_token);
        const expiryDate = new Date(exp * 1000);
        const now = new Date();
        var diffMs = expiryDate - now;
        var diffMins = Math.round(((diffMs % 86400000) % 3600000) / 60000);
        if (
          signIn({
            token: res.data.access_token,
            expiresIn: diffMins, // given in minutes from now
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
