import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import PocketBase from 'pocketbase';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';

import Navbar from './components/nav-bar/Navbar';
import Home from './pages/Home';
import AddBook from './pages/AddBook';

import './App.css';

function App() {
  const [modalOpen, setModalOpen] = useState(false);
  const [user, setUser] = useState(null);
  const [userMail, setUserMail] = useState(null);
  const [userPassword, setUserPassword] = useState(null);

  const client = new PocketBase('http://127.0.0.1:8090');
  const login = async () => {
    await client.records.getFullList('users').then(async (users) => {
      console.log(users);
      const user = users.find((user) => user.userMail === userMail);
      if (user) {
        if (user.userPassword === userPassword) {
          setUser(user);
          setUserMail(null);
          setUserPassword(null);
          setModalOpen(false);
          console.log('login success', user);
        } else {
          alert('Wrong password');
        }
      } else {
        alert('User not found');
      }
    });
  };
  const logout = async () => {
    setUser(null);
    console.log('logout success');
  };

  return (
    <div>
      <Router>
        <Navbar />
        <div
          style={{
            width: 238,
            backgroundColor: 'rgba(0,0,0,0.5)',
          }}
        >
          <Button
            className="nav-item"
            style={{
              marginTop: '10px',
              left: '25%',
              width: 120,
              height: 40,
              color: !user ? '#2ecc71' : '#e74c3c',
              fontSize: '24px',
            }}
            onClick={
              user
                ? logout
                : () => {
                    setModalOpen(true);
                  }
            }
          >
            {!user?.userMail && (
              <i
                className="fas fa-sign-in-alt"
                style={{ paddingRight: '8px' }}
              />
            )}
            {user?.userMail && (
              <i
                className="fas fa-sign-out-alt"
                style={{ paddingRight: '8px' }}
              />
            )}
            {user?.userMail ? 'Çıkış' : 'Giriş'}
          </Button>
          {user && (
            <h4
              style={{
                color: 'white',
                fontStyle: 'italic',
                textAlign: 'center',
              }}
            >
              Hoşgeldiniz{' '}
              <h3
                style={{
                  color: 'salmon',
                  fontStyle: 'normal',
                }}
              >
                {user?.userMail}
              </h3>
            </h4>
          )}
        </div>

        {modalOpen && (
          <div className="modal">
            <form>
              <Grid
                container
                direction="row"
                display="flex"
                flex="wrap"
                justifyContent="space-evenly"
                alignItems="center"
                spacing={2}
              >
                <Grid item>
                  <input
                    type="text"
                    placeholder="Kullanıcı Adı"
                    onChange={(e) => setUserMail(e.target.value)}
                  />
                </Grid>
                <Grid item>
                  <input
                    type="password"
                    placeholder="Parola"
                    onChange={(e) => setUserPassword(e.target.value)}
                  />
                </Grid>
                <Grid item>
                  <Button
                    style={{
                      backgroundColor: '#4caf50',
                      color: 'white',
                    }}
                    onClick={login}
                  >
                    Giriş
                  </Button>
                </Grid>
              </Grid>
            </form>
          </div>
        )}
        <Routes>
          <Route exact path="/" element={<Home user={user} />} />
          <Route path="/addBook" element={<AddBook user={user} />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
