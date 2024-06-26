import React, { Component } from 'react';
import headshot from '../../assets/items-container.png';
// import ReactDOM from 'react-dom';
// import styles from 'react-responsive-carousel/lib/styles/carousel.min.css';
// import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import './carousel.css';
import { Carousel } from 'react-responsive-carousel';

class DemoCarousel extends Component {
    render() {
        return (
            <Carousel > 
                <div className='trav'>
                    <img src={ headshot }  className='carousell'/>
                    <p className="legend">Legend 1</p>
                </div>
                <div > 
                    <img src={ headshot }  className='carousell'/>
                    <p className="legend">Legend 2</p>
                </div>
                <div >
                    <img src={ headshot }  className='carousell'/>
                    <p className="legend">Legend 3</p>
                </div>
                </Carousel>
        );
    }
};
// ReactDOM.render(<DemoCarousel />, document.querySelector('.demo-carousel'));

export default DemoCarousel;
// ReactDOM.render(<DemoCarousel />, document.querySelector('.demo-carousel'));

// Don't forget to include the css in your page

// Using webpack or parcel with a style loader
// import styles from 'react-responsive-carousel/lib/styles/carousel.min.css';

// Using html tag:
// <link rel="stylesheet" href="<NODE_MODULES_FOLDER>/react-responsive-carousel/lib/styles/carousel.min.css"/>