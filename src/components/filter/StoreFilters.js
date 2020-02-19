import React from 'react';
// import PropTypes from 'prop-types';
import TypeFilter from './filters/TypeFilter';
import OtherFilter from './filters/OtherFilter';
import OutOfStockFilter from './filters/OutOfStockFilter';
import '../../styles/store_filters.css';

const StoreFilters = props => {
  return (
    <div className="store_filters">
      <TypeFilter {...props} />
      <OutOfStockFilter {...props} />
      <OtherFilter {...props} />
    </div>
  );
};

StoreFilters.propTypes = {};

export default StoreFilters;
