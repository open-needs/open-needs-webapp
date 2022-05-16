import * as React from 'react';

import Box from '@mui/material/Container';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';

export default function MainLayout() {
  return (
    <Box
      sx={{
        mt: 3,
        maxWidth: 'lg'
      }}
    >
      <Typography variant="h4">Query need items</Typography>
      <Button
        variant="contained"
        component="label"
        sx={{
          width: '200px',
          mt: 3
        }}
      >
        Upload needs.jon
        <input type="file" accept="application/json" hidden />
      </Button>
      <Paper sx={{ mt: 3 }}>Item 1</Paper>
      <Paper>Item 2</Paper>
      <Paper>Item 3</Paper>
    </Box>
  );
}
