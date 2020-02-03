import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const CheckoutContainer = props => {
  const { items } = useSelector(state => state.cart);
  return (
    <div className="checkout_container">
      {items.map(item => {
        return (
          <div className="item_checkout">
            <p>{item.name}</p>
            <p>{item.price}</p>
          </div>
        );
      })}
      <Link to="/make_payment" cart={items}>
        Proceed
      </Link>
    </div>
  );
};

CheckoutContainer.propTypes = {};

export default CheckoutContainer;
