import React, { useState, useEffect } from 'react';

import Ads from '../components/ads/Ads';
import Footer from '../components/footer/Footer';
import AddBookComponent from '../components/AddBookComponent';

import Grid from '@mui/material/Grid';

export default function AddBook({ user }) {
  return (
    <Grid container columns={16}>
      <Grid
        item
        xs={2}
        color="white"
        bgcolor={'rgba(0,0,0,0.5)'}
        style={{
          backdropFilter: 'blur(5px)',
        }}
      >
        <Ads />
      </Grid>
      <Grid item xs={14}>
        <Grid
          container
          direction="column"
          display="flex"
          flex="wrap"
          justifyContent="space-evenly"
          alignItems="center"
        >
          <Grid item>
            <AddBookComponent user={user} />
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={16}>
        <Footer />
      </Grid>
    </Grid>
  );
}
