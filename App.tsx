import * as React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './style.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Footer from './components/Footer';
import Contact from './components/Contact';

export default function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  );
}
