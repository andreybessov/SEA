import Logo from '../assets/hero-logo.png';


function Header() {
    return(
        <header className='header'>
            <div className='container'>
            <div className="header__nav">
            <a className='header__logo' href='#'><img src={Logo} alt="logo"></img></a>
            <ul className="header__menu">
                <li>
                    <a href="#">Main</a>
                </li>
                <li>
                    <a href="#">About</a>
                </li>
                <li>
                    <a href="#">Contacts</a>
                </li>
            </ul>
            <button className="header__button">Join Us</button>
            </div>
            </div>
        </header>
    )
}

export default Header;