import { Box, Container, Grid, Paper, Typography } from '@mui/material';

import TabAuth from './components/Tab';

const FullWidthAuth = ({ ...props }) => {
  return (
    <Box p={9}>
      <Container maxWidth="md">
        <Paper elevation={3} sx={{ p: 3, width: '100%', height: '100%' }}>
          <Grid container spacing={1}>
            <Grid item xs={false} md={7}>
              {props.welcomeComponent ? (
                props.welcomeComponent
              ) : (
                <Typography variant="h4" color="textSecondary">
                  <b>Welcome</b>{' '}
                </Typography>
              )}
            </Grid>
            <Grid item xs={12} md={5}>
              <TabAuth {...props} />
            </Grid>
          </Grid>
        </Paper>
      </Container>
    </Box>
  );
};
export default FullWidthAuth;
