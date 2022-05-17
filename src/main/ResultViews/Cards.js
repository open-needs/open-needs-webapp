import * as React from 'react';

import { Card, CardContent, Grid, Typography } from '@mui/material';

import { needsJsonAtom } from '../../shared/atoms';
import { useRecoilValue } from 'recoil';

export default function Cards() {
  const needsJson = useRecoilValue(needsJsonAtom);
  let result = [];
  if (needsJson) {
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
          <Card>
            <CardContent>
              <Typography variant="body2" fontWeight={500}>
                {need.id}
              </Typography>
              <Typography sx={{ mt: 1 }} color="text.secondary">
                {need.title}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}
