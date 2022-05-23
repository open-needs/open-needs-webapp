import * as React from 'react';

import { Dialog, DialogContent, IconButton } from '@mui/material';

import CloseIcon from '@mui/icons-material/Close';
import TabAuth from './components/Tab';

const DialogAuth = ({ open, onClose, ...props }) => {
  return (
    <Dialog maxWidth="xs" fullWidth open={open} onClose={onClose} aria-labelledby="auth dialog">
      <IconButton aria-label="" style={{ alignSelf: 'flex-end' }} onClick={onClose}>
        <CloseIcon color="action" />
      </IconButton>
      <DialogContent>
        <TabAuth {...props} />
      </DialogContent>
    </Dialog>
  );
};
export default DialogAuth;
