import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-content container">
                <div className="aboutus">
                    <div className="footer-logo">
                        <img src='' alt="" />
                    </div>
                    <div className="about-content">
                        <p>
                            Prescription Sunglasses tailored to your needs. Explore our online selection of prescription sunglasses and find your perfect match with the new Sunglass Hut service, online only. Prescription Sunglasses tailored to your needs. Prescription Sunglasses tailored to your needs. Explore our online selection of prescription sunglasses and find your perfect match with the new Sunglass Hut service, online only. Prescription Sunglasses tailored to your needs.
                        </p>
                    </div>
                    <div className="icons">
                        <a href="#"><i className="fab fa-facebook-f"></i></a>
                        <a href="#"><i className="fab fa-youtube"></i></a>
                        <a href="#"><i className="fab fa-twitter"></i></a>
                        <a href="#"><i className="fab fa-instagram"></i></a>
                        <a href="#"><i className="fab fa-linkedin-in"></i></a>
                        <a href="#"><i className="fab fa-dribbble"></i></a>
                    </div>
                </div>
            </div>
            <div className="copyright-text">
                <p>Copyright © 2021 BD TOUR Rights Reserved.</p>
            </div>
        </div>
    );
};

export default Footer;