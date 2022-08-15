import React, { useState, useEffect } from 'react';
import Footer from '../components/footer/Footer';
import AddBookComponent from '../components/AddBookComponent';

import { Grid } from '@mui/material';

export default function AddBook() {
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
        <Grid
          container
          direction="column"
          justify="space-evenly"
          alignItems="center"
          spacing={1}
        >
          <Grid item>
            <h1>Reklam Alanı</h1>
          </Grid>
          <Grid item>
            <a href="https://www.youtube.com/channel/UCS1nL4Ke4HP1vfHy2z4zyVw">
              <img
                src="https://via.placeholder.com/200"
                width={'100%'}
                alt="reklam"
              />
            </a>
          </Grid>
          <Grid item>
            <a href="https://www.youtube.com/channel/UCS1nL4Ke4HP1vfHy2z4zyVw">
              <img
                src="https://via.placeholder.com/200"
                width={'100%'}
                alt="reklam"
              />
            </a>
          </Grid>
          <Grid item>
            <a href="https://www.youtube.com/channel/UCS1nL4Ke4HP1vfHy2z4zyVw">
              <img
                src="https://via.placeholder.com/200"
                width={'100%'}
                alt="reklam"
              />
            </a>
          </Grid>
          <Grid item>
            <a href="https://www.youtube.com/channel/UCS1nL4Ke4HP1vfHy2z4zyVw">
              <img
                src="https://via.placeholder.com/200"
                width={'100%'}
                alt="reklam"
              />
            </a>
          </Grid>
        </Grid>
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
            <AddBookComponent />
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={16}>
        <Footer />
      </Grid>
    </Grid>
  );
}
