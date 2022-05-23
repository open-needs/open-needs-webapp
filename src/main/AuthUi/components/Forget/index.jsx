import * as React from 'react';

import { Box, Button, FormControl, IconButton, Typography } from '@mui/material';

import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import EmailField from '../Fields/EmailField';
import checkValid from '../../util/checkvalid';

const INITIAL = { text: '', error: '' };
const Forget = ({
  gobackToSignIn,
  handleForget,
  textFieldVariant = 'filled',
  emailValidator = (e) => !!e
}) => {
  const [email, setEmail] = React.useState(INITIAL);
  const [loading, setLoading] = React.useState(false);
  const handleSubmit = React.useCallback(async () => {
    if (!checkValid(email, setEmail, emailValidator)) return;
    if (typeof handleForget !== 'function') handleForget = () => {};
    setLoading(true);
    return handleForget({ email: email.text });
  }, []);
  return (
    <>
      <IconButton aria-label="go back" onClick={gobackToSignIn}>
        <ArrowBackIcon color="action" />
      </IconButton>
      <Box p={2} pb={6}>
        <Typography variant="h6" color="textSecondary" align="center">
          <b>Forgot Your Password</b>
        </Typography>
        <br />
        <EmailField {...{ email, setEmail, textFieldVariant, loading }} />

        <FormControl margin="none" fullWidth>
          <Button
            onClick={handleSubmit}
            style={{ textTransform: 'none' }}
            size="large"
            variant="contained"
            color="primary"
            fullWidth
          >
            Reset my Password
          </Button>
        </FormControl>
      </Box>
    </>
  );
};
export default Forget;
