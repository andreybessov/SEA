import Logo from '../assets/hero-logo.png';


function Header() {
    return(
        <header className='header'>
            <div className='container'>
            <div className="header__nav">
            <a className='header__logo' href='#'><img src={Logo} alt="logo"></img></a>
            <ul className="header__menu">
                <li>
                    <a  href="#">Home</a>
                </li>
                <li>
                    <a  href="#about-section">About</a>
                </li>
                <li>
                    <a  href="#contact-section">Contacts</a>
                </li>
            </ul>
            <a className="header__button" href='#contact-form'>Join Us</a>
            </div>
            </div>
        </header>
    )
}

export default Header;