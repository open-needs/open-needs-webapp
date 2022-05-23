import * as React from 'react';

import { Box, Button, FormControl, IconButton, Typography } from '@mui/material';

import EmailField from '../Fields/EmailField';
import FacebookIcon from '@mui/icons-material/Facebook';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import PasswordField from '../Fields/PasswordField';
import TwitterIcon from '@mui/icons-material/Twitter';
import checkValid from '../../util/checkvalid';

const Social = {
  Github: {
    color: '#131418',
    icon: GitHubIcon
  },
  Linkedin: {
    color: '#0077B5',
    icon: LinkedInIcon
  },
  Twitter: {
    color: '#55acee',
    icon: TwitterIcon
  },
  Facebook: {
    color: '#3b5999',
    icon: FacebookIcon
  },
  Google: {
    color: 'red',
    icon: () => (
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/1004px-Google_%22G%22_Logo.svg.png"
        width={20}
        height={20}
      />
    )
  }
};
const INITIAL = { text: '', error: '' };
const SignIn = ({
  goToForget,
  handleSignIn,
  goToSignUp,
  handleSocial,
  hideTabs = false,
  textFieldVariant = 'filled',
  emailValidator = (e) => !!e,
  passwordValidator = (e) => !!e
}) => {
  const [email, setEmail] = React.useState(INITIAL);
  const [password, setPassword] = React.useState(INITIAL);
  const [loading, setLoading] = React.useState(false);
  const handleSubmit = React.useCallback(async () => {
    if (
      ![
        checkValid(email, setEmail, emailValidator),
        checkValid(password, setPassword, passwordValidator)
      ].every((v) => v)
    )
      return;
    setLoading(true);
    if (typeof handleSignIn !== 'function') handleSignIn = () => {};
    await handleSignIn({ email: email.text, password: password.text });
    setLoading(false);
  }, [email, password]);
  return (
    <Box p={2}>
      <EmailField {...{ email, setEmail, textFieldVariant, loading, handleSubmit }} />
      <PasswordField {...{ password, setPassword, textFieldVariant, loading, handleSubmit }} />

      <Typography
        variant="body2"
        color="textSecondary"
        align="right"
        style={{ cursor: 'pointer' }}
        onClick={goToForget}
      >
        Forgot Password?
      </Typography>

      <FormControl margin="normal" fullWidth>
        <Button
          onClick={handleSubmit}
          style={{ textTransform: 'none' }}
          size="large"
          disabled={loading}
          variant="contained"
          color="primary"
          fullWidth
        >
          Sign In
        </Button>
      </FormControl>

      {Object.values(handleSocial).some((v) => typeof v === 'function') && (
        <Typography variant="subtitle2" color="textSecondary" align="center">
          or continue with
        </Typography>
      )}
      <Box display="flex" justifyContent="center">
        {Object.entries(handleSocial).map(([key, handler]) => {
          if (typeof handler !== 'function' || !Social[key] || !Social[key].icon) return null;
          return (
            <IconButton key={key} aria-label={`${key} login button`} onClick={handler}>
              {React.createElement(Social[key].icon, {
                htmlColor: Social[key].color
              })}
            </IconButton>
          );
        })}
      </Box>
      {hideTabs && (
        <Typography
          variant="body2"
          color="textSecondary"
          align="center"
          style={{ cursor: 'pointer' }}
          onClick={goToSignUp}
        >
          No Account? Create Now
        </Typography>
      )}
    </Box>
  );
};
export default SignIn;
