import React from 'react'
import './services.css'

const Services = () => {
    return (
        <div>
            <h1 className='servicesHeading'>These are the services + price!</h1>
            <div>
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
        </div>
    );
};

export default Services;