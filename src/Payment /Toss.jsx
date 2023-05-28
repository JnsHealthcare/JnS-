import react from 'react';
import {
  PaymentWidgetInstance,
  loadPaymentWidget,
} from '@tosspayments/payment-widget-sdk';
import { useEffect, useRef, useState } from 'react';

const Toss = () => {
  const selector = '#payment-widget';
  const clientKey = 'test_ck_D5GePWvyJnrK0W0k6q8gLzN97Eoq';
  const customerKey = 'YbX2HuSlsC9uVJW6NMRMj';

  return (
    <div>
      <h>결제하기</h>
    </div>
  );
};

export default Toss;
