import React from 'react';
import './Footer.css';
import logo from '/images/iteration-1-images/logo.svg';
import icon1 from '/images/iteration-2-images/footer/icons/icon-1.png';
import icon2 from '/images/iteration-2-images/footer/icons/icon-2.png';
import icon3 from '/images/iteration-2-images/footer/icons/icon-3.png';

import insta0 from '/images/iteration-2-images/footer/insta/li-0.png';
import insta1 from '/images/iteration-2-images/footer/insta/li-1.png';
import insta2 from '/images/iteration-2-images/footer/insta/li-2.png';
import insta3 from '/images/iteration-2-images/footer/insta/li-3.png';
import insta4 from '/images/iteration-2-images/footer/insta/li-4.png';
import insta5 from '/images/iteration-2-images/footer/insta/li-5.png';

const Footer = () => {
    return (

        <footer className="footer">
            <div className="footer-container">

                <div className="footer-section">
                    <img src={logo} alt="" />
                    <p>
                        <img src={icon1} alt="Location Icon" />
                        341 Londonderry Road, Istanbul Türkiye<br />

                        <img src={icon2} alt="Email Icon" />
                        <a href="mailto:aciktim@teknolojikyemekler.com">aciktim@teknolojikyemekler.com</a><br />

                        <img src={icon3} alt="Phone Icon" />
                        <a href="tel:+902161234567">+90 216 123 45 67</a>
                    </p>

                </div>


                <div className="footer-section">
                    <h3>Hot Menu</h3>
                    <ul>
                        <li>Terminal Pizza</li>
                        <li>5 Kişilik Hackathon Pizza</li>
                        <li>useEffect Tavuklu Pizza</li>
                        <li>Beyaz Console Frosty</li>
                        <li>Testler Geçti Mutlu Burger</li>
                        <li>Position Absolute Acı Burger</li>
                    </ul>
                </div>


                <div className="footer-section">
                    <h3>Instagram</h3>
                    <div className="instagram-grid">
                        <img src={insta0} alt="" />
                        <img src={insta1} alt="" />
                        <img src={insta2} alt="" />
                        <img src={insta3} alt="" />
                        <img src={insta4} alt="" />
                        <img src={insta5} alt="" />
                    </div>
                </div>
            </div>
        </footer>

    )
}

export default Footer;
