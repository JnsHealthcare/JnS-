import { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow } from 'swiper';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import './Carousel.css';

const slides = [
  {
    id: 1,
    name: '고급 상품 1',
    price: '$100',
    image:
      'https://i.postimg.cc/Z0ktfskN/peter-broomfield-m3m-ln-R90u-M-unsplash.jpg',
  },
  {
    id: 2,
    name: '고급 상품 2',
    price: '$200',
    image:
      'https://i.postimg.cc/MTTSXjbn/brandon-atchison-e-BJWhlq-WR54-unsplash.jpg',
  },
  {
    id: 3,
    name: '고급 상품 3',
    price: '$300',
    image: 'https://i.postimg.cc/8cfgmQYD/campbell-3-ZUs-NJhi-Ik-unsplash.jpg',
  },
  {
    id: 4,
    name: '고급 상품 2',
    price: '$200',
    image:
      'https://i.postimg.cc/MTTSXjbn/brandon-atchison-e-BJWhlq-WR54-unsplash.jpg',
  },
  {
    id: 5,
    name: '고급 상품 2',
    price: '$200',
    image:
      'https://i.postimg.cc/MTTSXjbn/brandon-atchison-e-BJWhlq-WR54-unsplash.jpg',
  },
  {
    id: 6,
    name: '고급 상품 2',
    price: '$200',
    image:
      'https://i.postimg.cc/MTTSXjbn/brandon-atchison-e-BJWhlq-WR54-unsplash.jpg',
  },
  {
    id: 7,
    name: '고급 상품 2',
    price: '$200',
    image:
      'https://i.postimg.cc/MTTSXjbn/brandon-atchison-e-BJWhlq-WR54-unsplash.jpg',
  },
  {
    id: 7,
    name: '고급 상품 2',
    price: '$200',
    image:
      'https://i.postimg.cc/MTTSXjbn/brandon-atchison-e-BJWhlq-WR54-unsplash.jpg',
  },
  {
    id: 7,
    name: '고급 상품 2',
    price: '$200',
    image:
      'https://i.postimg.cc/MTTSXjbn/brandon-atchison-e-BJWhlq-WR54-unsplash.jpg',
  },
  {
    id: 7,
    name: '고급 상품 2',
    price: '$200',
    image:
      'https://i.postimg.cc/MTTSXjbn/brandon-atchison-e-BJWhlq-WR54-unsplash.jpg',
  },
  {
    id: 7,
    name: '고급 상품 2',
    price: '$200',
    image:
      'https://i.postimg.cc/MTTSXjbn/brandon-atchison-e-BJWhlq-WR54-unsplash.jpg',
  },
  {
    id: 7,
    name: '고급 상품 2',
    price: '$200',
    image:
      'https://i.postimg.cc/MTTSXjbn/brandon-atchison-e-BJWhlq-WR54-unsplash.jpg',
  },
  {
    id: 7,
    name: '고급 상품 2',
    price: '$200',
    image:
      'https://i.postimg.cc/MTTSXjbn/brandon-atchison-e-BJWhlq-WR54-unsplash.jpg',
  },

  // Add more slides if needed
];

export const Carousel = () => {
  const [carouselActive, setCarouselActive] = useState(true);

  useEffect(() => {
    const stopCarouselOnSlideClick = () => {
      setCarouselActive(false);
    };

    const swiper = document.querySelector('.swiper-container');

    if (swiper) {
      swiper.addEventListener('click', stopCarouselOnSlideClick);
    }

    return () => {
      if (swiper) {
        swiper.removeEventListener('click', stopCarouselOnSlideClick);
      }
    };
  }, []);
  return (
    <Swiper
      grabCursor
      centeredSlides
      slidesPerView="auto"
      effect="coverflow"
      loop // Add loop prop here
      coverflowEffect={{
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
      }}
      modules={[EffectCoverflow]}
      autoplay={carouselActive ? 10000 : undefined}
    >
      {slides.map((slide) => (
        <SwiperSlide
          key={slide.id}
          style={{
            backgroundImage: `url(${slide.image})`,
          }}
        >
          <div className="product-item">
            {/* <img src={slide.image} alt={slide.name} /> */}
            <h2>{slide.name}</h2>
            <p>{slide.price}</p>
          </div>
        </SwiperSlide>
      ))}
      <div className="swiper-pagination"></div>
    </Swiper>
  );
};
