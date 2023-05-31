import react from 'react';
import { loadTossPayments } from '@tosspayments/payment-sdk';
import { useEffect, useRef, useState } from 'react';

const Toss = () => {
  const clientKey = 'test_ck_Wd46qopOB89bMxwy7553ZmM75y0v';
  // const clientKey = process.env.toss_payments_client_key;
  const originUrl = process.env.originUrl;

  // console.log(payment);

  const payment = () => {
    loadTossPayments(clientKey).then((tossPayments) => {
      tossPayments
        .requestPayment('카드', {
          amount: 100,
          orderId: 'UvMuqwfJUwm4jjKXx-HH8', // 대충 날짜를 조합하든가 uuid를 사용하는 방법도..
          orderName: '거꾸리',
          customerName: '문승훈',
          successUrl: 'https://localhost:3000/success', // ${결제 성공 후 redirect할 url}
          failUrl: 'https://localhost:3000/fail', //  ${결제 실패한 경우 redirect할 url}
        })
        .catch(function (error) {
          if (error.code === 'USER_CANCEL') {
            // 결제 고객이 결제창을 닫았을 때 에러 처리
          } else if (error.code === 'INVALID_CARD_COMPANY') {
            // 유효하지 않은 카드 코드에 대한 에러 처리
          }
        });
    });
  };
  return (
    <h1 onClick={payment} className="custom-button">
      결제하기
    </h1>
  );
};

export default Toss;
