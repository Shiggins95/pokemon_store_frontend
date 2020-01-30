import React, { useEffect } from 'react';
// import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { setItems } from '../redux/actions/';
import { get } from '../helpers/Request';
import Product from '../components/Product.js';
import '../styles/store_container.css';
import ShoppingCart from '../components/ShoppingCart';
import StoreFilters from '../components/filter/StoreFilters.js';

const StoreContainer = props => {
  const dispatch = useDispatch();
  const { items, filteredItems, filters } = useSelector(state => state.items);

  // console.log('ITEMS SC: ', items);
  // console.log('ITEMS FILTERED SC: ', filteredItems);
  console.log('FILTERS: ', filters);
  const getData = async () => {
    const response = await get('/api/products/');
    // console.log(response);
    return response;
  };

  // set initial items
  useEffect(() => {
    if (items.length === 0) {
      getData().then(data => {
        dispatch(setItems(data));
      });
    }
  }, [dispatch, items]);

  // const itemsToUse = items.length === filteredItems.length ? items : filteredItems;
  const itemsToUse = filteredItems;
  // localStorage.removeItem('shopping_cart');
  // console.log('ITEMS:', items);
  // console.log(JSON.parse(localStorage.getItem('shopping_cart')));
  return itemsToUse.length === 0 ? (
    <div className="store_container">store</div>
  ) : (
    <div className="store_container">
      <StoreFilters />
      <div className="products">
        {itemsToUse.map((item, index) => {
          // return <h1 key={index}>{item.name}</h1>;
          return <Product key={index} item={item} />;
        })}
      </div>
    </div>
  );
};

StoreContainer.propTypes = {};

export default StoreContainer;
