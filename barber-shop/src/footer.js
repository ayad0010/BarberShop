import React from "react";
import './footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle, faInstagram, faXTwitter} from '@fortawesome/free-brands-svg-icons';
import { faPhone, faEnvelope} from '@fortawesome/free-solid-svg-icons';
import { faCopyright } from '@fortawesome/free-regular-svg-icons';

const Footer = () => {
    return (
        <div> 
            <div className="footer">
                <div className="SocialMediaInfo">
                    <h3>CONNECT WITH US</h3>
                    <div className="icons">
                        <FontAwesomeIcon icon={faGoogle} />
                        <FontAwesomeIcon icon={faXTwitter} />
                        <FontAwesomeIcon icon={faInstagram} />
                    </div>
                </div>

                <div className="address">
                    <h3>VISIT US</h3>
                    <p>934 Diagon Alley</p>
                    <p>Bristol, NYC, 3000</p>
                </div>

                <div className="contactInfo">
                    <h3>CONTACT US</h3>
                    <div className="phone">
                        <FontAwesomeIcon icon={faPhone} className="phone-icon" />
                        <p>(95)1234 5678</p>
                    </div>

                    <div className="mail">
                        <FontAwesomeIcon icon={faEnvelope} className="mail-icon"/>
                        <p>barber@diagonalley.com</p>
                    </div>
                    
                </div>
            
            </div>

            <div className="copyright-statement">
                <p>Copyright</p>
                <FontAwesomeIcon icon={faCopyright} className="copyright-icon"/>
                <p>2025 Diagon Alley Babrber Shop</p>
            </div>

        </div>
        

    );
};

export default Footer;