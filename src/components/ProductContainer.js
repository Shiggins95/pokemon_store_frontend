import React from 'react';
import PropTypes from 'prop-types';
import Product from './Product';

const ProductContainer = props => {
  const { items, innerText } = props;

  return items.length > 0 ? (
    <div className="products">
      {items.map((item, index) => {
        return <Product key={index} item={item} />;
      })}
    </div>
  ) : (
    <div className="store_container">
      <h1>{innerText}</h1>
    </div>
  );
};

ProductContainer.propTypes = {
  innerText: PropTypes.string,
  items: PropTypes.array
};

export default ProductContainer;
