import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './SideModal.scss';

const SideModal = ({ className, setIsClicked }) => {
  const navigate = useNavigate();

  const onCloseButtonHandler = () => {
    setIsClicked(false);
  };

  return (
    <aside className={className}>
      <div className="sideModalTitle">
        <button className="sideModalCloseButton" onClick={onCloseButtonHandler}>
          {/* <FontAwesomeIcon icon="fa-solid fa-xmark" size="lg" /> */}
        </button>
        <img
          className="modalLogo"
          onClick={() => {
            navigate('/');
          }}
          src="/images/Nav/Sims&co_logo.png"
          alt="로고"
        />
      </div>

      <div className="sideModalListWrapper">
        <ul className="sideModalList">
          {SIDEMENU_LIST_BOLD.map(({ id, list }) => {
            return (
              <li
                className="mainBoldMenuList"
                onClick={onCloseButtonHandler}
                key={id}
              >
                <Link to={`products/category/${id}`}>{list}</Link>
              </li>
            );
          })}

          {SIDEMENU_LIST_SEMIBOLD.map(({ id, list }) => {
            return (
              <li className="mainSemiBoldMenuList" key={id}>
                {list}
              </li>
            );
          })}
        </ul>

        <ul className="sideModalInfo">
          {SIDEMENU_INFORMATION.map(({ id, list }) => {
            return (
              <li className="mainMenuInfo" key={id}>
                {list}
              </li>
            );
          })}
        </ul>
      </div>
      <div className="sideModalButtonWrapper">
        <button className="sideModalButton">
          <span>한국어</span>
          {/* <FontAwesomeIcon icon="fa-solid fa-chevron-down" /> */}
        </button>
        <button className="sideModalButton">
          {/* <FontAwesomeIcon icon="fa-solid fa-globe" /> */}
          <span>국가 변경</span>
        </button>
      </div>
    </aside>
  );
};

export default SideModal;

const SIDEMENU_LIST_BOLD = [{ id: 1, list: '라임 보기' }];

const SIDEMENU_LIST_SEMIBOLD = [
  { id: 1, list: '사전 예약하기' },
  { id: 3, list: '라임 스토리' },
  { id: 4, list: '새로운 소식' },
  { id: 5, list: '회사 개요' },
];

const SIDEMENU_INFORMATION = [
  { id: 1, list: '매장안내' },
  { id: 4, list: '고객지원' },
  { id: 5, list: '배송조회' },
  { id: 6, list: '내 프로필' },
];
