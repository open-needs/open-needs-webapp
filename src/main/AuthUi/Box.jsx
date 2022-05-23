import * as React from 'react';

import { Box, Grid } from '@mui/material';

import TabAuth from './components/Tab';
const BoxAuth = ({ ...props }) => {
  return (
    <Box height="100vh">
      <Grid container>
        <Grid item xs={false} md={4} />
        <Grid item xs={12} md={4}>
          <Box p={2} boxShadow={2}>
            <TabAuth {...props} />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};
export default BoxAuth;
