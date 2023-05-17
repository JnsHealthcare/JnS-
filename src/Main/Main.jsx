import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import CategoryCarousel from '../component/CategoryCarousel';
// import EventCarousel from '../../components/Carousel/EventCarousel';
import './Main.scss';
import '../styles/App.css';

const Main = () => {
  const [inputValue, setInputValue] = useState('');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

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
        <header>
          <div className="logo">Semmelweis</div>
          <ul className="nav-links">
            <li>
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
            </li>
          </ul>
          <div className="burger">
            <div className="line1"></div>
            <div className="line2"></div>
            <div className="line3"></div>
          </div>
          <div className="hero-text">
            <h1>Welcome to Semmelweis </h1>
            <p>Discover our latest collection of innovative home appliances</p>
            <a href="#" className="btn">
              Shop Now
            </a>
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
          <div className="promoButtonStyle" onClick={handleDropdownToggle}>
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
          )}
          <div className="imgBox">
            {/* <img
              src="https://picsum.photos/600"
              alt="img"
              width="100%"
              height="400px"
              box-shadow="0 0 20px rgba(0, 0, 0, 0.5)"
            /> */}
          </div>
        </article>
      </div>
      <CategoryCarousel />
      {/* <EventCarousel /> */}
    </div>
  );
};

export default Main;

const FOOTER_COPYRIGHT = [{ id: 1, src: 'https://picsum.photos/600' }];
