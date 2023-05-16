import React from 'react';
import { Link } from 'react-router-dom';
import CategoryCarousel from '../component/CategoryCarousel';
// import EventCarousel from '../../components/Carousel/EventCarousel';
import './Main.scss';

const Main = () => {
  return (
    <div className="main">
      <div className="mainTitleBoxStyle">
        <h1 className="welcomeMessageStyle">semmelweis 오신걸 환영합니다.</h1>
        <div>
          <Link to="/login" className="loginLinkStyle">
            semmelweis
          </Link>
          에 가입하여 다양한 홈퍼니싱 영감과 할인 혜택, 리워드를 받아보세요.
        </div>
      </div>
      <div className="mainPromoStyle">
        <div className="mainPromoTitle">
          올 겨울, 더 따듯한 우리집을 위해 최대 70% 할인
        </div>
        <div className="mainPromoSubTextBox">
          <div className="mainPromoTextStyle">
            다가오는 연말연시를 맞아 더 낮은 가격의 홈퍼니싱 제품으로 사랑하는
            사람과 함께 따뜻한 겨울을 준비하세요. 11월 20일 부터 1월 28일까지
          </div>
          <button className="promoButtonStyle">
            최대 70% 겨울세일 보러 가기
          </button>
        </div>
        <div className="promoImageBox">
          <div className="promoImageBoxEach">
            <Link to="/promotion">
              <img
                className="promoImage"
                alt="promoImage"
                src="./images/Main/mainPromo1.jpg"
              />
            </Link>
          </div>
          <div className="promoImageBoxEach">
            <Link to="/promotion">
              <img
                className="promoImage"
                alt="promoImage"
                src="./images/Main/mainPromo2.jpg"
              />
            </Link>
          </div>
        </div>
        <div className="textPromoBox">
          <div className="textPromoMainText">
            매일 환상적인 크리스마스 마법이 펼쳐지는 집
          </div>
          <div className="textPromoSubText">
            척추 질환 거꾸리의 새로운 등장 사전예약으로 50% 세일 사전예약하세요
          </div>
          <button className="textPromoButton">사전 예약하기</button>
        </div>
      </div>
      <CategoryCarousel />
      {/* <EventCarousel /> */}
    </div>
  );
};

export default Main;
