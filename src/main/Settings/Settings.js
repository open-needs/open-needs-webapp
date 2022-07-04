import { Container, Grid, Typography } from '@mui/material';

import RemoteUrl from './RemoteUrl';

export default function Settings() {
  return (
    <Container maxWidth="xl" sx={{ mt: 9 }}>
      <Typography variant="h4">Settings</Typography>
      <Grid
        container
        spacing={3}
        sx={{
          mt: 2
        }}
        direction="row"
        justifyContent="flex-start"
        alignItems="center"
      >
        <Grid item>
          <Typography variant="subtitle2">Open Needs Server URL</Typography>
        </Grid>
        <Grid item>
          <RemoteUrl />
        </Grid>
      </Grid>
    </Container>
  );
}
