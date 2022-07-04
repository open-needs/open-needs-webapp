import { Badge, TextField, Tooltip } from '@mui/material';

import { be_server } from '../../shared/constants';
import { remoteBaseUrlAtom } from '../../shared/atoms';
import { useIsAuthenticated } from 'react-auth-kit';
import { useRecoilState } from 'recoil';
import { useState } from 'react';

export default function RemoteUrl() {
  const isAuthenticated = useIsAuthenticated();
  const [remoteBaseUrl, setRemoteBaseUrl] = useRecoilState(remoteBaseUrlAtom);
  const [tooltipOpen, setTooltipOpen] = useState(false);

  const handleChange = (event) => {
    setRemoteBaseUrl(event.target.value);
  };

  let placeholder = null;
  if (be_server === remoteBaseUrl) {
    placeholder = remoteBaseUrl;
  }

  const handleHover = (event) => {
    if (event.target.nodeName === 'SPAN') {
      setTooltipOpen(!tooltipOpen);
    } else {
      setTooltipOpen(false);
    }
  };

  return isAuthenticated() ? (
    <Tooltip title="Log out to change" open={tooltipOpen} placement="right-start">
      <Badge badgeContent="?" color="error" onMouseOver={handleHover} onMouseOut={handleHover}>
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
    </Tooltip>
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
