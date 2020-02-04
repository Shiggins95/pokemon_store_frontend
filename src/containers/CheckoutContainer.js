import React from 'react';
import '../styles/checkout_container.css';
import PropTypes from 'prop-types';

import { CardNumberElement, CardCvcElement, CardExpiryElement, injectStripe } from 'react-stripe-elements';

const CheckoutContainer = props => {
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

  const handleSubmit = async event => {
    event.preventDefault();
    const payment = {
      object: 'payment_intent',
      amount: 1000,
      secret: 'pk_test_E1sB3HebuXKmr9Avr80VltJw00gh3Xkzpo'
    };

    const { token } = await props.stripe.createToken();
    console.log(token);

    const newItems = props.items;
    newItems.forEach(item => {
      item.user = {};
    });
    const requestObj = {};
    buildObj(token, requestObj);
    requestObj.ya_boys_products = newItems;

    // convert £s to pence for stripe to handleI
    requestObj.price = parseInt((props.cartTotal * 100).toFixed(2), 10);

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

  return (
    <form onSubmit={handleSubmit} id="stripe_checkout_form">
      <CardNumberElement className="stripe_card_element" id="card_number_element" />
      <CardCvcElement className="stripe_card_element" id="cvc_element" />
      <CardExpiryElement className="stripe_card_element" id="expiry_element" />
      <button type="submit">Pay</button>
    </form>
  );
};

CheckoutContainer.propTypes = {
  cartTotal: PropTypes.number,
  items: PropTypes.array
};

export default injectStripe(CheckoutContainer);
