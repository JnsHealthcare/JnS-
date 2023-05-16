import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './Login/Login';
import Main from './Main/Main';
import Footer from './Footer/Footer';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/main" element={<Main />} />
        <Route path="/footer" element={<Footer />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default Router;