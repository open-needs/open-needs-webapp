import * as React from 'react';

import { Button, Grid } from '@mui/material';
import { TabPanel, a11yProps } from './utils/TabPanel';

import Box from '@mui/material/Box';
import DisplayJson from './localJson/DisplayJson';
import Editor from '@monaco-editor/react';
import { Link } from 'react-router-dom';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import UploadNeeds from './localJson/UploadNeeds';
import { isRemoteAtom } from '../shared/atoms';
import { useIsAuthenticated } from 'react-auth-kit';
import { useSetRecoilState } from 'recoil';
import { useTheme } from '@emotion/react';

export default function NeedsInput() {
  const isAuthenticated = useIsAuthenticated();
  const theme = useTheme();

  const [value, setValue] = React.useState(1);
  const setIsRemote = useSetRecoilState(isRemoteAtom);
  const handleChange = (event, newValue) => {
    setValue(newValue);
    setIsRemote(newValue === 1);
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
          spacing={3}
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
        {isAuthenticated() ? (
          <Editor
            height="30vh"
            defaultLanguage="restructuredtext"
            theme={theme.palette.mode === 'dark' ? 'vs-dark' : 'light'}
            defaultValue={`
.. warn:: A warning to you!

This is **bold** and *italic* text.
          `}
          />
        ) : (
          <Button variant="contained" color="secondary" size="small" component={Link} to="/Auth">
            Sign in
          </Button>
        )}
      </TabPanel>
    </Box>
  );
}
