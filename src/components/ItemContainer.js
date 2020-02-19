import React, { useEffect, useState } from 'react';
import { get } from '../helpers/Request';
import '../styles/item_container.css';
import ImageGallery from './ImageGallery.js';
import AddToCartModal from './AddToCartModal';
import { useSelector } from 'react-redux';

const ItemContainer = props => {
  const [item, setItem] = useState();
  const [displayModal, setDisplayModal] = useState(false);
  const { id } = props.match.params;
  const { items } = useSelector(state => state.cart);
  console.log('ITEMSSSS: ', items);
  console.log(item);
  useEffect(() => {
    const getData = async () => {
      return await get(`/api/products/${id}`);
    };
    getData().then(data => {
      if (!item) {
        data.images = JSON.parse(data.images);
        setItem(data);
      }
    });
  }, [id, item]);
  console.log(props);
  const handleClick = () => {
    setDisplayModal(!displayModal);
  };
  return item ? (
    <div id="product_container">
      <div className="image_display">
        <ImageGallery item={item} />
      </div>
      <div className="product_info">
        <h2>{item.name}</h2>
        <h3>{item.price}</h3>
        <p>{item.description}</p>
        <button onClick={handleClick} value={item.id} id="inner_button" className="add_to_cart_inner">
          Add To Cart
        </button>
        {displayModal ? (
          <AddToCartModal
            changeDisplay={setDisplayModal}
            item={item}
            cartItem={items.filter(cartItem => cartItem.id === item.id)[0] || {}}
          />
        ) : null}
      </div>
    </div>
  ) : (
    <div id="product_container">
      <p>Loading</p>
    </div>
  );
};

export default ItemContainer;
