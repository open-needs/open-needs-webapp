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
    result = needsJson['versions'][version]['needs'];
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
  const monacoOptions = {
    readOnly: true,
    minimap: { enabled: false },
    wordWrap: 'bounded',
    wordWrapColumn: 120
  };
  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    minWidth: '1100px',
    // width: '80%',
    height: '40%',
    minHeight: '200px',
    bgcolor: 'background.paper',
    boxShadow: 24,
    pt: 1
  };
  const need = props.need; // short hand
  const needIgnoreOptions = [
    'description', // handled at the end (last after options)
    'docname',
    'full_title',
    'hide_links',
    'id', // handled at the beginning (first in options)
    'is_need',
    'is_part',
    'parts',
    'section_name',
    'sections',
    'title_from_content',
    'title', // handled in the first line
    'type_name',
    'type' // handled in the first line
  ];
  let needString = `.. ${need.type}:: ${need.title}`;
  needString += `\n   :id: ${need.id}`;
  Object.entries(need).forEach(function ([key, value]) {
    // value.length works for both string and array options
    if (!needIgnoreOptions.includes(key) && value && value.length > 0) {
      const finalValue =
        Object.prototype.toString.call(value) === '[object Array]' ? value.join(', ') : value;
      needString += `\n   :${key}: ${finalValue}`;
    }
  });
  needString += '\n\n   ' + need.description.split('\n').join('\n   ');
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
            options={monacoOptions}
            defaultValue={needString}
          />
        </Box>
      </Modal>
    </>
  );
}
