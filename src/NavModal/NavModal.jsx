import React, { useState, useRef, useEffect } from 'react';
import './NavMoadal.scss';

const NavModal = ({ className, isFocus, setIsFocus }) => {
  const [isModal, setIsModal] = useState(false);
  const close = useRef();

  // useEffect(() => {
  //   const handle = (e) => {
  //     if (close && !close.current.contains(e.target)) {
  //       setIsFocus(false);
  //     }
  //   };

  //   document.addEventListener('click', handle);
  //   return () => {
  //     document.removeEventListener('click', handle);
  //   };
  // });

  const onClick = () => {
    setIsModal(!isModal);
  };

  return (
    <div className="NavPopUp">
      <div onClick={onClick}>-</div>
    </div>
  );
};

export default NavModal;
