import React from "react";
import './footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle, faInstagram, faXTwitter} from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    return (
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
            </div>

            <div className="contactInfo">
                <h3>CONTACT US</h3>
            </div>
            
            
        </div>

    );
};

export default Footer;