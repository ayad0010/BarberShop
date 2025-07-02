import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './review.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle} from '@fortawesome/free-brands-svg-icons';

const reviews = ["I love it!", "UGHHH", "Pricccy $$$$"];

export default function ReviewCarousel() {
  return (
    <div className="Reviews">
      <div className="review-carousel-wrapper">
        <Carousel
          autoPlay
          interval={5000}
          infiniteLoop
          showArrows={false}
          showStatus={false}
          showThumbs={false}
          showIndicators
          swipeable
          emulateTouch
        >
          {reviews.map((text, index) => (
            <div key={index} className="review-slide">
              <p className='review-position'>{text}</p>
              
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
}