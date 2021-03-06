import { colorModeAtom, needsJsonAtom } from '../../shared/atoms';

import { Paper } from '@mui/material';
import ReactJson from 'react-json-view';
import Typography from '@mui/material/Typography';
import { useRecoilValue } from 'recoil';

export default function DisplayLocalNeedsJson() {
  const colorMode = useRecoilValue(colorModeAtom);
  const needsJson = useRecoilValue(needsJsonAtom);
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
}
