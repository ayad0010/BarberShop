import React from 'react'
import './home.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleArrowDown } from '@fortawesome/free-solid-svg-icons';
import { faGoogle} from '@fortawesome/free-brands-svg-icons';

import 'react-responsive-carousel/lib/styles/carousel.min.css';
import ReviewCarousel from './review';

import BarberMap from './map';

import barberImg from '../Images/barber-window.png';


const Home = () => {
    const bookingClick = () => {
        alert('Booking click!');
    }

    return (
        <div>
            <div className="HomeScreenText">
            <h3>STAY SHARP, LOOK GOOD</h3>
            <h1>NYC'S FAVOURITE <br />BARBER SHOP</h1>
            <h3>DIAGON ALLEY, NYC. APPOINTMENT:999 000 8888</h3>
            <br />

            
            <button onClick={bookingClick}>
                BOOK APPOINTMENT
            </button>
            <br />
            <div className="arrowDown">
                <FontAwesomeIcon icon={faCircleArrowDown} />
            </div>
            
            </div>


            <div className="Welcome">
                <h2>Welcome to The Barber Shop!</h2>
            </div>

             <div className="Services2">
                <h2>Services</h2>
                <div className='services-container'>
                    <div className="services-column">
                        <p>Haircut Only</p>
                        <p>Haircut and Wash</p>
                        <p>Clipper Crew Cut</p>
                        <p>Kid's Trim</p>
                    </div>
                    <div className="prices-column">
                        <p>$49</p>
                        <p>$59</p>
                        <p>$44</p>
                        <p>$43</p>
                    </div>
                    <div className="services-column-2">
                        <p>Hair Colouring</p>
                        <p>Tapper Fade</p>
                        <p>Adult Trim</p>
                        <p>Buzz cut</p>
                        
                    </div>
                    <div className="prices-column-2">
                        <p className="price">$30</p>
                        <p className="price">$25</p>
                        <p className="price">$20</p>
                        <p className="price">$20</p>
                    </div>
                </div>

             </div>
            <div className="second-heading">
                <h2>Opening Hours</h2>

            </div>
            <div className="Opening-Hours">
                
                <div className='parent-container'>
                    <div className='barberMap'>
                        <BarberMap />
                    </div>

                    <div className='barber-window'>
                        
                    </div>

                    <div className='timeInfo'>
                        <div className='time-group'>
                            <p className="day-range">Monday to Friday</p>
                            <p className="time-range1">7:30am - 6pm</p>
                        </div>

                        <div className='time-group'>
                            <p className="day-range">First Saturday of Every Month</p>
                            <p className="time-range2">Closed</p>
                        </div>

                        <div className='time-group'>
                            <p className="day-range">Saturday</p>
                            <p className="time-range3">7:30am - 12pm</p>
                        </div>
                        
                        <div className='time-group'>
                            <p className="day-range">Sunday</p>
                            <p className="time-range4">Closed</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="Reviews">
                <h2>Client Reviews</h2>
                <ReviewCarousel />
            </div>

            <div className="Gallery">
                <h2>Gallery</h2>
                <div className='galleryImages'>
                    <img src={barberImg} alt="Barber at work" />
                    <img src={barberImg} alt="Barber at work" />
                    <img src={barberImg} alt="Barber at work" />
                    <img src={barberImg} alt="Barber at work" />

                </div>

                <div className='galleryImages2'>
                    <img src={barberImg} alt="Barber at work" />
                    <img src={barberImg} alt="Barber at work" />
                    <img src={barberImg} alt="Barber at work" />
                    <img src={barberImg} alt="Barber at work" />

                </div>

                <div className='galleryImages3'>
                    <img src={barberImg} alt="Barber at work" />
                    <img src={barberImg} alt="Barber at work" />
                    <img src={barberImg} alt="Barber at work" />
                    <img src={barberImg} alt="Barber at work" />

                </div>
                
            </div>

            <div className="News">
                <h2>News</h2>
            </div>

        </div>
        
    );
};

export default Home;