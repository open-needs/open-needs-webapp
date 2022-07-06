import { Card, CardContent, Grid, Modal, Typography } from '@mui/material';
import { isRemoteAtom, needsJsonAtom } from '../../shared/atoms';

import { Box } from '@mui/system';
import Editor from '@monaco-editor/react';
import { useRecoilValue } from 'recoil';
import { useState } from 'react';
import { useTheme } from '@emotion/react';

export default function Cards() {
  const needsJson = useRecoilValue(needsJsonAtom);
  const isRemote = useRecoilValue(isRemoteAtom);
  let result = [];
  if (needsJson && !isRemote) {
    var version = needsJson['current_version'];
    result = Object.entries(needsJson['versions'][version]['needs']).map(([need_id, need]) => ({
      id: need_id,
      title: need['title'],
      links: need['links']
    }));
  }

  return (
    <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
      {result.map((need) => (
        <Grid item xs={3} sm={3} md={2} lg={1} xl={1} key={need.id}>
          <SingleCard need={need} />
        </Grid>
      ))}
    </Grid>
  );
}

function SingleCard(props) {
  const theme = useTheme();
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const options = {
    readOnly: true,
    minimap: { enabled: false },
    wordWrap: 'on'
  };
  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '800px',
    height: '40vh',
    bgcolor: 'background.paper',
    boxShadow: 24,
    pt: 1
  };
  return (
    <>
      <Card onClick={handleOpen}>
        <CardContent>
          <Typography variant="body2" fontWeight={500}>
            {props.need.id}
          </Typography>
          <Typography sx={{ mt: 1 }} color="text.secondary">
            {props.need.title}
          </Typography>
        </CardContent>
      </Card>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Editor
            height="100%"
            width="100%"
            defaultLanguage="restructuredtext"
            theme={theme.palette.mode === 'dark' ? 'vs-dark' : 'light'}
            options={options}
            defaultValue={`
.. warn:: A warning to you!

This is **bold** and *italic* text. This is **bold** and *italic* text.This is **bold** and *italic* text. This is **bold** and *italic* text.
`}
          />
        </Box>
      </Modal>
    </>
  );
}
