import { Badge, TextField, Tooltip, Typography } from '@mui/material';

import { be_server } from '../../shared/constants';
import { remoteBaseUrlAtom } from '../../shared/atoms';
import { useIsAuthenticated } from 'react-auth-kit';
import { useRecoilState } from 'recoil';

export default function RemoteUrl() {
  const isAuthenticated = useIsAuthenticated();
  const [remoteBaseUrl, setRemoteBaseUrl] = useRecoilState(remoteBaseUrlAtom);

  const handleChange = (event) => {
    setRemoteBaseUrl(event.target.value);
  };

  let placeholder = null;
  if (be_server === remoteBaseUrl) {
    placeholder = remoteBaseUrl;
  }

  return isAuthenticated() ? (
    <Badge
      sx={{ cursor: 'default' }}
      badgeContent={
        <Tooltip title="Log out to change" placement="right-start">
          <Typography>?</Typography>
        </Tooltip>
      }
      color="error"
    >
      <TextField
        value={remoteBaseUrl}
        disabled
        onChange={handleChange}
        variant="outlined"
        size="small"
        sx={{
          minWidth: '400px'
        }}
        label="Remote base URL"
        placeholder={placeholder}
      />
    </Badge>
  ) : (
    <TextField
      value={remoteBaseUrl}
      onChange={handleChange}
      variant="outlined"
      size="small"
      sx={{
        minWidth: '400px'
      }}
      label="Remote base URL"
      placeholder={placeholder}
    />
  );
}
