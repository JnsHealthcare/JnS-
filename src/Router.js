import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './Login/Login';
import Main from './Main/Main';
import Footer from './Footer/Footer';
import Nav from './Nav/Nav';
import Cart from './Detial/Cart';
// import KakaoLogin from './KakaoLogin/KakaoLogin';
import SignUp from './SignUp/SignUp';
// import Payment from './Payment/Payment';

const Router = () => {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        {/* <Route path="/oauth/kakao/callback" element={<KakaoLogin />} /> */}
        <Route path="/" element={<Main />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/products" element={<Login />} />
        {/* <Route path="/payment" element={<Payment />} /> */}
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default Router;
