import React, { useState, useEffect } from 'react';
import Grid from '@mui/material/Grid';

export default function Ads() {
  return (
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
        <a
          href="https://play.google.com/store/apps/details?id=com.wee.weescooter"
          target="_blank"
        >
          <img
            src="https://play-lh.googleusercontent.com/OpQrAkUHMycfVu1TzJ3t8bgJMEz3ZuUSA04sBxwzRRzJwQbliSGFY1GPL-b7_Tn7QbQ=w240-h480"
            width={'100%'}
            alt="ad2"
          />
        </a>
      </Grid>
      <Grid item>
        <a href="https://westeknoloji.com/" target="_blank">
          <img
            src="https://westeknoloji.com/images/about/digital-agency-dg.png"
            width={'100%'}
            alt="ad2"
          />
        </a>
      </Grid>
      <Grid item>
        <a
          href="https://play-lh.googleusercontent.com/OpQrAkUHMycfVu1TzJ3t8bgJMEz3ZuUSA04sBxwzRRzJwQbliSGFY1GPL-b7_Tn7QbQ=w240-h480"
          target="_blank"
        >
          <img
            src="https://play-lh.googleusercontent.com/gNRXbodqJl6B2dPBnRCW9mj4ZWFRF-wtH9RPO6iQSjUA8PbxQwNWN3glXc_GuEPZqGB3=w526-h296"
            width={'100%'}
            alt="ad2"
          />
        </a>
      </Grid>
      <Grid item>
        <a href="https://www.cumhuriyet.edu.tr/" target="_blank">
          {/* Get image from src/assets/images/ */}
          <img
            src="https://www.cumhuriyet.edu.tr/images/sivas_cumhuriyet_universitesi_logo_tr.png"
            width={'100%'}
            alt="ad2"
          />
        </a>
      </Grid>

      <Grid item>
        <a
          href="https://www.linkedin.com/in/yigido-team-17a8a7238/"
          target="_blank"
        >
          <img
            src="https://media-exp1.licdn.com/dms/image/C5603AQHZijKeiMmdEw/profile-displayphoto-shrink_200_200/0/1650993675072?e=1666828800&v=beta&t=fq53ZwD9t9DrD2UaDqKF_I1N-LczDEiW9Yoa855VKhE"
            width={'100%'}
            alt="ad3"
          />
        </a>
      </Grid>
    </Grid>
  );
}
