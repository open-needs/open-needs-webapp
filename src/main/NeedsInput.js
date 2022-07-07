import * as React from 'react';

import { Button, Grid } from '@mui/material';
import { TabPanel, a11yProps } from './utils/TabPanel';
import { isRemoteAtom, remoteBaseUrlAtom, remoteNeedsAtom } from '../shared/atoms';
import { useAuthHeader, useIsAuthenticated } from 'react-auth-kit';
import { useRecoilValue, useSetRecoilState } from 'recoil';

import Box from '@mui/material/Box';
import DisplayLocalNeedsJson from './localJson/DisplayJson';
import { Link } from 'react-router-dom';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import UploadLocalNeedsJson from './localJson/UploadNeeds';
import axios from 'axios';
import { useSnackbar } from 'notistack';

export default function NeedsInput() {
  const isAuthenticated = useIsAuthenticated();
  const setRemoteNeeds = useSetRecoilState(remoteNeedsAtom);

  const authHeader = useAuthHeader();
  const remoteBaseUrl = useRecoilValue(remoteBaseUrlAtom);
  const { enqueueSnackbar } = useSnackbar();

  const [dataSourceTab, setDateSourceTab] = React.useState(1);
  const setIsRemote = useSetRecoilState(isRemoteAtom);
  const handleLocalRemoteTabChange = (event, newValue) => {
    setDateSourceTab(newValue);
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
          const needs = Object.values(res.data);
          setRemoteNeeds(needs);
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
        <Tabs
          value={dataSourceTab}
          onChange={handleLocalRemoteTabChange}
          aria-label="basic tabs example"
        >
          <Tab label="Local needs.json" {...a11yProps(0)} />
          <Tab label="Remote server" {...a11yProps(1)} />
        </Tabs>
      </Box>
      <TabPanel value={dataSourceTab} index={0}>
        <Grid
          container
          spacing={2}
          sx={{
            mt: 0
          }}
        >
          <Grid item pr={2}>
            <UploadLocalNeedsJson />
          </Grid>
          <Grid item sm={12} md>
            <DisplayLocalNeedsJson />
          </Grid>
        </Grid>
      </TabPanel>
      <TabPanel value={dataSourceTab} index={1}>
        <Box pt={2}>
          {isAuthenticated() ? (
            <Button variant="contained" color="secondary" onClick={remoteNeedsQuery}>
              Query all needs
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
