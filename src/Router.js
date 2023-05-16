import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './Login/Login';
import Main from './Main/Main';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/Login" element={<Login />} />
        <Route path="/Main" element={<Main />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
