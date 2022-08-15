import React, { useState, useEffect } from 'react';

import Grid from '@mui/material/Grid';
import { SiGithub, SiGmail, SiLinkedin, SiYoutube } from 'react-icons/si';
import { Button } from '@mui/material';

export default function Footer() {
  return (
    <>
      <Grid
        container
        direction="column"
        display="flex"
        flex="wrap"
        justifyContent="space-evenly"
        alignItems="center"
        paddingBottom="0rem"
      >
        <Grid
          container
          direction="row"
          display="flex"
          flex="wrap"
          justifyContent="space-evenly"
          alignItems="center"
          bgcolor={'rgba(0,0,0,0.5)'}
        >
          <Grid
            container
            item
            direction="column"
            justify="center"
            alignItems="center"
          >
            <Grid
              item
              style={{
                color: 'white',
                textShadow: '0px 0px 4px gold',
              }}
            >
              <h1>Samet YILMAZ</h1>
            </Grid>
            <Grid
              item
              style={{
                color: 'white',
                textShadow: '0px 0px 4px gold',
              }}
            >
              <h1>2016141013</h1>
            </Grid>
          </Grid>
          <Grid item>
            <Button
              onClick={() =>
                window.open(
                  'https://www.youtube.com/channel/UCS1nL4Ke4HP1vfHy2z4zyVw',
                  '_blank'
                )
              }
            >
              <SiYoutube fontSize={'4rem'} color={'#ff0000'} />
            </Button>
          </Grid>
          <Grid item>
            <Button
              onClick={() =>
                window.open(
                  'https://www.linkedin.com/in/samet-yilmaz-77ba011b3/',
                  '_blank'
                )
              }
            >
              <SiLinkedin fontSize={'4rem'} color={'#0077b5'} />
            </Button>
          </Grid>
          <Grid item>
            <Button
              onClick={() =>
                window.open('https://github.com/sametYILMAZ97', '_blank')
              }
            >
              <SiGithub fontSize={'4rem'} color={'#fafafa'} />
            </Button>
          </Grid>
          <Grid item>
            <Grid
              container
              direction="column"
              display="flex"
              flex="wrap"
              justifyContent="space-evenly"
              alignItems="center"
            >
              <Grid item mb={-3}>
                <Button>
                  <SiGmail fontSize={'3rem'} color={'#ea4335'} />
                </Button>
              </Grid>
              <Grid item>
                <p
                  style={{
                    color: 'white',
                    fontSize: '1rem',
                  }}
                >
                  aselman.yilmaz@gmail.com
                </p>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}
