import * as React from 'react';

import Container from '@mui/material/Container';
import DisplayJson from './localJson/DisplayJson';
import FilterString from './FilterString';
import Grid from '@mui/material/Grid';
import Results from './Results';
import Typography from '@mui/material/Typography';
import UploadNeeds from './localJson/UploadNeeds';

export default function MainLayout() {
  return (
    <Container maxWidth="xl" sx={{ pt: 6 }}>
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
        spacing={3}
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
        <Grid
          item
          sm={12}
          sx={{
            mt: 2
          }}
        >
          <FilterString />
        </Grid>
        <Grid item sm={12}>
          <Results />
        </Grid>
      </Grid>
    </Container>
  );
}
