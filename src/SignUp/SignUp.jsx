import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import SignupImageList from '../SingUpImage/SingUplmage';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { API } from '../config/config';
import { useForm } from 'react-hook-form';
import { signUp } from '../api/login';
// import { API } from '../../config/config.js';

import './SignUp.scss';

const Signup = () => {
  const navigate = useNavigate();

  const [signupValue, setSignupValue] = useState({
    name: '',
    birthdate: '',
    phoneNumber: '',
    email: '',
    password: '',
  });

  const getSignupValue = (e) => {
    const { id, value } = e.target;
    setSignupValue({ ...signupValue, [id]: value });
  };

  const isValid =
    Object.values(signupValue).every((value) => value) &&
    signupValue.email.includes('@') &&
    signupValue.password.length >= 8;

  // const gotoMain = () => {
  //   !isValid
  //     ? alert('입력되지 않은 정보가 있습니다')
  //     : fetch(API.signup, {
  //         method: 'POST',
  //         headers: { 'Content-Type': 'application/json;charset=utf-8' },
  //         body: JSON.stringify({ signupValue }),
  //       })
  //         .then(response => {
  //           if (response.ok === true) {
  //             return response.json();
  //           }
  //           // throw new Error('잘못된 접근입니다');
  //         })
  //         .then(data => {
  //           if (data.message === 'signup success') {
  //             alert('Sims&co 가입을 축하합니다');
  //             navigate('/');
  //           } else {
  //             alert('이미 가입한 회원입니다');
  //           }
  //         });
  // };

  // const gotoMain = () => {
  //   fetch(`${API.signup}`, {
  //     method: 'POST',
  //     headers: { 'Content-Type': 'application/json' },
  //     body: JSON.stringify({ ...signupValue }),
  //   })
  //     .then((response) => {
  //       if (response.ok === true) {
  //         return response.json();
  //       }
  //       // throw new Error('잘못된 접근입니다');
  //     })
  //     .then((data) => {
  //       if (data.message === 'success') {
  //         alert('Sims&co 가입을 축하합니다');
  //         navigate('/');
  //       } else {
  //         alert('이미 가입한 회원입니다');
  //       }
  //     });
  // };

  const gotoMain = async (args) => {
    const response = await signUp(args);
    if (response.code === 'ERR_NETWORK') {
      alert('회원가입에 실패하셨습니다.');
    } else if (response.status === 200) {
      alert('회원가입 성공');
      localStorage.setItem('token', response.data.message);
      navigate('/login');
      // window.location.reload();
    }
  };

  return (
    <div className="signup">
      <div>
        {/* <header className="headerArray"> */}
        <Link to="/" className="arrowMargin">
          <FontAwesomeIcon icon="fa-solid fa-arrow-left" />
        </Link>
        {/* <img
          className="logoStyle"
          src="/images/Nav/Sims&co_logo.png"
          alt="Sims&coLogo"
        /> */}
        {/* </header> */}
        <span className="sideContainerWidth">
          <div className="titleMargin">
            <h1 className="titleStyle">JnS 헬스케어</h1>
            <div>
              <span>이미 가입하셨나요?</span> <Link to="/">로그인 하기</Link>
            </div>
          </div>
          <img
            className="mobileImgSize"
            alt="loginImg"
            src="/images/Signup/img1.jpg"
          />
          <SignupImageList />
        </span>
      </div>

      <div className="inputContainerStyle">
        <form>
          {SIGNUP_INPUT_LIST.map((input) => {
            return (
              <div key={input.id}>
                <div className="inputTitle">{input.title}</div>
                <input
                  type={input.type}
                  className="inputItemStyle"
                  id={input.name}
                  value={signupValue[input.name]}
                  onChange={getSignupValue}
                />
              </div>
            );
          })}
        </form>

        <button className="buttonStyle" disabled={!isValid} onClick={gotoMain}>
          가입 하기
        </button>
      </div>
    </div>
  );
};

export default Signup;
const SIGNUP_INPUT_LIST = [
  {
    id: 1,
    title: '이름',
    type: 'text',
    name: 'name',
  },
  {
    id: 2,
    title: '생일',
    type: 'date',
    name: 'birthdate',
  },
  {
    id: 3,
    title: '휴대폰',
    type: 'text',
    name: 'phoneNumber',
  },
  {
    id: 5,
    title: '주소',
    type: 'text',
    name: 'address',
  },
  {
    id: 6,
    title: '이메일',
    type: 'text',
    name: 'email',
  },
  {
    id: 7,
    title: '비밀번호',
    type: 'password',
    name: 'password',
  },
];
