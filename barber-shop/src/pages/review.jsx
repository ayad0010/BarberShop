import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './review.css'

const reviews = ["I love it!", "UGHHH", "Pricccy $$$$"];

export default function ReviewCarousel() {
  return (
    <div className="Reviews">
      <h2>Client Reviews</h2>

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
              <p>{text}</p>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
}