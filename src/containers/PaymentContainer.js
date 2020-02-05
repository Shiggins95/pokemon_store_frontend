import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import StripeCheckout from 'react-stripe-checkout';
import '../styles/payment_container.css';
import CartProduct from '../components/CartProduct';
import { Link } from 'react-router-dom';
import { loadStripe } from '@stripe/stripe-js';
import { StripeProvider, Elements } from 'react-stripe-elements';
import CheckoutContainer from './CheckoutContainer';

const PaymentContainer = props => {
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
    const newItems = items;
    newItems.forEach(item => {
      item.user = {};
    });
    const requestObj = {};
    buildObj(token, requestObj);
    buildObj(addresses, requestObj);
    requestObj.ya_boys_products = newItems;

    // convert £s to pence for stripe to handleI
    requestObj.price = parseInt((totals * 100).toFixed(2), 10);

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

  const displayClass = items.length === 0 ? 'display' : 'hide';
  const stripePromise = loadStripe('pk_test_E1sB3HebuXKmr9Avr80VltJw00gh3Xkzpo');
  return (
    <div className="payment_container">
      <div className={`click_stopper_container ${displayClass}`}>
        <div className="click_stopper">
          <h2>Please add items to your basket</h2>
          <Link to="/store_home" className="link">
            Shop Products
          </Link>
        </div>
      </div>
      <div className="inner_payment_container">
        <div className="items_info">
          {items.map((item, index) => {
            let className = index === 0 ? 'first_cart_product' : '';
            return <CartProduct item={item} key={index} productClassName={className} />;
          })}
        </div>
      </div>
      <div className="inner_totals_container">
        <div className="totals">
          <p>Cart Total: £{totals.toFixed(2)}</p>
        </div>
        <div className="pay_button">
          <StripeProvider apiKey="pk_test_E1sB3HebuXKmr9Avr80VltJw00gh3Xkzpo">
            <Elements>
              <CheckoutContainer items={items} cartTotal={totals}/>
            </Elements>
          </StripeProvider>
        </div>
      </div>
    </div>
  );
};

PaymentContainer.propTypes = {};

export default PaymentContainer;
