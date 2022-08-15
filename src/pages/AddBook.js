import React, { useState, useEffect } from 'react';
import Footer from '../components/footer/Footer';
import AddBookComponent from '../components/AddBookComponent';

import { Grid } from '@mui/material';

export default function AddBook() {
  return (
    <Grid
      container
      direction="column"
      display="flex"
      flex="wrap"
      justifyContent="space-evenly"
      alignItems="center"
      m={1}
    >
      <Grid item>
        <AddBookComponent />
      </Grid>
      <Grid item>
        <Footer />
      </Grid>
    </Grid>
  );
}
