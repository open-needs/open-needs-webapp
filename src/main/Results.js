import * as React from 'react';

import { TabPanel, a11yProps } from './utils/TabPanel';

import Box from '@mui/material/Box';
import Cards from './ResultViews/Cards';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';

export default function Results() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="Cards" {...a11yProps(0)} />
          <Tab label="Table" {...a11yProps(1)} disabled />
          <Tab label="List" {...a11yProps(2)} disabled />
          <Tab label="Flowchart" {...a11yProps(3)} disabled />
          <Tab label="Piechart" {...a11yProps(4)} disabled />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <Cards />
      </TabPanel>
      <TabPanel value={value} index={1}></TabPanel>
      <TabPanel value={value} index={2}></TabPanel>
      <TabPanel value={value} index={3}></TabPanel>
      <TabPanel value={value} index={4}></TabPanel>
    </Box>
  );
}
