// TODO : 검색 결과없을경우 메세지 출력, 검색 결과 최대갯수 제한, 검색결과 모달창 클릭해도 box-shadow 안사라지게

import React, { useState, useRef, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import SideModal from '../SideModal/SideModal';
import { faUser } from '@fortawesome/free-solid-svg-icons';
// import NavSearchList from './NavSearchList';
import useOnOutSideClick from '../hook/useOnOutSideClick';
import NavModal from '../NavModal/NavModal';
import './nav.scss';

const interruptedRoute = ['signup', 'login'];

const Nav = () => {
  const { pathname } = useLocation();
  const [isFocus, setIsFocus] = useState(false);
  const [searchInput, setSearchInput] = useState('');
  const [itemsData, setItemsData] = useState([]);
  const [isClicked, setIsClicked] = useState(false);
  const [navModal, setNavModal] = useState(false);
  const navigate = useNavigate();
  const ref = useRef();
  const isHideNav = interruptedRoute.some((path) => pathname.includes(path));

  const onClickHandler = () => {
    setIsClicked(true);
  };

  const onClick = () => {
    setNavModal(!navModal);
  };

  useOnOutSideClick(ref, () => setIsClicked(false));

  const onChangeInputHandler = (e) => {
    setSearchInput(e.target.value);
  };

  const onPopUp = () => {
    setIsFocus(!isFocus);
  };

  const searchResult = itemsData.map(({ name, id }) => {
    if (searchInput.length > 0 && name.toLowerCase().includes(searchInput)) {
      return (
        <li className="navSearchResult" key={id}>
          <FontAwesomeIcon
            className="fontawesome"
            icon="fa-solid fa-magnifying-glass"
          />
          <span className="searchResultText">{name}</span>
        </li>
      );
    }
  });

  useOnOutSideClick(ref, () => setIsClicked(false));

  useEffect(() => {
    fetch('/data/searchMockData.json', {
      method: 'GET',
    })
      .then((res) => res.json())
      .then((data) => {
        setItemsData(data);
      });
  }, []);

  if (isHideNav) return;

  return (
    <nav className="nav">
      <span className="navButton">
        <FontAwesomeIcon
          className="fontawesome"
          icon="fa-solid fa-bars"
          size="lg"
          onClick={onClickHandler}
        />
        <div>
          {navModal ? (
            <div className="modal">
              <span className="navIconsUser" onClick={onClickHandler}>
                <FontAwesomeIcon
                  className="fontawesome"
                  icon={faUser}
                  size="lg"
                />
                <span>메뉴</span>
              </span>
              {/* 모달 내용 */}
              <div className="modalContent">{/* 내용 추가 */}</div>
            </div>
          ) : (
            <span className="navIconsUser" onClick={onClickHandler}>
              메뉴
            </span>
          )}
        </div>
      </span>
      <div className="navContainer">
        <div className="navSearch">
          <div className="navSearchIconLeft">
            <FontAwesomeIcon
              className="fontawesome"
              icon="fa-solid fa-magnifying-glass"
              size="lg"
            />
          </div>
          <Link to="/login">
            <span className="navIconsUser">
              <FontAwesomeIcon
                className="fontawesome"
                icon="fa-solid fa-user"
                size="lg"
              />
              <span>Lime story</span>
            </span>
          </Link>
          <Link to="/login">
            <span className="navIconsUser">
              <FontAwesomeIcon
                className="fontawesome"
                icon="fa-solid fa-user"
                size="lg"
              />
              <span>about</span>
            </span>
          </Link>
          {/* <Link to="/login">
            <span className="navIconsUser">
              <FontAwesomeIcon
                className="fontawesome"
                icon="fa-solid fa-user"
                size="lg"
              />
              <span>지넬 바이스</span>
            </span>
          </Link> */}
          <img
            className="navContainerLogo"
            onClick={() => {
              navigate('/');
            }}
            src=""
            alt="로고"
          />
          {isFocus ? (
            <div class="scrollable-container">
              <NavModal />
            </div>
          ) : (
            <span>제품 구매</span>
          )}

          {/* </Link> */}
          {/* <title className="navContainerLogo">Semmel Weis</title> */}
          {/* <input
            className="navSearchInput"
            onFocus={onFocusHandler}
            onChange={onChangeInputHandler}
            value={searchInput}
            type="text"
            placeholder="검색어 입력"
            width="60px"
            height="40px"
          /> */}
          <div className="navSearchIconRight">
            <FontAwesomeIcon
              className="fontawesome"
              icon="fa-solid fa-camera"
              size="lg"
            />
          </div>

          {/* {isFocus && (
            <div ref={ref}>
              <NavSearchList
                inputValue={searchInput}
                searchResult={searchResult}
              />
            </div>
          )} */}
        </div>

        <div className="navIcons">
          <span className="navIconsCart">
            <Link to="/cart">
              <FontAwesomeIcon
                className="fontawesome"
                icon="fa-solid fa-cart-shopping"
                size="lg"
              />
            </Link>
          </span>
          <Link to="/login">
            <span className="navIconsUser">
              <FontAwesomeIcon
                className="fontawesome"
                icon="fa-solid fa-user"
                size="lg"
              />
              <span>로그인/회원가입</span>
            </span>
          </Link>
          <span className="navIconsHamburger">
            <FontAwesomeIcon
              onClick={onClickHandler}
              className="fontawesome"
              icon="fa-solid fa-bars"
              size="lg"
            />
          </span>
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
