import * as React from 'react';

import Container from '@mui/material/Container';
import FilterString from './FilterString';
import Grid from '@mui/material/Grid';
import Input from './Input';
import Results from './Results';
import Typography from '@mui/material/Typography';

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
        <Grid item sm={12}>
          <Input />
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
