import React, { useState, useRef, useEffect } from 'react';
import './CategoryCarousel.scss';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const CategoryCarousel = () => {
  const [slideRange, setSlideRange] = useState(0);
  const carouselRef = useRef(null);

  const categoryCarouselWidth = 267;

  const goToNext = () => {
    setSlideRange(slideRange - categoryCarouselWidth);
  };

  const goToPrev = () => {
    setSlideRange(slideRange + categoryCarouselWidth);
  };
  useEffect(() => {
    carouselRef.current.style.transform = `translateX(${slideRange}px)`;
    carouselRef.current.style.transition = '500ms';
  }, [slideRange]);

  return (
    <section className="categoryCarousel">
      <div className="carouselContainer">
        {/* <button
          className="prevButton"
          onClick={goToPrev}
          style={{ display: slideRange === 0 ? 'none' : '' }}
        > */}
        {/* <FontAwesomeIcon icon="fa-solid fa-chevron-left" /> */}
        {/* </button> */}
        {/* <button
          className="nextButton"
          onClick={goToNext}
          style={{
            display: slideRange === -categoryCarouselWidth * 4 ? 'none' : '',
          }}
        > */}
        {/* <FontAwesomeIcon icon="fa-solid fa-chevron-right" /> */}
        {/* </button> */}
        <div className="categoryCarouselContainer">
          <div className="imageContainer" ref={carouselRef}>
            {CAROUSEL_LIST.map((data) => {
              return (
                <div key={data.id} className="imageBoxEach">
                  <img
                    className="carouselImageStyle"
                    src={data.src}
                    alt={data.alt}
                  />
                  <button className="imageLinkButton">{data.btnText}</button>
                  {/* <h>거꾸리에 대한 설명 불라불라불라</h> */}
                </div>
              );
            })}
            <h>거꾸리의 대한 설명</h>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CategoryCarousel;

const CAROUSEL_LIST = [
  {
    id: 1,
    src: 'https://picsum.photos/300',
    alt: 'carouselImage',
    btnText: 'Lime',
  },
];
