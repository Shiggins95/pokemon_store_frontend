import React from 'react';
import PropTypes from 'prop-types';
import '../styles/cart_product.css';
import { addToCart, hideCart, removeFromCart, updateItem } from '../redux/actions';
import { useDispatch, useSelector } from 'react-redux';
// import { totalCartQuantity } from '../helpers/Helpers';

const CartProduct = props => {
  const { item, productClassName, cartQuantity } = props;
  const { items } = useSelector(state => state.items);
  console.log('ITEMS: ', items);
  // console.log(items);
  const dispatch = useDispatch();
  const addItem = event => {
    // console.log('ITEMMMM: ', item);
    if (item.quantity > 0) {
      item.quantity -= 1;
      dispatch(addToCart(item, items));
      dispatch(updateItem(item));
    }
  };
  const removeOneItem = event => {
    if (cartQuantity === 1) {
      dispatch(hideCart());
    }
    item.quantity += 1;
    dispatch(removeFromCart(item, items));
    dispatch(updateItem(item));
  };

  const removeItem = event => {
    console.log(cartQuantity);
    console.log(items);
    if (cartQuantity === 1 || item.cartQuantity === cartQuantity) {
      dispatch(hideCart());
    }
    for (let i = item.cartQuantity; i > 0; i--) {
      item.quantity += 1;
      dispatch(removeFromCart(item, items));
    }
    dispatch(updateItem(item));
  };

  const getTotalCost = () => {
    return (item.cartQuantity * item.price).toFixed(2);
  };
  const totalCost = getTotalCost();
  return (
    <div className={`cart_product ${productClassName}`}>
      <div className="cart_product_image">
        <img src={item.img} alt={item.name} />
      </div>
      <div className="cart_product_info">
        <p>{item.name}</p>
        <div className="item_stats">
          <p>Quantity: {item.cartQuantity}</p>
          <p>Total: £{totalCost}</p>
        </div>
        <div className="cart_product_buttons">
          <button onClick={addItem} value={item.id}>
            +
          </button>
          <button onClick={removeOneItem} value={item.id}>
            -
          </button>
          <button onClick={removeItem} value={item.id}>
            Remove
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
