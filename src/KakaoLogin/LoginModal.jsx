import React, { useRef, useEffect, useState } from 'react';
import styled from 'styled-components';

export const API_KEY = '4ade0d3a8c815a692bf1d17a52c8819f';
export const REDIRECT_URI = 'http://localhost:3001';
export const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;

const LoginModal = ({ modalClose }) => {
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
  padding: 30px 40px;
  border-top: 1px solid #eaeaea;
`;
const LoginWelcome = styled.h3`
  font-size: 30px;
  font-weight: 600;
  text-align: center;

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
    object-fit: cover;
    margin: 25px auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-radius: 5px;
  }
`;
