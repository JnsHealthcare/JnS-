import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './Login/Login';
import Main from './Main/Main';
import Footer from './Footer/Footer';
import Nav from './Nav/Nav';
import Detail from './Detial/Cart';

const Router = () => {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Main />} />
        <Route path="/footer" element={<Footer />} />
        <Route path="/Detail" element={<Detail />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default Router;
