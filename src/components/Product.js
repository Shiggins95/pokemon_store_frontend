import React from 'react';
import PropTypes from 'prop-types';
import '../styles/product.css';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, showCart, setItems, setFilteredItems, filterItems, addFilter } from '../redux/actions';
import { Link } from 'react-router-dom';

const Product = props => {
  const { item } = props;
  const dispatch = useDispatch();
  const { items, filteredItems, filters } = useSelector(state => state.items);
  const handleClick = event => {
    console.log(item);
    console.log('ITEM PROD', item);
    console.log('ITEM QTY PROD', item.quantity);
    console.log('ITEM S QTY PROD', item.startingQuantity);
    console.log('calc: ', parseInt(item.startingQuantity, 10) - parseInt(item.quantity, 10));
    if (item.quantity > 1) {
      item.quantity -= 1;
      dispatch(addToCart(event.target.value, items));
      dispatch(showCart());
      dispatch(setFilteredItems(filteredItems));
    } else {
      console.log(item);
      if (item.quantity === 1) {
        item.quantity -= 1;
        dispatch(addToCart(event.target.value, items));
        dispatch(setFilteredItems(filteredItems));
      }
      if (filters.indexOf('oos') !== -1) {
        dispatch(filterItems(items));
      }
    }
  };

  let quantityLabel = 'High Stock';
  let color = 'green';
  if (item.quantity === 0) {
    quantityLabel = 'Out Of Stock';
    color = 'red';
  } else if (item.quantity <= 15) {
    quantityLabel = 'Low Stock';
    color = 'orange';
  }
  return (
    <div className="product_container">
      <img src={item.img} alt={item.name} />
      <div className="header_info">
        <h3>{item.name}</h3>
        <h4>£{item.price}</h4>
        <p style={{ color }}>{quantityLabel}</p>
        <h4>{item.quantity}</h4>
      </div>
      <div className="buttons">
        <button onClick={handleClick} value={item.id} id="inner_button" className="add_to_cart_inner">
          Add To Cart
        </button>
        <Link to={`/item/${item.id}`} id="inner_button" className="view_more_inner">
          View More
        </Link>
      </div>
    </div>
  );
};

Product.propTypes = {
  item: PropTypes.object,
  index: PropTypes.number
};

export default Product;
