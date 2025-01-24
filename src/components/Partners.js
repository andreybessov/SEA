import LogoP1 from '../assets/parters-logo-1.png'
import LogoP2 from '../assets/parters-logo-2.png'
import LogoP3 from '../assets/parters-logo-3.png'
import LogoP4 from '../assets/parters-logo-4.png'

function Partners() {
    return(
        <section className="partners-section">
            <div className="container">
                <h2 className="partners-section__title">inspired by</h2>
                <div className="partners-section__partners-link">
                    <a href=' https://www.same.org/' rel="noopener" target='_blank'><img src={LogoP1} alt='same-logo'></img></a>
                    <a href='https://www.spk.usace.army.mil/ ' rel="noopener" target='_blank'><img src={LogoP2} alt='spk-logo'></img></a>
                    <a href='https://ssts.team/en/' rel="noopener" target='_blank'><img src={LogoP3} alt='ssts-logo'></img></a>
                    <a href='https://stability-operations.org/' rel="noopener" target='_blank'><img src={LogoP4} alt='stability-logo'></img></a>
                </div>
            </div>
        </section>
    )
}

export default Partners