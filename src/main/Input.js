import * as React from 'react';

import { TabPanel, a11yProps } from './utils/TabPanel';

import Box from '@mui/material/Box';
import DisplayJson from './localJson/DisplayJson';
import { Grid } from '@mui/material';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import UploadNeeds from './localJson/UploadNeeds';

export default function Input() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
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
      </TabPanel>
      <TabPanel value={value} index={1}></TabPanel>
    </Box>
  );
}
