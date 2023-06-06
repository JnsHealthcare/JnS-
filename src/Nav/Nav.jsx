import React, { useState, useRef, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBars,
  faUser,
  faCartShopping,
  faCamera,
  faSearch,
} from '@fortawesome/free-solid-svg-icons';
import SideModal from '../SideModal/SideModal';
import NavModal from '../NavModal/NavModal';
import './nav.scss';
// import KakaoLogin from '../KakaoLogin/KakaoLogin';
import SideRModal from '../sideRmodal/SideRModal';

// export const baseURL = 'http://localhost:3001';

const interruptedRoute = ['signup', 'login'];

const Nav = () => {
  const { pathname } = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [searchInput, setSearchInput] = useState('');
  const [itemsData, setItemsData] = useState([]);
  const [isClicked, setIsClicked] = useState(false);
  const [navModal, setNavModal] = useState(false);
  const [loginModalOpen, setLoginModalOpen] = useState(false);

  const navigate = useNavigate();
  const ref = useRef();
  const isHideNav = interruptedRoute.some((path) => pathname.includes(path));
  const [navbarBackground, setNavbarBackground] = useState('transparent');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setNavbarBackground('rgba(0, 0, 0, 0.5)');
      } else {
        setNavbarBackground('transparent');
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const onClickHandler = () => {
    // console.log(isOpen);
    setIsClicked(true);
  };

  const modalOpen = () => {
    console.log(isOpen);
    setIsOpen(true);
  };

  const modalClose = () => {
    setIsOpen(false);
  };

  // const onChangeInputHandler = (e) => {
  //   setSearchInput(e.target.value);
  // };

  // const onPopUp = () => {
  //   setIsFocus(!isFocus);
  // };

  // const searchResult = itemsData
  //   .filter(({ name }) =>
  //     name.toLowerCase().includes(searchInput.toLowerCase())
  //   )
  //   .map(({ name, id }) => (
  //     <li className="navSearchResult" key={id}>
  //       <FontAwesomeIcon className="fontawesome" icon={faSearch} />
  //       <span className="searchResultText">{name}</span>
  //     </li>
  //   ));

  useEffect(() => {
    fetch('/data/searchMockData.json', {
      method: 'GET',
    })
      .then((res) => res.json())
      .then((data) => {
        setItemsData(data);
      });
  }, []);

  if (isHideNav) return null;

  return (
    <nav
      className="nav"
      style={{ backgroundColor: navbarBackground, border: 'none' }}
    >
      <span className="navButton">
        {/* <FontAwesomeIcon
          className="fontawesome"
          icon={faBars}
          size="lg"
          onClick={onClickHandler}
        /> */}
      </span>
      <div className="navContainer">
        <div className="navSearch">
          <div className="navSearchIconLeft">
            <div>
              {navModal ? (
                <div className="modal">
                  <span className="navIconsUser" onClick={onClickHandler}>
                    <FontAwesomeIcon
                      className="fontawesome"
                      icon={faUser}
                      size="lg"
                    />
                    {/* <span>메뉴</span> */}
                  </span>
                  {/* 모달 내용 */}
                  {/* <div className="modalContent">내용 추가</div> */}
                </div>
              ) : (
                <FontAwesomeIcon
                  className="fontawesome"
                  icon={faBars}
                  size="lg"
                  onClick={onClickHandler}
                />
              )}
            </div>
            {/* <FontAwesomeIcon
              className="fontawesome"
              icon={faSearch}
              size="lg"
            /> */}
          </div>
          {/* <Link to="/login"> */}
          <div className="fontName">
            <span className="navIconsUser">
              {/* <FontAwesomeIcon
                className="fontawesome"
                icon={faUser}
                size="lg"
              /> */}
              <span>Lime story</span>
            </span>
            {/* </Link> */}
            {/* <Link to="/login"> */}
            <span className="navIconsUser">
              {/* <FontAwesomeIcon
                className="fontawesome"
                icon={faUser}
                size="lg"
              /> */}
              <span>about</span>
            </span>
            {/* </Link> */}
            {/* <Link to="/login">
            <span className="navIconsUser">
              <FontAwesomeIcon
                className="fontawesome"
                icon={faUser}
                size="lg"
              />
              <span>지넬 바이스</span>
            </span>
          </Link> */}
            {/* <img
            className="navContainerLogo"
            onClick={() => {
              navigate('/');
            }}
            src=""
            alt="로고"
          /> */}
            <h1
              className="TitleName"
              onClick={() => {
                navigate('/');
              }}
            >
              J&S health
            </h1>
            <span
              onClick={() => {
                navigate('/cart');
              }}
            >
              Shop
            </span>

            <span style={{ cursor: 'pointer' }} onClick={modalOpen}>
              로그인/회원가입
            </span>
            {isOpen && (
              <SideRModal
                modalClose={modalClose}
                isOpen={isOpen}
                setIsOpen={setIsOpen}
              />
            )}
          </div>
        </div>

        <div className="navIcons">
          {/* <span className="navIconsCart">
            <FontAwesomeIcon icon="fa-solid fa-phone" />
          </span> */}

          {/* <span className="navIconsHam">
            <FontAwesomeIcon
              onClick={onClickHandler}
              className="fontawesome"
              icon={faBars}
              size="lg"
            />
          </span> */}
        </div>
      </div>
      <div className="sideModalWrapper" ref={ref}>
        {isClicked ? (
          <SideModal setIsClicked={setIsClicked} className="sideModal" />
        ) : (
          <SideModal
            setIsClicked={setIsClicked}
            className="sideModal sideModalHidden"
          />
        )}
      </div>
    </nav>
  );
};

export default Nav;
