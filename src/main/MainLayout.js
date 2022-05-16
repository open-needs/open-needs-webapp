import * as React from 'react';

import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';
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
      <Stack spacing={2} divider={<Divider orientation="horizontal" flexItem />}>
        <Typography variant="h4">Query need items</Typography>
        <Item>Item 1</Item>
        <Item>Item 2</Item>
        <Item>Item 3</Item>
      </Stack>
    </Container>
  );
}
