import {ReactComponent as Arrow} from '../assets/chevron-right.svg'

function KeyAreas() {
    return(
        <section className="key-section">
            <div className="container">
                <div className="key-section__container">
                    <div className="key-section__text-block">
                        <h2>importance of Cooperation</h2>
                        <p>The Alliance operates based on transparency, partnerships between business and government,
                         adherence to international standards, and efficient resource management. </p>
                    </div>
                    <div className="key-section__button-info-block">
                        <button className="key-section__info-button">Practical experience in modern wartime conditions <Arrow /></button>
                        <button className="key-section__info-button">Focus on engineering solutions <Arrow /></button>
                        <button className="key-section__info-button">Strengthening international security <Arrow /></button>
                        <button className="key-section__info-button">Unique experience for international partners <Arrow /></button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default KeyAreas