import React from 'react';
import './Footer.css'; // Footer ile ilgili stilleri buradan bağlayın

const Footer = () => {
    return (

        <footer className="footer">
            <div className="footer-container">

                <div className="footer-section">
                    <img src="../images/iteration-1-images/logo.svg" alt="" />
                    <p>
                        <img src="../images/iteration-2-images/footer/icons/icon-1.png" alt="Location Icon" />
                        341 Londonderry Road, Istanbul Türkiye<br />

                        <img src="../images/iteration-2-images/footer/icons/icon-2.png" alt="Email Icon" />
                        <a href="mailto:aciktim@teknolojikyemekler.com">aciktim@teknolojikyemekler.com</a><br />

                        <img src="../images/iteration-2-images/footer/icons/icon-3.png" alt="Phone Icon" />
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
                        <img src="../images/iteration-2-images/footer/insta/li-0.png" alt="" />
                        <img src="../images/iteration-2-images/footer/insta/li-1.png" alt="" />
                        <img src="../images/iteration-2-images/footer/insta/li-2.png" alt="" />
                        <img src="../images/iteration-2-images/footer/insta/li-3.png" alt="" />
                        <img src="../images/iteration-2-images/footer/insta/li-4.png" alt="" />
                        <img src="../images/iteration-2-images/footer/insta/li-5.png" alt="" />
                    </div>
                </div>
            </div>
        </footer>

    )
}

export default Footer;
