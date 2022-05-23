import * as React from 'react';

import { Box, Tab, Tabs, Typography } from '@mui/material';

import Forget from '../Forget/index';
import SignIn from '../SignIn';
import SignUp from '../SignUp';

const App = ({ hideTabs, logoComponent, logoName, ...props }) => {
  const [authIndex, setAuthIndex] = React.useState(0);
  const tabChange = (event, tabValue) => {
    event.preventDefault();
    setAuthIndex(tabValue);
  };
  const goToForget = () => {
    setAuthIndex(2);
  };
  const goToSignUp = () => {
    setAuthIndex(1);
  };
  const gobackToSignIn = () => {
    setAuthIndex(0);
  };
  if (authIndex === 2) return <Forget {...{ ...props, gobackToSignIn }} />;
  return (
    <>
      <Box display="flex" justifyContent="center" pb={2}>
        {logoComponent ||
          (logoName && (
            <Typography align="center" variant="h5" color="textPrimary">
              {logoName}
            </Typography>
          ))}
      </Box>
      {!hideTabs && (
        <Tabs
          variant="fullWidth"
          value={authIndex}
          centered
          onChange={tabChange}
          aria-label="auth tabs"
        >
          <Tab label="Login" tabIndex={0} />
          {props.handleSignUp ? <Tab label="Register" tabIndex={1} /> : null}
        </Tabs>
      )}
      {(() => {
        switch (authIndex) {
          case 0:
            return <SignIn {...{ ...props, goToForget, hideTabs, goToSignUp }} />;
          case 1:
            return <SignUp {...{ ...props, hideTabs, gobackToSignIn }} />;
          default:
            return null;
        }
      })()}
    </>
  );
};
export default App;
