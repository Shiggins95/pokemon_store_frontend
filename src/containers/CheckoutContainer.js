import React, { useEffect, useState } from 'react';
import '../styles/checkout_container.css';
import PropTypes from 'prop-types';

import { CardNumberElement, CardCvcElement, CardExpiryElement, injectStripe } from 'react-stripe-elements';
import { countries } from '../helpers/CountryData';

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

  const getAddressFromEvent = event => {
    const ids = ['payment_line1', 'payment_line2', 'payment_city', 'payment_country', 'payment_postal_code'];
    const customerObj = {};
    ids.forEach(id => {
      const currentId = id.split('payment_')[1];
      customerObj[currentId] = event[id].value;
    });

    console.log(customerObj);
    return customerObj;
  };

  const handleSubmit = async event => {
    event.preventDefault();
    console.log(event.target);
    const address = getAddressFromEvent(event.target);
    const email = event.target.payment_email.value;

    const { token } = await props.stripe.createToken();
    console.log(token);

    const newItems = props.items;
    newItems.forEach(item => {
      item.user = {};
    });
    const requestObj = {};
    buildObj(token, requestObj);
    requestObj.address = address;
    requestObj.ya_boys_products = newItems;
    requestObj.email = email;

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
      <div className="payment_customer_details">
        <div className="payment_input email">
          <label>Email</label>
          <input type="email" id="payment_email" name="payment_line_1" defaultValue="test@test.com" />
        </div>
        <div className="payment_input line1">
          <label>Address Line 1</label>
          <input type="text" id="payment_line1" name="payment_line_1" defaultValue="Test Line 1" />
        </div>
        <div className="payment_input line1">
          <label>Address Line 2</label>
          <input type="text" id="payment_line2" name="payment_line_2" defaultValue="Test Line 2" />
        </div>
        <div className="city_postcode">
          <div className="payment_input">
            <label>City</label>
            <input type="text" id="payment_city" name="payment_city" defaultValue="Glasgow" />
          </div>
          <div className="payment_input postcode">
            <label>Post Code</label>
            <input type="text" id="payment_postal_code" name="payment_postal_code" defaultValue="Test Post Code" />
          </div>
        </div>
        <div className="payment_input country">
          <label>Country</label>
          <select name="payment_country" id="payment_country">
            <option value="GB">United Kingdom</option>
            {countries.map(country => {
              return <option value={country.code}>{country.name}</option>;
            })}
          </select>
        </div>
      </div>
      <div className="payment_info">
        <div className="payment_input">
          <label>Card Number</label>
          <CardNumberElement className="stripe_card_element" id="card_number_element" />
        </div>
        <div className="payment_input">
          <label>Expiry</label>
          <CardExpiryElement className="stripe_card_element" id="expiry_element" />
        </div>
        <div className="payment_input">
          <label>CVC</label>
          <CardCvcElement className="stripe_card_element" id="cvc_element" />
        </div>
      </div>
      <button type="submit">Pay Now</button>
    </form>
  );
};

CheckoutContainer.propTypes = {
  cartTotal: PropTypes.number,
  items: PropTypes.array
};

export default injectStripe(CheckoutContainer);
