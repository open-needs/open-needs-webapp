import * as React from 'react';

import { FormControl, FormHelperText, InputAdornment, TextField } from '@mui/material';

import EmailIcon from '@mui/icons-material/Email';

const EmailField = ({ email, setEmail, textFieldVariant = 'filled', loading, handleSubmit }) => {
  return (
    <FormControl margin="none" fullWidth error={Boolean(email.error)}>
      <TextField
        placeholder={textFieldVariant === 'outlined' ? 'Email' : ''}
        label={textFieldVariant === 'outlined' ? null : 'Email'}
        error={Boolean(email.error)}
        variant={textFieldVariant}
        value={email.text}
        disabled={loading}
        onChange={(e) => {
          setEmail({ text: e.target.value, error: '' });
        }}
        onKeyPress={(ev) => {
          if (ev.key === 'Enter') {
            ev.preventDefault();
            handleSubmit();
          }
        }}
        type={'email'}
        InputProps={{
          startAdornment: textFieldVariant === 'outlined' && (
            <InputAdornment position="start">
              <EmailIcon color={email.error ? 'error' : 'action'} />
            </InputAdornment>
          )
        }}
      />
      <FormHelperText>{email.error || ' '}</FormHelperText>
    </FormControl>
  );
};
export default React.memo(EmailField);
