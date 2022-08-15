import React, { useState, useEffect } from 'react';
import PocketBase from 'pocketbase';
import Grid from '@mui/material/Grid';
import Flicking from '@egjs/react-flicking';
import '@egjs/react-flicking/dist/flicking.css';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import DeleteOutline from '@mui/icons-material/DeleteOutline';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import Save from '@mui/icons-material/Save';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import Close from '@mui/icons-material/Close';

export default function BookList() {
  const [book, setBook] = useState({});
  const [books, setBooks] = useState([]);
  const [booksSorted, setBooksSorted] = useState([]);

  const [count, setCount] = useState(0);
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState(false);
  const [errMessage, setErrMessage] = useState('');
  const [modalOpen, setModalOpen] = useState(false);
  const [modalBook, setModalBook] = useState({});

  setTimeout(() => setCount(count + 1), 1000);
  const client = new PocketBase('http://127.0.0.1:8090');

  useEffect(() => {
    (async () => {
      await client.records
        .getList('library')
        .then((res) => {
          setErr(false);
          setErrMessage('');
          setBooks(res.items.reverse());
        })
        .catch((error) => {
          console.log(err);
          setErr(true);
          setErrMessage(error.message);
        });
      await client.records
        .getList('library', 1, 5, {
          sort: '-created',
        })
        .then((res) => {
          setErr(false);
          setErrMessage('');
          setBooksSorted(res.items);
        })
        .catch((error) => {
          console.log(err);
          setErr(true);
          setErrMessage(error.message);
        });
    })();
  }, [count]);

  return (
    <>
      <h1
        style={{
          textAlign: 'center',
          textShadow: '0px 0px 2px black',
        }}
      >
        Son 5 Kayıt📖
      </h1>
      {err && (
        <h1 style={{ textAlign: 'center', textShadow: '0px 0px 2px black' }}>
          {errMessage}
        </h1>
      )}

      <Grid
        container
        display="flex"
        direction="column"
        flex="wrap"
        justifyContent="space-evenly"
        alignItems="center"
      >
        <Grid
          item
          bgcolor={'rgba(0,0,0, 0.5)'}
          borderRadius={2}
          width={window.innerWidth / 1.75}
        >
          <Flicking
            align="center"
            defaultIndex={0}
            circularFallback={'linear'}
            onMoveEnd={(e) => {
              console.log(e);
            }}
          >
            {booksSorted.map((book) => (
              <Grid
                item
                className="Card2"
                key={book.id}
                p={2}
                pl={4}
                pr={4}
                m={1}
                bgcolor={'rgba(255,255,255,0.25)'}
                color={'rgba(255,255,255, 1)'}
                borderRadius={2}
                style={{
                  backdropFilter: 'blur(5px)',
                  WebkitBackdropFilter: 'blur(5px)',
                }}
              >
                <li key={book.id}>
                  <h3>{book.name}</h3>
                  <p>{book.page}</p>
                  <p>{book.publishDate}</p>
                  <ul>
                    {book.genre.map((genre) => (
                      <li>{genre}</li>
                    ))}
                  </ul>
                  <img
                    src={book.cover}
                    alt={book.name}
                    style={{
                      width: '240px',
                      borderRadius: '8px',
                    }}
                  />
                </li>
              </Grid>
            ))}
          </Flicking>
        </Grid>
      </Grid>
      <Grid
        container
        direction="row"
        display="flex"
        flex="wrap"
        justifyContent="space-evenly"
        alignItems="center"
        padding="2rem"
      >
        <Grid
          item
          minHeight={240}
          width={240}
          p={2}
          pl={4}
          pr={4}
          m={1}
          bgcolor={'rgba(0,0,0,1)'}
          borderRadius={2}
          style={{
            fontSize: '1.25rem',
            textShadow: '0px 0px 4px gold',
            color: 'white',
            backdropFilter: 'blur(5px)',
            WebkitBackdropFilter: 'blur(5px)',
          }}
        >
          <h1>{books.length} Adet Kitap Kayıtlı</h1>
        </Grid>
        {books.map((book) => (
          <Grid
            item
            className="Card"
            key={book.id}
            minHeight={240}
            width={400}
            p={2}
            pl={8}
            pr={4}
            m={1}
            bgcolor={'rgba(255,255,255,0.25)'}
            borderRadius={2}
            style={{
              textAlign: 'left',
              backdropFilter: 'blur(5px)',
              WebkitBackdropFilter: 'blur(5px)',
            }}
          >
            <h3>Kitap: {book.name}</h3>
            <p>Sayfa sayısı: {book.page}</p>
            <p>Yayınlanma tarihi: {book.publishDate}</p>
            <p>Tür: </p>
            <ul>
              {book.genre.map((genre) => (
                <li>{genre}</li>
              ))}
            </ul>
            <img
              src={book.cover}
              alt=""
              style={{
                width: '240px',
                borderRadius: '8px',
              }}
            />
            <IconButton
              size="large"
              variant="contained"
              color="error"
              style={{
                position: 'absolute',
                top: '10px',
                right: '10px',
              }}
              onClick={async () => {
                setLoading(true);
                await client.records
                  .delete('library', book.id)
                  .then((res) => {
                    setLoading(false);
                    setErr(false);
                    setErrMessage('');
                    console.log(res);
                  })
                  .catch((error) => {
                    setLoading(false);
                    setErr(true);
                    setErrMessage(error.message);
                  });
              }}
            >
              {loading ? 'Siliniyor...' : <DeleteOutline />}
            </IconButton>
            <IconButton
              size="large"
              variant="contained"
              color="info"
              style={{
                position: 'absolute',
                top: '40px',
                right: '10px',
              }}
              onClick={async () => {
                setModalOpen(true);
                setModalBook(book);
              }}
            >
              {loading ? 'Düzenleniyor...' : <EditOutlinedIcon />}
            </IconButton>

            {err ? (
              <p
                style={{
                  color: 'red',
                }}
              >
                {errMessage}
              </p>
            ) : (
              ''
            )}
          </Grid>
        ))}
        {modalOpen && (
          <Modal
            style={{
              position: 'absolute',
              transform: 'translate(-50%, -50%)',
              top: window.innerHeight / 1.5,
              left: window.innerWidth / 2,
              backgroundColor: 'darkslateblue',
            }}
            open={modalOpen}
            onClose={() => setModalOpen(false)}
          >
            <Grid
              container
              direction="column"
              alignItems="center"
              justifyContent="space-evenly"
            >
              <Grid item>
                <h2
                  style={{
                    color: 'white',
                    textShadow: '0px 0px 4px gold',
                  }}
                >
                  Kitap Düzenle
                </h2>
              </Grid>
              <Grid item>
                <form>
                  <Grid
                    container
                    direction="row"
                    wrap="wrap"
                    alignItems="center"
                    justifyContent="space-evenly"
                    p={2}
                  >
                    <Grid
                      item
                      width={240}
                      bgcolor="white"
                      p={2}
                      m={1}
                      borderRadius={2}
                    >
                      <TextField
                        label="Kitap Adı"
                        variant="outlined"
                        color="error"
                        focused
                        value={book.name}
                        InputLabelProps={{
                          shrink: true,
                        }}
                        onChange={(e) => {
                          setBook({
                            ...book,
                            name: e.target.value,
                          });
                        }}
                      />
                    </Grid>
                    <Grid
                      item
                      width={240}
                      bgcolor="white"
                      p={2}
                      m={1}
                      borderRadius={2}
                    >
                      <TextField
                        label="Sayfa Sayısı"
                        variant="outlined"
                        color="error"
                        focused
                        value={book.page}
                        onChange={(e) => {
                          setBook({
                            ...book,
                            page: e.target.value,
                          });
                        }}
                      />
                    </Grid>
                    <Grid
                      item
                      width={240}
                      bgcolor="white"
                      p={2}
                      m={1}
                      borderRadius={2}
                    >
                      <TextField
                        label="Yayınlanma Tarihi"
                        variant="outlined"
                        color="error"
                        focused
                        value={book.publishDate}
                        onChange={(e) => {
                          setBook({
                            ...book,
                            publishDate: e.target.value,
                          });
                        }}
                      />
                    </Grid>
                    <Grid
                      item
                      width={240}
                      bgcolor="white"
                      p={2}
                      m={1}
                      borderRadius={2}
                    >
                      <TextField
                        label="Tür"
                        variant="outlined"
                        color="error"
                        focused
                        value={book.genre}
                        onChange={(e) => {
                          setBook({
                            ...book,
                            genre: e.target.value,
                          });
                        }}
                      />
                    </Grid>
                    <Grid
                      item
                      width={240}
                      bgcolor="white"
                      p={2}
                      m={1}
                      borderRadius={2}
                    >
                      <TextField
                        label="Kapak Resmi"
                        variant="outlined"
                        color="error"
                        focused
                        value={book.cover}
                        onChange={(e) => {
                          setBook({
                            ...book,
                            cover: e.target.value,
                          });
                        }}
                      />
                    </Grid>
                    <Grid item>
                      <Button
                        size="large"
                        type="submit"
                        variant="contained"
                        color="primary"
                        style={{
                          backgroundColor: 'darkslateblue',
                          color: 'white',
                        }}
                        onClick={async () => {
                          setLoading(true);
                          await client.records
                            .update('library', modalBook.id, book)
                            .then((res) => {
                              setLoading(false);
                              setErr(false);
                              setErrMessage('');
                              setModalOpen(false);
                            })
                            .catch((error) => {
                              setLoading(false);
                              setErr(true);
                              setErrMessage(error.message);
                              setModalOpen(false);
                            });
                        }}
                      >
                        {loading ? 'Düzenleniyor...' : <Save />}
                      </Button>
                    </Grid>
                    <Grid item>
                      <Button
                        size="large"
                        variant="contained"
                        color="primary"
                        onClick={() => {
                          setBook({
                            name: '',
                            page: '',
                            publishDate: '',
                            genre: '',
                            cover: '',
                          });
                          setModalOpen(false);
                        }}
                        style={{
                          backgroundColor: 'darkred',
                          color: 'white',
                        }}
                      >
                        {loading ? 'Düzenleniyor...' : <Close />}
                      </Button>
                    </Grid>
                  </Grid>
                </form>
              </Grid>
            </Grid>
          </Modal>
        )}
      </Grid>
    </>
  );
}
