
function AboutUs() {
    return(
        <section className="about-section">
            <div className="container">
            <h2 className="about-section__title">About us</h2>
            <p className="about-section__text"><span>strategic engineering alliance</span> is a platform for collaboration between bussinesses, 
            government institutions, and the public to create innovative solutions in infrastructure</p>
            <div className="about-section__list-container">
            <h3 className="about-section__list-title">core values:</h3>
            <ul className="about-section__list">
                <li>Innovation</li>
                <li>Transparency</li>
                <li>Parnership</li>
            </ul>
            <button className="about-section__button"><a href="#">
            Learn more about us &gt;
            </a></button>
            </div>
            </div>
        </section>
    )
}

export default AboutUs;