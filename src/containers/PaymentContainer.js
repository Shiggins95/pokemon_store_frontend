import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import StripeCheckout from 'react-stripe-checkout';
import '../styles/payment_container.css';

const PaymentContainer = props => {
  const ref = React.createRef();
  const { items } = useSelector(state => state.cart);
  const getTotals = () => {
    let total = 0;
    items.forEach(item => {
      total += item.cartQuantity * item.price;
    });
    return total;
  };
  const totals = getTotals();
  console.log(totals);

  const buildObj = (info, requestObj) => {
    for (let key in info) {
      if (info.hasOwnProperty(key)) {
        if (key === 'price') {
          requestObj[key] = info[key] * 100;
        } else {
          requestObj[key] = info[key];
        }
      }
    }
  };

  const handleToken = async (token, addresses) => {
    console.log({ token, addresses });
    const requestObj = {};
    buildObj(token, requestObj);
    buildObj(addresses, requestObj);
    requestObj.ya_boys_products = items;
    requestObj.price = 1881.57 * 100;

    console.log(requestObj);

    const headers = { 'Content-Type': 'application/json' };
    const response = await fetch('http://localhost:8080/api/payment/pay', {
      method: 'POST',
      body: JSON.stringify(requestObj),
      headers
    });

    const res = response.ok ? response.json() : console.log('error: ', response);
    console.log(res);
  };
  const handleClick = () => {
    console.log(ref.current);
  };
  return (
    <div className="payment_container">
      <div className="pay_button">
        <StripeCheckout
          token={handleToken}
          stripeKey="pk_test_E1sB3HebuXKmr9Avr80VltJw00gh3Xkzpo"
          billingAddress
          shippingAddress
          amount={totals * 100}
          name={`Ya Boys Pokemart - Total: £${totals.toFixed(2)}`}
          ref={ref}
        />
      </div>
    </div>
  );
};

PaymentContainer.propTypes = {};

export default PaymentContainer;

window.addEventListener('DOMContentLoaded', event => {
  const el = document.querySelector('.StripeCheckout');
  console.log(el);
  const span = el.firstChild;
  console.log(span);
  span.style.display = 'none';
  // el.style.background = 'red';
  // el.style.width = '100px';
  // el.style.height = '50px';
  el.style = '';
  el.id = 'hide';
  el.innerText = 'Pay Now';
});
