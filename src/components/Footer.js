import Logo from '../assets/footer-logo.png'
import {ReactComponent as Linkedin} from '../assets/linkedin-icon.svg'
import {ReactComponent as FacebookIcon} from '../assets/facebook-icon.svg'

function Footer () {
    return(
        <section className="footer">
            <div className="container">
                <div className="footer__container">
                    <div className="footer__link-container">
                        <div className="footer__about-block">
                            <h3><a href="#about-section">About Us</a></h3>
                            <a href="#initiators-section">Who we are</a>
                            <a href="#">Our Focus Areas</a>
                        </div>
                        <div className="footer__quick-block">
                            <h3>Quick Links</h3>
                            <a href="#partners-section">Inspired by</a>
                            <a href="#contact-form">Contact Us</a>
                        </div>
                    </div>
                    <img className='footer__logo' src={Logo} alt='logo'></img>
                </div>
                <div className='footer__social-block'>
                    <p>© 2025 Strategic Engineering Alliance. All Rights Reserved</p>
                    <div className='footer__social-link'>
                    <a href='https://www.linkedin.com/in/oleksii-chuiev-ua' target='_blank' rel="noopener noreferrer"><Linkedin /></a>
                    <a href='https://www.facebook.com/' target='_blank' rel="noopener noreferrer"> <FacebookIcon /></a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Footer;