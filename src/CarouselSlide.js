import React, { Component } from 'react';

class CarouselSlide extends Component {
    
  render() {
      const styles = {
        backgroundImage: `url(${this.props.slide.url})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center'
     };
    
      return (
          <section
             className={
              this.props.index === this.props.activeIndex
                ? "carousel__slide carousel__slide--active"
                : "carousel__slide"
            }
            style={styles}
          >

            <span className='carousel__title'>
                {this.props.slide.title}
            </span>
        
        </section>
    );
  }
}

export default CarouselSlide;