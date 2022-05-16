import * as React from 'react';

import Box from '@mui/material/Container';
import JSONPretty from 'react-json-pretty';
import Paper from '@mui/material/Paper';
import { needsJsonAtom } from '../shared/atoms';
import { useRecoilValue } from 'recoil';

export default function DisplayJson() {
  const needsJson = useRecoilValue(needsJsonAtom);
  const displayContent = needsJson ? needsJson : 'No needs.json loaded';
  return (
    <Paper elevation={3} sx={{ height: 200 }}>
      <Box
        disableGutters
        component="div"
        sx={{ height: 200, overflow: 'auto', pl: 1, mr: 0, ml: 0 }}
      >
        <JSONPretty id="json-pretty" data={displayContent}></JSONPretty>
      </Box>
    </Paper>
  );
}
