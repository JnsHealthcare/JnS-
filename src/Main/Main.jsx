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
        </div>
      </div>
      <div className="mainPromoStyle">
        <div className="mainPromoTitle">
          디자인 과 기능 두마리 토끼를 다잡은 거꾸리
        </div>
        <div className="mainPromoSubTextBox">
          <div className="mainPromoTextStyle">
            런칭이 다가오는 제넬 바이슨 거꾸리 와 함께하세요.
          </div>
          <button className="promoButtonStyle">최대 70% 런칭 세일</button>
        </div>
        <div className="promoImageBox">
          <div className="promoImageBoxEach">
            <Link to="/main">
              <video
                className=""
                src={`${process.env.PUBLIC_URL}/imges/video.map4`}
              >
                {/* <source
                  //   src={`${process.env.PUBLIC_URL}/imges/vedio.map4`}
                  src="../../public/imges/video.mp4"
                  type="video/mp4"
                /> */}
              </video>
            </Link>
          </div>
          {/* <div className="promoImageBoxEach">
            <Link to="/promotion">
              <img
                className="promoImage"
                alt="promoImage"
                src="./images/Main/mainPromo2.jpg"
              />
            </Link>
          </div> */}
        </div>
        <div className="textPromoBox">
          <div className="textPromoMainText">
            인테리어 와 어울리는 거꾸리 제넬바이슨
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
