import React, { useState } from 'react';
import { Carousel } from '../Carousel/Carousel';
import { useNavigate, Link } from 'react-router-dom';
// import { Footer } from '../Footer/Footer';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { API } from '../../config/config';
import './Login.scss';

const Login = () => {
  return (
    <div>
      <Carousel />
      <Carousel />

      {/* <Footer /> */}
    </div>
  );
};

export default Login;
