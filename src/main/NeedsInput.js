import * as React from 'react';

import { Button, Grid } from '@mui/material';
import { TabPanel, a11yProps } from './utils/TabPanel';
import { isRemoteAtom, remoteBaseUrlAtom } from '../shared/atoms';
import { useAuthHeader, useIsAuthenticated } from 'react-auth-kit';
import { useRecoilValue, useSetRecoilState } from 'recoil';

import Box from '@mui/material/Box';
import DisplayJson from './localJson/DisplayJson';
import { Link } from 'react-router-dom';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import UploadNeeds from './localJson/UploadNeeds';
import axios from 'axios';
import { useSnackbar } from 'notistack';

export default function NeedsInput() {
  const isAuthenticated = useIsAuthenticated();
  const authHeader = useAuthHeader();
  const remoteBaseUrl = useRecoilValue(remoteBaseUrlAtom);
  const { enqueueSnackbar } = useSnackbar();

  const [value, setValue] = React.useState(1);
  const setIsRemote = useSetRecoilState(isRemoteAtom);
  const handleChange = (event, newValue) => {
    setValue(newValue);
    setIsRemote(newValue === 1);
  };
  const remoteNeedsQuery = async () => {
    if (!isAuthenticated()) {
      enqueueSnackbar('Not authenticated or token expired', {
        variant: 'error'
      });
      return;
    }
    const requestConfig = {
      headers: { Authorization: authHeader() }
    };
    await axios
      .get(`${remoteBaseUrl}/api/needs?skip=0&limit=100`, requestConfig)
      .then((res) => {
        if (res.status === 200) {
          enqueueSnackbar(`Successful POST to ${remoteBaseUrl}/api/needs`, { variant: 'success' });
        } else {
          enqueueSnackbar(
            `Error POST to ${remoteBaseUrl}/api/needs: HTTP status is ${res.status} (not 200)`,
            {
              variant: 'error'
            }
          );
        }
      })
      .catch((err) => {
        enqueueSnackbar(`Error POST to ${remoteBaseUrl}/api/needs: ${err.message}`, {
          variant: 'error'
        });
      });
  };
  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="Local needs.json" {...a11yProps(0)} />
          <Tab label="Remote server" {...a11yProps(1)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <Grid
          container
          spacing={2}
          sx={{
            mt: 0
          }}
        >
          <Grid item pr={2}>
            <UploadNeeds />
          </Grid>
          <Grid item sm={12} md>
            <DisplayJson />
          </Grid>
        </Grid>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Box pt={2}>
          {isAuthenticated() ? (
            <Button variant="contained" color="secondary" onClick={remoteNeedsQuery}>
              Start query
            </Button>
          ) : (
            <Button variant="contained" color="secondary" component={Link} to="/Auth">
              Sign in
            </Button>
          )}
        </Box>
      </TabPanel>
    </Box>
  );
}
