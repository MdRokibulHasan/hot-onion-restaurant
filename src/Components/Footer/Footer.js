import React from 'react';
import logo1 from '../../images/logo.png';
import './Footer.css';

const Footer = () => {
    return (
        <div className="footer">
            <div className="top m-5">
                <div className="image">
                    <img src={logo1} alt="" />
                </div>
                <div className="text " >
                    <div>
                        <p>About Online Food</p>
                        <br />
                        <p>Read Our Blog</p>
                        <br />
                        <p>Sign up to deliver</p>
                        <br />
                        <p>Add your Restaurant</p>
                    </div>
                    <div className="ps-5">
                        <p>Get Help</p>
                        <br />
                        <p>Read FAQs</p>
                        <br />
                        <p>View all cities</p>
                        <br />
                        <p>Restaurants near me</p>
                    </div>
                </div>
            </div>
            <div className="copyright">
                <div>
                    <p>Copyright @2021 Online food</p>
                </div>
                <div className="policy">
                    <div>
                        <p>Privacy Policy</p>
                    </div>
                    <div>
                        <p>Terms of Use</p>
                    </div>
                    <div>
                        <p>Pricing</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;