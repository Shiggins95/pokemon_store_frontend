import React from 'react';
// import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import '../styles/shopping_cart.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faWindowClose } from '@fortawesome/free-solid-svg-icons';
import { hideCart, showCart } from '../redux/actions';
import { useDispatch } from 'react-redux';
import CartProduct from './CartProduct';
import { totalCartQuantity } from '../helpers/Helpers';

const ShoppingCart = props => {
  const dispatch = useDispatch();
  const { display, items } = useSelector(state => state.cart);
  const className = display ? 'show_cart' : 'hide_cart';
  const labelClassName = display ? 'gap' : 'no_gap';
  const cartQuantity = totalCartQuantity(items);
  return (
    <div className={`shopping_cart`} style={{ color: 'white' }}>
      <div className={`cart_button ${labelClassName}`} onClick={() => dispatch(display ? hideCart() : showCart())}>
        <FontAwesomeIcon icon={display ? faWindowClose : faShoppingCart} id="fa_cart_button" />
        <div className="amount_in_cart">{cartQuantity}</div>
      </div>
      <div className={`shopping_cart_container ${className}`}>
        {items.map((item, index) => {
          let productClassName = '';
          if (index === 0) {
            productClassName = 'first_cart_product';
          } else if (index === items.length - 1) {
            productClassName = 'last_cart_product';
          }
          return (
            <CartProduct cartQuantity={cartQuantity} item={item} productClassName={productClassName} key={index} />
          );
        })}
      </div>
    </div>
  );
};

ShoppingCart.propTypes = {};

export default ShoppingCart;
