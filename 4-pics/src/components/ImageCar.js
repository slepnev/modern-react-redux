import React from 'react';

class ImageCar extends React.Component {
  render() {
    return (
      <div>
        <img src={this.props.image.urls.regular} alt={this.props.image.description}/>
      </div>
    )
  }
}

export default ImageCar;