import React from 'react';
import './singUplmage.scss';

const SignupImageList = () => {
  return (
    <div className="signupImageList">
      <ul className="longSignupImageList">
        {IMAGE_LIST.map((img) => {
          return (
            <li key={img.id} className="longImageBoxMargin">
              <img alt={img.alt} className="longImageStyle" src={img.src} />
            </li>
          );
        })}
      </ul>
      <ul className="shortSignupImageList">
        {IMAGE_LIST.map((img) => {
          return (
            <li key={img.id} className="shortImageBoxMargin">
              <img alt={img.alt} className="shortImageStyle" src={img.src} />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default SignupImageList;

const IMAGE_LIST = [
  {
    id: 1,
    alt: 'signupImage1',
    src: 'https://picsum.photos/100',
    className: 'shortImgStyle',
  },
  {
    id: 2,
    alt: 'signupImage2',
    src: 'https://picsum.photos/300',
    className: 'shortImgStyle',
  },
  {
    id: 3,
    alt: 'signupImage3',
    src: 'https://picsum.photos/300',
    className: 'shortImgStyle',
  },
  {
    id: 4,
    alt: 'signupImage4',
    src: 'https://picsum.photos/400',
    className: 'shortImgStyle',
  },
  {
    id: 5,
    alt: 'signupImage5',
    src: 'https://picsum.photos/500',
    className: 'shortImgStyle',
  },
];
