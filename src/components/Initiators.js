import heroImg from '../assets/initiators-img.jpg'
import heroImgTablet from '../assets/initiators-img-tablet.jpg'
import heroImgMobile from '../assets/iniators-img-mobile.png'
import {ReactComponent as Arrow} from '../assets/chevron-right.svg'

function Initiators () {
    return(
    <section className="initiators-section" id='initiators-section'>
        <div className="container">
        <h2 className="initiators-section__title">Who are the initiators?</h2>
        <div className="initiators-section__container">
            <img className='initiators-section__img' src={heroImg} alt='initiators-img'></img>
            <img className='initiators-section__img-tablet' src={heroImgTablet} alt='initiators-img-tablet'></img>
            <div className='initiators-section__text'>
                <p>The SEA was founded by a group of Ukrainian military engineers, specialists in public administration and business. 
                    The founders combined many years of personal experience together with their good reputation. <a className='initiators-section__text-link' target='_blank' rel="noopener noreferrer" href='https://www.linkedin.com/in/oleksii-chuiev-ua'>Oleksii Chuiev</a>,
                    an Associate of the Reputation Institute (The RepTrak Company) in Ukraine since 2007, co-founder of the BUSINESS100 community,
                    veteran, engineer, advisor to the Head of the State Special Transport Service of the Ministry of Defense of Ukraine, 
                    was elected as the SEA Chairman for the next two years.
                </p>
                <img className='initiators-section__img-mobile' src={heroImgMobile} alt='initiators-img-mobile'></img>
                <button className='initiators-section__button' type='button'>
                    <a className='initiators-section__link' href='#'>Schedule a personal or online meeting<Arrow /></a>
                    <a className='initiators-section__link-mobile' href='#'>Learn more about us<Arrow /></a>
                </button>
            </div>
        </div>
        </div>
    </section>
    )
}

export default Initiators;