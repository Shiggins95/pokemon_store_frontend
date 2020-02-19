import React, { useEffect } from 'react';
// import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { setItems } from '../redux/actions/';
import { get } from '../helpers/Request';
import '../styles/store_container.css';
import StoreFilters from '../components/filter/StoreFilters.js';
import ProductContainer from '../components/ProductContainer';

const StoreContainer = props => {
  const dispatch = useDispatch();
  const { items, filteredItems, filters } = useSelector(state => state.items);
  console.log('FILTERS:::', filters);
  const shoppingCart = useSelector(state => state.cart);
  const cartItems = shoppingCart.items;
  const getData = async () => {
    return await get('/api/products/');
  };

  const innerText = filters.length > 0 ? 'No products matched your criteria' : 'Loading...';

  // set initial items
  useEffect(() => {
    if (items.length === 0) {
      getData().then(data => {
        data.forEach(item => {
          item.startingQuantity = item.quantity;
          item.images = JSON.parse(item.images);
          cartItems.forEach(cartItem => {
            if (cartItem.name === item.name) {
              item.quantity -= cartItem.cartQuantity;
            }
          });
        });

        setTimeout(() => {
          dispatch(setItems(data));
        }, 0);
      });
    }
  }, [cartItems, dispatch, items]);

  return (
    <div className="store_container">
      <StoreFilters filters={filters}/>
      <ProductContainer items={filteredItems} innerText={innerText} />
    </div>
  );
};

StoreContainer.propTypes = {};

export default StoreContainer;
