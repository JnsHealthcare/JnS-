import React, { useState, useRef } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled from 'styled-components';
import './SideRModal.scss';
import { patchMyInfoFormData } from '../api/login';

export const API_KEY = '4ade0d3a8c815a692bf1d17a52c8819f';
export const REDIRECT_URI = 'http://localhost:3001';
export const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;

const SideRModal = ({
  className,
  setIsClicked,
  modalClose,
  modalOpen,
  loginModalOpen,
  setLoginModalOpen,
}) => {
  const [userLogin, setUserLogin] = useState({ email: '', password: '' });
  const navigate = useNavigate();

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

  return (
    <aside className="sideModal2">
      <div className="sideModalTitle2">
        <button className="sideModalCloseButton2" onClick={modalClose}>
          {/* <FontAwesomeIcon icon="fa-solid fa-xmark" size="lg" /> */}
          <h>x</h>
        </button>
      </div>

      <div className="loginBox">
        <form className="inputForm">
          <div className="loginInput">
            <span className="lineInput">이메일</span>
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
            />
            {!isUserTitle && userLogin.email.length > 0 ? (
              <span className="noneTitle"> 이메일을 입력하세요</span>
            ) : (
              ''
            )}
          </div>
          <div className="loginInput">
            <span className="lineInput">비밀번호</span>
            <input
              type="password"
              className={
                !isUserTitle && userLogin.password.length > 0
                  ? 'inputPassword  inputFail'
                  : 'inputPassword '
              }
              name="password"
              onChange={onUserInfoChange}
              value={userLogin.password}
            />
          </div>
          <button
            className="loginBtn"
            disabled={!isUserTitle}
            // onClick={}
            patchMyInfoFormData
          >
            로그인
          </button>
          <button
            className="joinBtn"
            onClick={() => {
              navigate('/signup');
            }}
          >
            회원가입
          </button>
        </form>
      </div>
      <div className="kakaoLogin">
        <img
          src={`${process.env.PUBLIC_URL}/images/kakao.png`}
          alt="img"
          style={{
            width: '75%',
            position: 'relative',
            top: '180px',
            marginLeft: '31px',
          }}
        />
      </div>
    </aside>
  );
};

export default SideRModal;

const LoginContainer = styled.div`
  position: fixed;
  z-index: 999;
  top: 0;
  bottom: 0;
  left: 0;
  width: 480px;
  height: 100%;
  padding: 0 30px;
  overflow-y: scroll;
  transform: translateX(0);
  transition: transform 200ms 0s;
  transition-property: transform, visibility;
  background-color: #fff;
  box-shadow: 0 0 0 9999px rgba(0, 0, 0, 0.2);
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
