import Container from '@mui/material/Container';
import FilterString from './FilterString';
import Grid from '@mui/material/Grid';
import NeedsInput from './NeedsInput';
import Results from './Results';
import Typography from '@mui/material/Typography';

export default function QueryNeeds() {
  return (
    <Container maxWidth="xl" sx={{ pt: 9 }}>
      <Typography variant="h4">Query need items</Typography>
      <Grid
        container
        spacing={3}
        sx={{
          mt: 2
        }}
      >
        <Grid item sm={12}>
          <NeedsInput />
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
