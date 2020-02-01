import React from 'react';
import PropTypes from 'prop-types';
import '../styles/cart_product.css';
import { addToCart, hideCart, removeFromCart, updateItem } from '../redux/actions';
import { useDispatch, useSelector } from 'react-redux';
// import { totalCartQuantity } from '../helpers/Helpers';

const CartProduct = props => {
  const { item, productClassName, cartQuantity } = props;
  const { items } = useSelector(state => state.items);
  // console.log(items);
  const dispatch = useDispatch();
  return (
    <div className={`cart_product ${productClassName}`}>
      <div className="cart_product_image">
        <img src={item.img} alt={item.name} />
      </div>
      <div className="cart_product_info">
        <p>{item.name}</p>
        <p>Quantity: {item.cartQuantity}</p>
        <div className="cart_product_buttons">
          <button
            onClick={event => {
              const item = items.filter(item => {
                return item.id.toString() === event.target.value;
              })[0];
              console.log(item);
              if (item.quantity > 0) {
                item.quantity -= 1;
                dispatch(addToCart(event.target.value, items));
                dispatch(updateItem(item));
              }
            }}
            value={item.id}
          >
            +
          </button>
          <button
            onClick={event => {
              const item = items.filter(item => {
                return item.id.toString() === event.target.value;
              })[0];
              item.quantity += 1;
              if (cartQuantity === 1) {
                dispatch(hideCart());
              }
              dispatch(removeFromCart(event.target.value, items));
              dispatch(updateItem(item));
            }}
            value={item.id}
          >
            -
          </button>
        </div>
      </div>
    </div>
  );
};

CartProduct.propTypes = {
  item: PropTypes.object,
  productClassName: PropTypes.string
};

export default CartProduct;
