import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbars from './components/Navbars';
import Home from './components/Home';
import AboutUs from './components/AboutUs';
import ContactUs from './components/ContactUs';
import Gallery from './components/Gallery';
import Products from './components/Products';

function App() {


  return (
    <>
      <Navbars />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutUs" element={<AboutUs />} />
        <Route path="/contact" element={<ContactUs/>} />
        <Route path="/gallery" element={<Gallery/>} />
        <Route path="/products" element={<Products/>} />
      </Routes>
    </>
  )
}

export default App
