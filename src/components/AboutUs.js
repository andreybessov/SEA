import {ReactComponent as Arrow} from '../assets/chevron-right.svg'


function AboutUs() {
    return(
        <section className="about-section">
            <div className="container">
            <h2 className="about-section__title">About us</h2>
            <p className="about-section__text"><span>strategic engineering alliance</span> is a platform for collaboration between businesses, 
            government institutions, and theThe Strategic Engineering Alliance (SEA) is a collaborative network of military engineers and private engineering firms from Ukraine, 
            working alongside strategic partners from the United States, the United Kingdom, and other European nations to address the latest threats posed by russian aggression.
             The SEA focuses on developing long-term Strategies, implementing practical engineering solutions capable of ensuring the safety of civil society and forming partnership Alliances on the basis of the New Marshall Plan win-win-win. 
             </p>
            <h3 className="about-section__title">What is the GOAL of the SEA?</h3>
            <p className="about-section__text">The main purpose of the SEA is to ensure reliable protection of Ukraine together with our international Partners
            in order to prevent the repetition of russian aggression against Europe in the future.</p>
            <a className='about-section__button' href="#">
            Learn more about us <Arrow />
            </a>
            </div>
        </section>
    )
}

export default AboutUs;