import React, { Component } from 'react';

class CarouselLeftArrow extends Component {
  render() {
    return (
      <a
        href="#"
        className="carousel__arrow carousel__arrow--left"
        onClick={this.props.onClick}
      >
        <span className="fa fa-3x fa-chevron-left" />
      </a>
    );
  }
}
export default CarouselLeftArrow;