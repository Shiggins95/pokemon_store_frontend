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
  return (
    <div className="store_container">
      <StoreFilters />
      {filteredItems.length > 0 ? (
        <div className="products">
          {filteredItems.map((item, index) => {
            return <Product key={index} item={item} />;
          })}
        </div>
      ) : (
        <div className="store_container">
          <h1>No products matched your criteria</h1>
        </div>
      )}
    </div>
  );
};

StoreContainer.propTypes = {};

export default StoreContainer;
