import React from 'react';
// import PropTypes from 'prop-types';
import '../../../styles/type_filter.css';
import { useDispatch, useSelector } from 'react-redux';
import { filterItems, addFilter } from '../../../redux/actions';
import { updateFilters } from '../../../helpers/Helpers';

const typeFilters = [
  { label: 'Packages', type: 'package' },
  { label: 'Shiny Legends', type: 'shiny_legend' },
  { label: 'Shiny Singles', type: 'shiny_single' },
  { label: 'Event Pokemon', type: 'event' }
];

const TypeFilter = props => {
  const { items, filters } = useSelector(state => state.items);
  const dispatch = useDispatch();
  // localStorage.removeItem('shopping_cart');
  const handleClick = event => {
    const className = event.target.className;
    // console.log(className);
    if (className.indexOf('clicked') !== -1) {
      updateFilters(dispatch, filters, items, event.target.className.split(' ')[0]);
      event.target.className = className.split(' ')[0];
    } else {
      dispatch(addFilter(event.target.className));
      dispatch(filterItems(items));
      event.target.className = className + ' clicked';
    }
  };

  const existsInFilters = filter => {
    return filters.indexOf(filter) !== -1;
  };

  return (
    <div className="type_filter">
      <p>Filter by categories</p>
      <div className="filters">
        {typeFilters.map((filter, index) => {
          return (
            <div
              key={index}
              onClick={handleClick}
              className={existsInFilters(filter.type) ? `${filter.type} clicked` : filter.type}
            >
              {filter.label}
            </div>
          );
        })}
      </div>
    </div>
  );
};

TypeFilter.propTypes = {};

export default TypeFilter;
