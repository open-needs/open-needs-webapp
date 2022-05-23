import * as React from 'react';

import { FormControl, FormHelperText, InputAdornment, TextField } from '@mui/material';

import PersonIcon from '@mui/icons-material/Person';
const NameField = ({ name, setName, textFieldVariant = 'filled', loading }) => {
  return (
    <FormControl margin="none" fullWidth error={Boolean(name?.error)}>
      <TextField
        placeholder={textFieldVariant === 'outlined' ? 'Name' : ''}
        label={textFieldVariant !== 'outlined' && 'Name'}
        error={Boolean(name?.error)}
        variant={textFieldVariant}
        value={name?.text}
        disabled={loading}
        onChange={(e) => {
          setName({ text: e.target.value, error: '' });
        }}
        type={'name'}
        InputProps={{
          startAdornment: textFieldVariant === 'outlined' && (
            <InputAdornment position="start">
              <PersonIcon color={name?.error ? 'error' : 'action'} />
            </InputAdornment>
          )
        }}
      />
      <FormHelperText>{name?.error || ' '}</FormHelperText>
    </FormControl>
  );
};
export default React.memo(NameField);
