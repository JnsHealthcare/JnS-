import React from 'react';
import { Link, useLocation } from 'react-router-dom';
// import FOOTER_DATA from './FooterData';
import './footer.scss';

const interruptedRoute = ['signup', 'login'];

const Footer = () => {
  const { pathname } = useLocation();
  const isHideFooter = interruptedRoute.some((path) => pathname.includes(path));

  if (isHideFooter) return;

  return (
    <footer className="footer">
      {/* <section className="footerMainRow"> */}
      {/* <div className="footerSignUp"> */}
      <h3 className="listTitle">(주) 지넬 바이스</h3>
      {/* <p className="footerSignUpText">
            지금 SIMS Family에 무료로 가입하고
            <br />
            다양한 멤버 전용 혜택을 누리세요.
          </p> */}
      {/* <p className="detailLink">
            <Link to="#">자세히 보기</Link>
          </p>
          <Link className="footerLinkButton" to="/signup">
            (주) 저넬 바이스
          </Link> */}
      {/* </div> */}

      {/* {FOOTER_DATA.map((footerData) => {
          return (
            <ul className="footerColumnList" key={footerData.id}>
              <h3 className="listTitle">{footerData.title}</h3>
              {footerData.list.map((list, i) => {
                return (
                  <li key={list.id} className="listContent">
                    {list.title}
                  </li>
                );
              })}
            </ul>
          );
        })} */}
      {/* </section> */}

      {/* <section className="footerCopyRightRow">
        <p className="copyRightText">© Inter Sims Systems B.V 1999-2022</p>
        <ul className="footerCopyRightLists">
          {FOOTER_COPYRIGHT.map((list) => {
            return (
              <li className="footerCopyRightItem" key={list.id}>
                {list.list}
              </li>
            );
          })}
        </ul>
      </section> */}
      <section className="footerInformationRow">
        <p>
          (주)저넬 바이스
          <br />
          주소 : 대전광역시 서구 관저동로 190-27
          <br />
          사업자 등록번호 : 696-87-03060
          <br />
          대표자 : 고정민
          <br />
          통신판매업 신고 : ''
          <br />
          TEL :
        </p>
      </section>
    </footer>
  );
};

export default Footer;

const FOOTER_COPYRIGHT = [
  { id: 1, list: '개인정보처리방침' },
  { id: 2, list: '쿠키 정책' },
  { id: 3, list: '쿠키 설정' },
  { id: 4, list: '웹사이트 이용약관' },
  { id: 5, list: 'Responsible disclosure' },
];

// const FOOTER_DATA = [
//   {
//     id: 1,
//     title: '고객문의',
//     list: [
//       { id: 1, title: '고객지원' },
//       { id: 2, title: '자주 묻는 질문' },
//       { id: 3, title: '문의하기' },
//       { id: 4, title: '배송조회' },
//       { id: 5, title: '교환환불' },
//       { id: 6, title: '품질보증' },
//       { id: 7, title: '제품리콜' },
//       { id: 8, title: '피드백' },
//       { id: 9, title: '부품 신청' },
//     ],
//   },
// ];
