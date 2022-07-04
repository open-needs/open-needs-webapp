import { Box, Container, Grid, Typography } from '@mui/material';

import TabAuth from './components/Tab';

const FullWidthAuth = ({ ...props }) => {
  return (
    <Box p={9}>
      <Container maxWidth="md">
        <Box boxShadow="0px 0px 10px 3px #ddd" p={3} width="100%" height="100%">
          <Grid container spacing={1}>
            <Grid item xs={false} md={7}>
              <Typography variant="h4" color="textSecondary">
                {props.welcomeComponent ? props.welcomeComponent : <b>Welcome</b>}
              </Typography>
            </Grid>
            <Grid item xs={12} md={5}>
              <TabAuth {...props} />
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};
export default FullWidthAuth;
