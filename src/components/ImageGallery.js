import React, { useState } from 'react';
import PropTypes from 'prop-types';
import '../styles/image_gallery.css';

const ImageGallery = props => {
  const { item } = props;
  const { name, images, img } = item;
  const [currentImage, setCurrentImage] = useState(img);
  const handleHover = (entering, newImage) => {
    entering ? setCurrentImage(newImage) : setCurrentImage(img);
  };
  return (
    <div id="image_gallery">
      <div className="showcase">
        <img src={currentImage} alt={name} />
      </div>
      <div className="other_images" onMouseOut={() => handleHover(false)}>
        {images.map((image, index) => {
          return <img src={image} alt={name} onMouseOver={() => handleHover(true, image)} key={index} />;
        })}
      </div>
    </div>
  );
};

ImageGallery.propTypes = {};

export default ImageGallery;
