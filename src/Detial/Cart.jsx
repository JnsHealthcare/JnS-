import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ImageModal from '../ImageModal/ImageModal';
// import { API } from '../../../src/config/config';
import { useParams } from 'react-router-dom';
import './Cart.scss';
import Toss from './Toss';

const Detail = () => {
  const [detailInfoList, setDetailInfoList] = useState({
    id: 0,
    koreanName: '',
    name: '',
    price: '2.300.000',
    description: '',
    productCode: '',
    rating: 0,
  });

  const [isClicked, setIsClicked] = useState(false);
  const [openSlider, setOpenSlider] = useState(false);
  const [secondSlider, setSecondSlider] = useState(false);

  const { productDetailId } = useParams();
  // const productDetailId = params.id;

  const handleSliderToggle = () => {
    setOpenSlider((prev) => !prev);
  };

  const handleSliderOpen = () => {
    setSecondSlider((prev) => !prev);
  };

  const productPrice = detailInfoList.price;
  const productID = detailInfoList.id;
  const priceWithCurrency = productPrice.toLocaleString('ko-KR');
  // const detailImageList = detailInfoList.imageUrl.split(', ');

  // const buyButtonClickHandler = () => {
  //   fetch('http://10.58.52.142:3000/cart/putItem', {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json',
  //       jwtoken: window.localStorage.getItem('jwtoken'),
  //     },
  //     body: JSON.stringify({
  //       productId: productID,
  //     }),
  //   })
  //     .then((res) => {
  //       if (res.status === 201) {
  //         alert('장바구니에 추가되었습니다');
  //       } else if (res.status === 400) {
  //         alert('구매할 수 없는 상품입니다');
  //       }
  //     })
  //     .then((res, err) => {
  //       alert('ERROR:', err.message);
  //     });
  // };
  // useEffect(() => {
  //   fetch(`${API.detail}/${productDetailId}`, {
  //     method: 'GET',
  //   })
  //     .then((res) => res.json())
  //     .then((data) => setDetailInfoList(data[0]));
  // }, []);

  return (
    <>
      <div className="detail">
        <main className="detailMainContainer">
          <ul className="detailImageContainer">
            {/* {detailImageList.map((src, index) => {
              return <li key={index} className="detailImageBox"></li>;
            })} */}
            <img
              src={`${process.env.PUBLIC_URL}/images/Lime.png`}
              alt="img"
              style={{
                width: '100%',
              }}
            />
            <video
              src={`${process.env.PUBLIC_URL}/images/video.mp4`}
              alt="img"
              style={{
                width: '100%',
              }}
              autoplay
              loop
              controls
            />
          </ul>

          <div className="detailSummary">{detailInfoList.description}</div>
          <div className="productCodeBox">
            <div className="productCodeTitle"></div>
            {/* <span className="productCode">{detailInfoList.productCode}</span> */}
          </div>
        </main>
        <aside className="productBuyModule">
          <div className="stickyContainer">
            <div className="productNameBox">
              <span className="productName">{detailInfoList.name}</span>
              <span className="productName">{detailInfoList.koreanName}</span>
            </div>
            {/* <div className="subDescription">{detailInfoList.category}</div> */}
            <div className="price">
              <div className="currencyStyle">&#8361;</div>
              {priceWithCurrency}
            </div>
            <div className="subRating">{detailInfoList.rating}</div>
            <div className="buyMethodContainer">
              <div className="buyMethodMsg">어떻게 구매하시겠어요?</div>
              <div className="buyMethodBox">
                <div className="deliveryBox">
                  <div className="deliveryText">배송</div>
                  <button className="deliveryLink">구매 가능 여부 확인</button>
                </div>
                <div className="pickupBox">
                  {/* <div className="pickupText">매장구매</div> */}
                  <button className="pickupLink">
                    매장 재고 및 재입고 날짜 확인
                  </button>
                </div>
              </div>
            </div>
            <button className="buyButton">
              <Toss />
            </button>
            <div
              className="deliveryBox"
              style={{
                display: 'flex',
                flexDirection: 'column',
                marginTop: '30px',
                // gap: '10px',
              }}
            >
              <div className="SliderBox">
                <span
                  style={{
                    border: '1px solid #cfcfcf',
                    height: '50px',
                    textAlign: 'center',
                    cursor: 'pointer',
                    padding: '17px',
                  }}
                  onClick={handleSliderToggle}
                >
                  상품설명
                  <span className="detailModalArrow"></span>
                  {openSlider && (
                    <div className="detailSlider open">
                      <div className="detailSliderContent">
                        저희 회사의 거꾸리는 앞으로도 없을 기술을 개발하여
                        탄생시킨 의료기기
                      </div>
                    </div>
                  )}
                </span>
                <span
                  style={{
                    border: '1px solid #cfcfcf',
                    height: '50px',
                    textAlign: 'center',
                    cursor: 'pointer',
                    padding: '17px',
                  }}
                  onClick={handleSliderOpen}
                >
                  치수
                  <span className="detailModalArrow"></span>
                  {secondSlider && (
                    <div className="detailSlider open">
                      <div className="detailSliderContent">250 에 30</div>
                    </div>
                  )}
                </span>
              </div>
            </div>
          </div>
        </aside>
      </div>
      {isClicked && (
        <ImageModal
          // modalImage={detailImageList[0]}
          setIsClicked={setIsClicked}
          isClicked={isClicked}
          className="imageModalContainer"
        />
      )}
    </>
  );
};

export default Detail;
