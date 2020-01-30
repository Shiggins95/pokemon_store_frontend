import React from 'react';
// import PropTypes from 'prop-types';
import '../../../styles/oos_filter.css';
import { useDispatch, useSelector } from 'react-redux';
import { hideOutOfStock, restoreItems, setFilteredItems } from '../../../redux/actions';

const OutOfStockFilter = props => {
  const { items, filteredItems } = useSelector(state => state.items);
  console.log('FILTERED OOS: ', filteredItems);
  console.log('ITEMS OOS: ', items);
  const dispatch = useDispatch();
  const itemsToUse = items.length === filteredItems.length ? items : filteredItems;
  const handleClick = event => {
    const { innerText } = event.target;
    if (innerText === 'X') {
      event.target.innerText = '';
      dispatch(setFilteredItems(items));
      event.target.style.background = 'rgba(12, 238, 255, 1)';
      event.target.style.borderColor = 'rgb(12, 185, 255)';
    } else {
      event.target.style.background = 'rgb(12, 185, 255)';
      event.target.style.borderColor = 'rgba(12, 238, 255, 1)';
      event.target.innerText = 'X';
      dispatch(hideOutOfStock());
    }
  };
  return (
    <div className="oos_filter">
      <p>Hide out of stock</p>
      <div className="filters">
        <div className="checkbox" onClick={handleClick} />
      </div>
    </div>
  );
};

OutOfStockFilter.propTypes = {};

export default OutOfStockFilter;
