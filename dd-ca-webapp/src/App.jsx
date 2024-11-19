// FILE: src/App.jsx

import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import { Home } from './components/Home';
import { Contact } from './components/Contact';
import { Form } from './components/Form';

function App() {
  return (
    <div className="app">
      <header className="header">
        <h1>Cooper Adams LLC</h1>
        <p>Concrete and Tractor Jobs</p>
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/form" element={<Form />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;