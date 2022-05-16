import * as React from 'react';

import { colorModeAtom, needsJsonAtom } from '../../shared/atoms';

import { Paper } from '@mui/material';
import ReactJson from 'react-json-view';
import Typography from '@mui/material/Typography';
import { useRecoilValue } from 'recoil';

export default function DisplayJson() {
  const colorMode = useRecoilValue(colorModeAtom);
  const needsJson = useRecoilValue(needsJsonAtom);
  // const displayContent = needsJson ? needsJson : 'No needs.json loaded';
  return needsJson ? (
    <Paper elevation={3} sx={{ overflowY: 'auto', maxHeight: '500px' }}>
      <ReactJson
        style={{ padding: '8px' }}
        theme={colorMode === 'light' ? 'rjv-default' : 'monokai'}
        collapsed={3}
        displayDataTypes={false}
        enableClipboard={false}
        src={needsJson}
      />
    </Paper>
  ) : (
    <Typography
      variant="h6"
      sx={{
        fontWeight: 100
      }}
    >
      No needs.json loaded
    </Typography>
  );

  // <Paper elevation={3} sx={{ height: 200 }}>
  //   <Box
  //     disableGutters
  //     component="div"
  //     sx={{ height: 200, overflow: 'auto', pl: 1, mr: 0, ml: 0 }}
  //   >
  //     <JSONPretty id="json-pretty" data={displayContent}></JSONPretty>
  //   </Box>
  // </Paper>
}
