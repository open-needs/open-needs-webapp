import * as React from 'react';

import Container from '@mui/material/Container';
import DisplayJson from './localJson/DisplayJson';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import UploadNeeds from './localJson/UploadNeeds';

export default function MainLayout() {
  return (
    <Container maxWidth="xl">
      <Typography
        variant="h4"
        sx={{
          mt: 3
        }}
      >
        Query need items
      </Typography>
      <Grid
        container
        spacing={2}
        sx={{
          mt: 2
        }}
      >
        <Grid item pr={2}>
          <UploadNeeds />
        </Grid>
        <Grid item sm={12} md>
          <DisplayJson />
        </Grid>
      </Grid>
    </Container>
  );
}
