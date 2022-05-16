import * as React from 'react';

import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary
}));

export default function MainLayout() {
  return (
    <Container
      sx={{
        mt: 3,
        maxWidth: 'lg'
      }}
    >
      <Stack spacing={2}>
        <Typography variant="h4">Query need items</Typography>
        <Button
          variant="contained"
          component="label"
          sx={{
            width: '200px',
            mt: 18
          }}
        >
          Upload needs.jon
          <input type="file" accept="application/json" hidden />
        </Button>
        <Item>Item 1</Item>
        <Item>Item 2</Item>
        <Item>Item 3</Item>
      </Stack>
    </Container>
  );
}
