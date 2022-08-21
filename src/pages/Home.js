import React, { useEffect } from 'react';
import Grid from '@mui/material/Grid';

import Ads from '../components/ads/Ads';
import BookList from '../components/BookList';
import Footer from '../components/footer/Footer';

export default function Home({ user }) {
  return (
    <>
      <Grid container columns={16}>
        {/* ADS Area */}
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
        {/* ADS Area */}
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
              <BookList user={user} />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={16}>
          <Footer />
        </Grid>
      </Grid>
    </>
  );
}
