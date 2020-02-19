import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { addToCart, showCart } from '../redux/actions';
import '../styles/add_to_cart_modal.css';

const AddToCartModal = props => {
  const { changeDisplay, item, cartItem } = props;
  const dispatch = useDispatch();

  const handleClick = () => {
    console.log('STD ITEM: ', item);
    console.log('CART ITEM: ', cartItem);
    const quantity = 10;
    if (quantity < cartItem.quantity - cartItem.cartQuantity || !cartItem.quantity) {
      if (item.quantity > 0) {
        for (let i = 0; i < quantity; i++) {
          dispatch(addToCart(item));
        }
        dispatch(showCart());
      }
    }
    changeDisplay();
  };

  return (
    <div id="add_to_cart_modal">
      <button onClick={handleClick}>Add</button>
    </div>
  );
};

AddToCartModal.propTypes = {};

export default AddToCartModal;
