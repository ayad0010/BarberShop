import React from 'react'
import './home.css';
import barberBg from '../Images/barber-background.jpg';
import Navbar from '../Navbar';
const Home = () => {
    const bookingClick = () => {
        alert('Booking click!');
    }

    return (
        <div className="HomeScreenText">
            <h3>STAY SHARP, LOOK GOOD</h3>
            <h1>NYC'S FAVOURITE <br />BARBER SHOP</h1>
            <h3>DIAGON ALLEY, NYC. APPOINTMENT:999 000 8888</h3>
            <button onClick={bookingClick}>
                Book Appointment
            </button>
        </div>
    );
};

export default Home;