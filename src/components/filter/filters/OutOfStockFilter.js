import React from 'react';
// import PropTypes from 'prop-types';
import '../../../styles/oos_filter.css';
import { useDispatch, useSelector } from 'react-redux';
import { addFilter, filterItems } from '../../../redux/actions';
import { updateFilters } from '../../../helpers/Helpers';

const OutOfStockFilter = props => {
  const { items, filters } = useSelector(state => state.items);
  // console.log('FILTERED OOS: ', filteredItems);
  // console.log('ITEMS OOS: ', items);
  const dispatch = useDispatch();
  // const itemsToUse = items.length === filteredItems.length ? items : filteredItems;
  const handleClick = event => {
    const { innerText } = event.target;
    if (innerText === 'X') {
      event.target.innerText = '';
      event.target.style.background = 'rgba(12, 238, 255, 1)';
      event.target.style.borderColor = 'rgb(12, 185, 255)';
      updateFilters(dispatch, filters, items, 'oos');
    } else {
      event.target.style.background = 'rgb(12, 185, 255)';
      event.target.style.borderColor = 'rgba(12, 238, 255, 1)';
      event.target.style.color = 'rgba(12, 238, 255, 1)';
      event.target.innerText = 'X';
      dispatch(addFilter('oos'));
      dispatch(filterItems());
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
