import React, { Component } from 'react';

class CarouselRightArrow extends Component {
  render() {
    return (
      <a
        href="#"
        className="carousel__arrow carousel__arrow--right"
        onClick={this.props.onClick}
      >
        <span className="fa fa-3x fa-chevron-right" />
      </a>
    );
  }
}
export default CarouselRightArrow;