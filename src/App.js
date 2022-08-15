import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/nav-bar/Navbar';
import Home from './pages/Home';
import './App.css';
import AddBook from './pages/AddBook';

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/addBook" element={<AddBook />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
