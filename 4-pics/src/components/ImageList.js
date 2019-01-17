import './ImageList.css';
import React from 'react';
import ImageCar from './ImageCar';

const ImageList = props => {
  const images = props.images.map((image) => {
    return <ImageCar key={image.id} image={image}/>
  });

  return (
    <div className="image-list">
      {images}
    </div>
  );
};

export default ImageList;