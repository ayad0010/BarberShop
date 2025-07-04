import React from 'react'
import './home.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleArrowDown, faScissors, faSprayCanSparkles } from '@fortawesome/free-solid-svg-icons';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import ReviewCarousel from './review';

import BarberMap from './map';

import barberImg from '../Images/barber-window.png';
import barberMan from '../Images/intro.png';

import hairDyeIcon from '../Images/hair colour.png';


const Home = () => {
    const bookingClick = () => {
        alert('Booking click!');
    }

    return (
        <div>
            <div className="HomeScreenText">
            <h3>FOR A MAGICAL HAIRCUT</h3>
            <h1 className='barberShopName'>THE DIAGON ALLEY <br />BARBER SHOP</h1>
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
                <div className='img-text'>
                <img src={barberMan} alt="Barber who is owner" className='barberOwner'/>
                <p>Welcome to The Barber Shop! My name is Harry Poter and I'm the owner and head hair stylist at The 
                    Barber Shop. It was founded in 1943 my granderparents who had a vision for stylish haircuts. 
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
                    labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
                    nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit 
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in 
                    culpa qui officia deserunt mollit anim id est laborum.
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
                    labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
                    nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit 
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in 
                    culpa qui officia deserunt mollit anim id est laborum.
                    <h3 className='ownerName'>Harry Potter</h3>
                    <p>Owner & Head Stylist</p>
                </p>
                </div>
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

                <div className='servicesIcon'>
                    <img src={hairDyeIcon} alt="Hair Dye icon" className='hairDye'/>
                    <img src={hairDyeIcon} alt="Hair Dye icon" className='hairDye2'/>
                    <img src={hairDyeIcon} alt="Hair Dye icon" className='hairDye3'/>
                    <img src={hairDyeIcon} alt="Hair Dye icon" className='hairDye4'/>

                </div>

             </div>
            <div className="second-heading">
                <h2>Come Visit Us</h2>

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