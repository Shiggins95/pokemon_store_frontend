import React from 'react';
// import PropTypes from 'prop-types';
import '../../../styles/type_filter.css';
import { useDispatch, useSelector } from 'react-redux';
import { filterItems, restoreItems, addFilter, removeFilter } from '../../../redux/actions';

const typeFilters = [
  { label: 'Packages', type: 'package' },
  { label: 'Shiny Legends', type: 'shiny_legend' },
  { label: 'Shiny Singles', type: 'shiny_single' },
  { label: 'Trades', type: 'trades' }
];

const TypeFilter = props => {
  const { items, filters } = useSelector(state => state.items);
  const dispatch = useDispatch();

  const handleClick = event => {
    const className = event.target.className;
    console.log(className);
    if (className.indexOf('clicked') !== -1) {
      if (filters.length === 1) {
        dispatch(removeFilter(event.target.className.split(' ')[0]));
        dispatch(restoreItems());
      } else {
        dispatch(removeFilter(event.target.className.split(' ')[0]));
        dispatch(filterItems(items));
      }
      event.target.className = className.split(' ')[0];
    } else {
      dispatch(addFilter(event.target.className));
      dispatch(filterItems(items));
      event.target.className = className + ' clicked';
    }
  };

  return (
    <div className="type_filter">
      <p>Filter by categories</p>
      <div className="filters">
        {typeFilters.map((filter, index) => {
          return (
            <div key={index} onClick={handleClick} className={filter.type}>
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
