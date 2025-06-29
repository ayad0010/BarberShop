import React from 'react'
import './home.css';
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
            </div>

            <div className="Welcome">
                <h2>Welcome to The Barber Shop!</h2>
            </div>

            <div className="Services">
                <h2>Services</h2>
            </div>

            <div className="Opening-Hours">
                <h2>Opeming Hours</h2>
            </div>

            <div className="Reviews">
                <h2>Client Reviews</h2>
            </div>

            <div className="Gallery">
                <h2>Gallery</h2>
            </div>

            <div className="News">
                <h2>News</h2>
            </div>

            <div className="Footer">
                <h2>Footer</h2>
            </div>

        </div>
        
    );
};

export default Home;