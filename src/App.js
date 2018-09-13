import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './App.css';

import CarouselSlide from './CarouselSlide';
import CarouselIndicator from './CarouselIndicator';
import CarouselLeftArrow from './CarouselLeftArrow';
import CarouselRightArrow from './CarouselRightArrow';

// Data for carousel
const images = [
  {
    title: 'Picture of forest',
    url: 'http://d2ouvy59p0dg6k.cloudfront.net/img/original/img_6558_1.jpg'
  },
  {
    title: 'Field of wheat',
    url: 'https://thumbs.dreamstime.com/b/wheat-field-valle-d-itria-puglia-yellow-wheat-field-valle-d-itria-puglia-107968487.jpg'
  },
  {
    title: 'Autumn river',
    url: 'http://data.1freewallpapers.com/download/autumn-river-with-boat-800x600.jpg'
  }
];


class App extends Component {
  constructor(props) {
    super(props);

    this.goToSlide = this.goToSlide.bind(this);
    this.goToPrevSlide = this.goToPrevSlide.bind(this);
    this.goToNextSlide = this.goToNextSlide.bind(this);

    this.state = {
      activeIndex: 0
    };
  }

  goToSlide(index) {
    this.setState({
      activeIndex: index
    });
  }

  goToPrevSlide(e) {
    e.preventDefault();

    let index = this.state.activeIndex;
    let { images } = this.props;
    let imagesLength = images.length;

    if (index < 1) {
      index = imagesLength;
    }

    --index;

    this.setState({
      activeIndex: index
    });
  }

  goToNextSlide(e) {
    e.preventDefault();

    let index = this.state.activeIndex;
    let { images } = this.props;
    let imagesLength = images.length - 1;

    if (index === imagesLength) {
      index = -1;
    }

    ++index;

    this.setState({
      activeIndex: index
    });
  }
    
    

  render() {
    return (
      <div className="carousel">
        <CarouselLeftArrow onClick={e => this.goToPrevSlide(e)} />

        <div className="carousel__images">
          {this.props.images.map((slide, index) =>
            <CarouselSlide
              key={index}
              index={index}
              activeIndex={this.state.activeIndex}
              slide={slide}
            />
          )}
        </div>

        <CarouselRightArrow onClick={e => this.goToNextSlide(e)} />

        <div className="carousel__indicators">
          {this.props.images.map((slide, index) =>
            <CarouselIndicator
              key={index}
              index={index}
              activeIndex={this.state.activeIndex}
              isActive={this.state.activeIndex === index} 
              onClick={e => this.goToSlide(index)}
            />
          )}
        </div>
      </div>
    );
  }
}

// Render Carousel component

ReactDOM.render(
    <App images={images} />, document.getElementById("root")
);
