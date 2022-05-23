const checkValid = (value, setValue, validator) => {
  if (!value.text) {
    setValue({ ...value, error: 'This is required' });
    return false;
  }
  if (typeof validator === 'function' && !validator(value.text)) {
    setValue({ ...value, error: 'This is invalid' });
    return false;
  }
  return true;
};
export default checkValid;
