import * as React from 'react';

import { FormControl, FormHelperText, IconButton, InputAdornment, TextField } from '@mui/material';

import LockIcon from '@mui/icons-material/Lock';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

const PasswordField = ({
  password,
  setPassword,
  textFieldVariant = 'filled',
  loading,
  handleSubmit
}) => {
  const [showPassword, setShowPassword] = React.useState(false);
  const tooglePassword = () => {
    setShowPassword(!showPassword);
  };
  return (
    <FormControl margin="none" fullWidth error={Boolean(password.error)}>
      <TextField
        placeholder={textFieldVariant === 'outlined' ? 'Password' : ''}
        label={textFieldVariant !== 'outlined' && 'Password'}
        error={Boolean(password.error)}
        variant={textFieldVariant}
        value={password.text}
        disabled={loading}
        onChange={(e) => {
          setPassword({ text: e.target.value, error: '' });
        }}
        onKeyPress={(ev) => {
          if (ev.key === 'Enter') {
            ev.preventDefault();
            handleSubmit();
          }
        }}
        type={!showPassword ? 'password' : 'text'}
        InputProps={{
          startAdornment: textFieldVariant === 'outlined' && (
            <InputAdornment position="start">
              <LockIcon color={password.error ? 'error' : 'action'} />
            </InputAdornment>
          ),
          endAdornment: (
            <InputAdornment position="end">
              <IconButton aria-label="toggle password" onClick={tooglePassword}>
                {React.createElement(!showPassword ? VisibilityIcon : VisibilityOffIcon, {
                  color: password.error ? 'error' : 'action'
                })}
              </IconButton>
            </InputAdornment>
          )
        }}
      />
      <FormHelperText>{password.error || ' '}</FormHelperText>
    </FormControl>
  );
};
export default React.memo(PasswordField);
