import React from 'react';
// import PropTypes from 'prop-types';
import '../../../styles/other_filter.css';
import { useDispatch, useSelector } from 'react-redux';
import { setItems, setFilteredItems } from '../../../redux/actions';

const options = [
  { label: 'Price (ASC)', value: 'price_asc' },
  { label: 'Price (DESC)', value: 'price_desc' }
  // { label: 'Alphabetical (A-Z)', value: 'alpha_asc' },
  // { label: 'Alphabetical (Z-A)', value: 'alpha_desc' }
];

const OtherFilter = props => {
  const { items, filteredItems } = useSelector(state => state.items);
  // console.log('ITEMS: ', items);
  // console.log('FILTERED ITEMS: ', filteredItems);
  const dispatch = useDispatch();
  const handleChange = event => {
    const value = event.target.value;
    switch (value) {
      case 'default':
        filteredItems.sort((item1, item2) => parseInt(item1.id, 10) - parseInt(item2.id, 10));
        dispatch(setItems(filteredItems));
        break;
      case 'price_asc':
        filteredItems.sort((item1, item2) => item1.price - item2.price);
        dispatch(setFilteredItems(filteredItems));
        break;
      case 'price_desc':
        filteredItems.sort((item1, item2) => item2.price - item1.price);
        dispatch(setFilteredItems(filteredItems));
        break;
      default:
        dispatch(setItems(items));
    }
    console.log(value);
  };
  return (
    <div className="other_filter">
      <p>Sort By</p>
      <div className="filters">
        <select onChange={handleChange} name="other_filters_select" id="other_filters_select">
          <option value="default">Select an option</option>
          {options.map((option, index) => {
            return (
              <option key={index} value={option.value}>
                {option.label}
              </option>
            );
          })}
        </select>
      </div>
    </div>
  );
};

OtherFilter.propTypes = {};

export default OtherFilter;
