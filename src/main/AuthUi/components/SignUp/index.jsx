import * as React from 'react';

import { Box, Button, FormControl, Typography } from '@mui/material';

import EmailField from '../Fields/EmailField';
import NameField from '../Fields/NameField';
import PasswordField from '../Fields/PasswordField';
import checkValid from '../../util/checkvalid';
const INITIAL = { text: '', error: '' };
const SignUp = ({
  handleSignUp,
  gobackToSignIn,
  textFieldVariant = 'filled',
  hideTabs,
  emailValidator = (e) => !!e,
  passwordValidator = (e) => !!e
}) => {
  const [name, setName] = React.useState(INITIAL);
  const [email, setEmail] = React.useState(INITIAL);
  const [loading, setLoading] = React.useState(false);
  const [password, setPassword] = React.useState(INITIAL);
  const handleSubmit = React.useCallback(async () => {
    if (
      ![
        checkValid(name, setName, emailValidator),
        checkValid(email, setEmail, emailValidator),
        checkValid(password, setPassword, passwordValidator)
      ].every((v) => v)
    )
      return;
    if (typeof handleSignUp !== 'function') handleSignUp = () => {};
    setLoading(true);
    return handleSignUp({
      name: name.text,
      email: email.text,
      password: password.text
    });
  }, []);
  return (
    <Box p={2}>
      <NameField {...{ name, setName, textFieldVariant, loading }} />
      <EmailField {...{ email, setEmail, textFieldVariant, loading }} />

      <PasswordField {...{ password, setPassword, textFieldVariant, loading }} />

      <FormControl margin="normal" fullWidth>
        <Button
          style={{ textTransform: 'none' }}
          size="large"
          variant="contained"
          color="primary"
          fullWidth
          onClick={handleSubmit}
        >
          Register
        </Button>
      </FormControl>
      {hideTabs && (
        <Typography
          variant="body2"
          color="textSecondary"
          align="center"
          style={{ cursor: 'pointer' }}
          onClick={gobackToSignIn}
        >
          Go back to Login
        </Typography>
      )}
    </Box>
  );
};
export default SignUp;
