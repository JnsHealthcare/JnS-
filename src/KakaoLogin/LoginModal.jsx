import React, { useRef, useEffect, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import styled from 'styled-components';
import './LoginModal.scss';

export const API_KEY = '4ade0d3a8c815a692bf1d17a52c8819f';
export const REDIRECT_URI = 'http://localhost:3001';
export const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;

const LoginModal = ({ modalClose }) => {
  const [userLogin, setUserLogin] = useState({ email: '', password: '' });

  const { email, password } = userLogin;
  const emailRegex =
    /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
  const passwordRegex =
    /^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{8,}$/;
  const emailValueCheck = emailRegex.test(email);
  const passwordValueCheck = passwordRegex.test(password);
  const isUserTitle = emailValueCheck || passwordValueCheck;

  const onUserInfoChange = (e) => {
    const { name, value } = e.target;
    setUserLogin({ ...userLogin, [name]: value });
  };
  const close = useRef();
  // const modalHandler = () => {
  //   setIsOpen((prev) => !prev);
  // };

  // useEffect(() => {
  //   const handler = (e) => {
  //     if (close.current && !close.current.contains(e.target)) {
  //       setIsOpen(false);
  //     }
  //   };
  //   document.addEventListener('click', handler);

  //   return () => document.removeEventListener('click', handler);
  // });

  return (
    <LoginContainer ref={close}>
      <LoginHeader>
        <button onClick={modalClose}>✕</button>
        <div>로그인 또는 회원 가입</div>
        <div />
      </LoginHeader>
      <LoginBody>
        <LoginWelcome>JnS 와 함께하세요</LoginWelcome>
        <LoginForm>
          <input
            type="text"
            className={
              !isUserTitle && userLogin.email.length > 0
                ? 'inputId inputDisabled'
                : 'inputId'
            }
            name="email"
            value={userLogin.email}
            onChange={onUserInfoChange}
            placeholder="아이디를 입력하세요"
            style={{
              width: '100%',
              height: '45px',
            }}
          />
          <input
            type="password"
            className={
              !isUserTitle && userLogin.password.length > 0
                ? 'inputPassword  inputFail'
                : 'inputPassword '
            }
            name="password"
            placeholder="비밀번호 를 입력하세요"
            onChange={onUserInfoChange}
            value={userLogin.password}
            style={{
              width: '100%',
              height: '45px',
            }}
          />
        </LoginForm>

        <button
          className="loginBtn"
          disabled={!isUserTitle}
          // onClick={}
          style={{
            width: '100%',
            height: '45px',
          }}
        >
          로그인
        </button>

        <Link
          to="/signup"
          style={{
            fontSize: '15px',
            marginLeft: '157px',
            cursor: 'pointer',
          }}
        >
          회원가입
        </Link>

        <LoginButton href={KAKAO_AUTH_URL}>
          <img
            src={`${process.env.PUBLIC_URL}/images/kakao.png`}
            alt="img"
            // style={{
            //   width: '100%',
            //   height: '1000px',
            // }}
          />
        </LoginButton>
        <LoginGuideText>
          <span>
            카카오 로그인 페이지로 이동합니다. 간편하게 로그인 하신 후, 다양한
            서비스를 즐겨보세요.
          </span>
        </LoginGuideText>
      </LoginBody>
    </LoginContainer>
  );
};

export default LoginModal;

const LoginContainer = styled.div`
  position: fixed;
  border-radius: 10px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: fit-content;
  display: flex;
  flex-direction: column;
  box-shadow: 0 0 0 9999px rgba(0, 0, 0, 0.3);
  background-color: #ffffff;
`;

const LoginHeader = styled.div`
  width: 450px;
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 24px;

  button {
    border: none;
    background-color: #ffffff;
  }

  div {
    font-size: 16px;
    color: #222222;
  }
`;
const LoginGuideText = styled.div`
  margin: 10px 0;
  font-size: 12px;
  color: #717171;
  line-height: 15px;
`;
const LoginBody = styled.div`
  width: 450px;
  height: fit-content;
  padding: 44px 40px;
  border-top: 1px solid #eaeaea;
`;
const LoginWelcome = styled.h3`
  font-size: 30px;
  font-weight: 600;
  text-align: center;
  line-height: 68px;

  span {
    font-size: 16px;
  }
`;
const LoginTitle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  /* color: #ff395c; */

  img {
    width: 150px;
  }
`;

const LoginButton = styled.a`
  img {
    width: 100%;
    height: 50px;
    object-fit: cover;
    margin: 25px auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-radius: 5px;
  }
`;

const LoginForm = styled.div`
  gap: 10px;
`;
