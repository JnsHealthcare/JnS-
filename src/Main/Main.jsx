import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import CategoryCarousel from '../component/CategoryCarousel';
import { postMain } from '../api/mainPage';
// import EventCarousel from '../../components/Carousel/EventCarousel';
import './Main.scss';
import '../styles/App.css';

const Main = () => {
  const [inputValue, setInputValue] = useState('');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const navigate = useNavigate();

  // useEffect(() => {
  //   postMain({ slug: 'home' })
  //     .then((res) => res.json())
  //     .then((res) => {
  //       setInputValue(res.data.body);
  //     })
  //     .catch((err) => alert(err));
  // }, []);

  const [rotationY, setRotationY] = useState(0);

  const handleImageClick = () => {
    setRotationY(rotationY + 90);
  };

  const handleDropdownToggle = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="main">
      <div className="mainTitleBoxStyle">
        {/* <h1 className="welcomeMessageStyle">semmelweis</h1> */}
      </div>
      <div className="mainPromoStyle">
        {/* <div className="mainPromoTitle">
          디자인 과 기능 두마리 토끼를 다잡은 거꾸리
        </div> */}
        <div className="mainPromoSubTextBox">
          {/* <div className="mainPromoTextStyle">
            런칭이 다가오는 제넬 바이슨 거꾸리 와 함께하세요.
          </div> */}
        </div>
        <header
          onClick={() => {
            navigate('/cart');
          }}
          style={{ cursor: 'pointer' }}
        >
          <div className="logo">Semmelweis</div>
          <h className="nav-links">
            <p className="shoptitle">Shop</p>
            {/* <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Products</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li> */}
          </h>
          <div className="burger">
            <div className="line1"></div>
            <div className="line2"></div>
            <div className="line3"></div>
          </div>
          <div className="hero-text">
            <h1>Welcome to Semmelweis </h1>
            <p>Discover our latest collection of innovative home appliances</p>
            <h
              // onClick={() => {
              //   navigate('/cart');
              // }}
              className="btn"
            >
              Shop Now
            </h>
          </div>
        </header>

        {/* <div className="TotalTextPormo">
          <div className="textPromoBox">
            <div className="textPromoMainText">
              인테리어 와 어울리는 거꾸리 제넬바이슨
        </div>
            <div className="textPromoSubText">
              척추 질환 거꾸리의 새로운 등장 사전예약으로 50% 세일
              사전예약하세요
            </div>
            <button className="textPromoButton">사전 예약하기</button>
        </div>
        </div> */}
        <article>
          {/* <div className="promoButtonStyle" onClick={handleDropdownToggle}>
            사전예약하기
          </div>
          {isDropdownOpen && (
            <div className="dropdownContent">
              <input
                type="text"
                className="NameBox"
                placeholder="이름을 입력하세요"
              />
              <input
                type="text"
                className="TelBox"
                placeholder="전화번호를 입력하세요"
              />
              <button className="subscribe">예약 완료</button>
            </div>
          )} */}
          <div className="imgBox" onClick={handleImageClick}>
            <img
              src={`${process.env.PUBLIC_URL}/images/Lime.png`}
              alt="img"
              style={{
                width: '100%',
                // height: '1000px',
                // transform: isDropdownOpen ? 'rotate(360deg)' : 'none',
                // transition: 'transform 1s',
              }}
              // rotationY={rotationY}
            />
          </div>
        </article>

        <section className="video-section">
          <video
            src={`${process.env.PUBLIC_URL}/images/video.mp4`}
            autoplay
            loop
            controls
          ></video>
        </section>
      </div>
      <CategoryCarousel />
      {/* <EventCarousel /> */}
    </div>
  );
};

export default Main;

const FOOTER_COPYRIGHT = [{ id: 1, src: 'https://picsum.photos/600' }];
