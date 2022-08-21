import React, { useState, useEffect } from 'react';
import PocketBase from 'pocketbase';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import CheckIcon from '@mui/icons-material/Check';
import CloseIcon from '@mui/icons-material/Close';
import ToggleButton from '@mui/material/ToggleButton';
import Select from '@mui/material/Select';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import MenuItem from '@mui/material/MenuItem';
import { InputLabel } from '@mui/material';

export default function AddBookComponent({ user }) {
  const [count, setCount] = useState(0);
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState(false);
  const [errMessage, setErrMessage] = useState('');
  const [data, setData] = useState({});

  setTimeout(() => setCount(count + 1), 1000);
  const client = new PocketBase('http://127.0.0.1:8090');

  // useEffect(() => {
  //   (async () => {})();
  // }, [count]);

  async function handleSubmit(e) {
    setLoading(true);
    e.preventDefault();

    await client.records
      .create('library', data)
      .then(() => {
        setLoading(false);
        setErr(false);
        setErrMessage('');
        window.location.href = '/';
      })
      .catch((error) => {
        setLoading(false);
        setErr(true);
        setErrMessage(error.message);
      });
  }

  return (
    <>
      <Grid
        container
        direction="column"
        display="flex"
        flex="wrap"
        justifyContent="space-evenly"
        alignItems="center"
        p={1}
        m={1}
      >
        <Grid item>
          <h1
            style={{
              textShadow: '0px 0px 2px white',
              color: 'white',
              fontSize: '3rem',
            }}
          >
            📖Kitap Ekle📖
          </h1>
        </Grid>
        <Grid
          container
          direction="row"
          display="flex"
          flex="wrap"
          justifyContent="space-evenly"
          alignItems="center"
          mt={8}
        >
          <Grid
            container
            direction="row"
            display="flex"
            flex="wrap"
            justifyContent="space-evenly"
            alignItems="center"
            style={{
              backgroundColor: 'rgba(0,0,0,0.5)',
              borderRadius: '8px',
              backdropFilter: 'blur(5px)',
              WebkitBackdropFilter: 'blur(5px)',
              height: '200px',
              width: window.innerWidth / 1.5,
            }}
          >
            <Grid
              item
              style={{
                backgroundColor: 'rgba(255,255,255,1)',
                padding: '1rem',
                borderRadius: '8px',
              }}
            >
              <TextField
                label="Kitabın Adı:"
                name="name"
                variant="outlined"
                focused
                color="warning"
                value={data.name}
                fullWidth
                required
                onChange={(e) => setData({ ...data, name: e.target.value })}
              />
            </Grid>
            <Grid
              item
              style={{
                backgroundColor: 'rgba(255,255,255,1)',
                padding: '1rem',
                borderRadius: '8px',
              }}
            >
              <TextField
                id="outlined-number"
                label="Sayfa Sayısı:"
                type="number"
                required
                focused
                color="warning"
                inputMode="numeric"
                InputLabelProps={{
                  shrink: true,
                }}
                sx={{
                  width: 110,
                }}
                onChange={(e) => setData({ ...data, page: e.target.value })}
              />
            </Grid>
            <Grid
              item
              style={{
                backgroundColor: 'rgba(255,255,255,1)',
                padding: '1rem',
                borderRadius: '8px',
              }}
            >
              <TextField
                label="Yayınlanma Tarihi:"
                type="date"
                focused
                color="warning"
                value={data.publishDate}
                onChange={(e) =>
                  setData({ ...data, publishDate: e.target.value })
                }
                sx={{ width: 220 }}
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </Grid>
            <Grid
              item
              style={{
                backgroundColor: 'rgba(255,255,255,1)',
                padding: '1rem',
                borderRadius: '8px',
              }}
            >
              <InputLabel
                style={{
                  color: '#ee7511',
                }}
              >
                Kitabın Durumu:
              </InputLabel>
              <ToggleButton
                value="green"
                size="small"
                onClick={() => setData({ ...data, status: 'green' })}
                style={{
                  borderColor: 'white',
                  borderWidth: 2,
                  borderRadius: '50%',
                  color: 'white',
                  backgroundColor:
                    data.status === 'green'
                      ? 'rgba(46, 204, 113,1.0)'
                      : 'rgba(0, 0, 0, 0.5)',
                  marginLeft: 10,
                }}
              >
                <CheckIcon />
              </ToggleButton>
              <ToggleButton
                value="red"
                size="small"
                onClick={() => setData({ ...data, status: 'red' })}
                style={{
                  borderColor: 'white',
                  borderWidth: 2,
                  borderRadius: '50%',
                  color: 'white',
                  backgroundColor:
                    data.status === 'red'
                      ? 'rgba(231, 76, 60,1.0)'
                      : 'rgba(0, 0, 0, 0.5)',
                  marginLeft: 10,
                }}
              >
                <CloseIcon />
              </ToggleButton>
            </Grid>
          </Grid>

          <Grid
            item
            style={{
              marginTop: '1rem',
              backgroundColor: 'rgba(0,0,0,0.5)',
              borderRadius: '8px',
              padding: '10px',
              backdropFilter: 'blur(5px)',
              width: window.innerWidth / 1.5,
            }}
          >
            <InputLabel
              style={{
                color: 'white',
                fontSize: '1.2rem',
                margin: '10px',
                textShadow: '0px 0px 2px white',
              }}
            >
              İçerik Türü:{' '}
            </InputLabel>
            {/*
              fantasy,sciFi,mystery,thriller,romance,western,dystopian,contemporary,other
            */}
            <FormControlLabel
              control={
                <Checkbox
                  checked={data.genre === 'fantasy'}
                  onChange={(e) =>
                    setData({
                      ...data,
                      genre: e.target.checked ? 'fantasy' : '',
                    })
                  }
                />
              }
              label="Fantasy"
              style={{
                backgroundColor: 'rgba(255,255,255,1)',
                backdropFilter: 'blur(5px)',
                borderRadius: '5px',
                padding: '5px',
                paddingRight: '10px',
                margin: '4px',
              }}
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={data.genre === 'sciFi'}
                  onChange={(e) =>
                    setData({ ...data, genre: e.target.checked ? 'sciFi' : '' })
                  }
                />
              }
              label="SciFi"
              style={{
                backgroundColor: 'rgba(255,255,255,1)',
                backdropFilter: 'blur(5px)',
                borderRadius: '5px',
                padding: '5px',
                paddingRight: '10px',
                margin: '4px',
              }}
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={data.genre === 'mystery'}
                  onChange={(e) =>
                    setData({
                      ...data,
                      genre: e.target.checked ? 'mystery' : '',
                    })
                  }
                />
              }
              label="Mystery"
              style={{
                backgroundColor: 'rgba(255,255,255,1)',
                backdropFilter: 'blur(5px)',
                borderRadius: '5px',
                padding: '5px',
                paddingRight: '10px',
                margin: '4px',
              }}
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={data.genre === 'thriller'}
                  onChange={(e) =>
                    setData({
                      ...data,
                      genre: e.target.checked ? 'thriller' : '',
                    })
                  }
                />
              }
              label="Thriller"
              style={{
                backgroundColor: 'rgba(255,255,255,1)',
                backdropFilter: 'blur(5px)',
                borderRadius: '5px',
                padding: '5px',
                paddingRight: '10px',
                margin: '4px',
              }}
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={data.genre === 'romance'}
                  onChange={(e) =>
                    setData({
                      ...data,
                      genre: e.target.checked ? 'romance' : '',
                    })
                  }
                />
              }
              label="Romance"
              style={{
                backgroundColor: 'rgba(255,255,255,1)',
                backdropFilter: 'blur(5px)',
                borderRadius: '5px',
                padding: '5px',
                paddingRight: '10px',
                margin: '4px',
              }}
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={data.genre === 'western'}
                  onChange={(e) =>
                    setData({
                      ...data,
                      genre: e.target.checked ? 'western' : '',
                    })
                  }
                />
              }
              label="Western"
              style={{
                backgroundColor: 'rgba(255,255,255,1)',
                backdropFilter: 'blur(5px)',
                borderRadius: '5px',
                padding: '5px',
                paddingRight: '10px',
                margin: '4px',
              }}
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={data.genre === 'dystopian'}
                  onChange={(e) =>
                    setData({
                      ...data,
                      genre: e.target.checked ? 'dystopian' : '',
                    })
                  }
                />
              }
              label="Dystopian"
              style={{
                backgroundColor: 'rgba(255,255,255,1)',
                backdropFilter: 'blur(5px)',
                borderRadius: '5px',
                padding: '5px',
                paddingRight: '10px',
                margin: '4px',
              }}
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={data.genre === 'contemporary'}
                  onChange={(e) =>
                    setData({
                      ...data,
                      genre: e.target.checked ? 'contemporary' : '',
                    })
                  }
                />
              }
              label="Contemporary"
              style={{
                backgroundColor: 'rgba(255,255,255,1)',
                backdropFilter: 'blur(5px)',
                borderRadius: '5px',
                padding: '5px',
                paddingRight: '10px',
                margin: '4px',
              }}
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={data.genre === 'other'}
                  onChange={(e) =>
                    setData({
                      ...data,
                      genre: e.target.checked ? 'other' : '',
                    })
                  }
                />
              }
              label="Other"
              style={{
                backgroundColor: 'rgba(255,255,255,1)',
                backdropFilter: 'blur(5px)',
                borderRadius: '5px',
                padding: '5px',
                paddingRight: '10px',
                margin: '4px',
              }}
            />
          </Grid>

          <Grid
            item
            style={{
              backgroundColor: 'rgba(0,0,0,0.5)',
              borderRadius: '8px',
              padding: '10px',
              backdropFilter: 'blur(5px)',
              width: window.innerWidth / 1.5,
              marginTop: '1rem',
            }}
          >
            <Grid
              item
              style={{
                backgroundColor: 'rgba(255,255,255,1)',
                padding: '1rem',
                borderRadius: '8px',
              }}
            >
              <InputLabel>Kitap Kapağı:</InputLabel>
              {/* This area is for image url */}
              <TextField
                variant="outlined"
                margin="normal"
                fullWidth
                id="image"
                label="Kitap Kapağı"
                name="image"
                value={data.cover}
                onChange={(e) => setData({ ...data, cover: e.target.value })}
              />
              <button
                class="button-82-pushable"
                onClick={handleSubmit}
                disabled={!user}
              >
                <span class="button-82-shadow"></span>
                <span class="button-82-edge"></span>
                <span class="button-82-front text">
                  {user ? 'Kitap Ekle' : 'Önce Giriş Yap'}
                  {loading && 'Yükleniyor'}
                </span>
              </button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}
