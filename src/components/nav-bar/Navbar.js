import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { SiBookstack } from 'react-icons/si';

import './Navbar.styles.css';

function Navbar() {
  const [click, setClick] = useState(false);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo">
            <i className="fas fa-book"></i> Library
          </Link>

          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className="nav-item" onClick={() => setClick(!click)}>
              <Link to="/" className="nav-links">
                <i className="fas fa-home" style={{ paddingRight: '8px' }} />
                Anasayfa
              </Link>
            </li>
            <li className="nav-item" onClick={() => setClick(!click)}>
              <Link to="/addBook" className="nav-links">
                <i className="fas fa-plus" style={{ paddingRight: '8px' }} />
                Kitap Ekle
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
