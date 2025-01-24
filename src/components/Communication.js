import {ReactComponent as Email} from '../assets/email-icon.svg'
import {ReactComponent as Phone} from '../assets/phone-icon.svg'
import {ReactComponent as Location} from '../assets/location-icon.svg'

function Communication () {
    return(
        <section className="communication-section" id='contact-section'>
            <div className="container">
            <h2 className="communication-section__title">contacts</h2>
                <div className='communication-section__container'>
                        <div className='communication-section__contact-info'>
                        <h3>Strategic Engineering Alliance</h3>
                        <address>
                            <a href="mailto:o.chuiev@sealliance.pro"><Email /> o.chuiev@sealliance.pro</a>
                            <a href="tel:+380964506441"><Phone /> +380 (96) 450 64 41</a>
                            <a
                                href="https://maps.app.goo.gl/UhVYwqkPNEtkF1Mr7"
                                rel="noopener noreferrer"
                                target="_blank"
                            >
                                <Location /> Kyiv, Kostiantynivska Str. 15a, office 4-2
                            </a>
                        </address>
                        </div>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d377.52380600678003!2d30.512834880787743!3d50.4659193987729!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4ce6ae2700001%3A0xe049ca5f1d5e5f32!2z0LLRg9C70LjRhtGPINCa0L7RgdGC0Y_QvdGC0LjQvdGW0LLRgdGM0LrQsCwgMTVhLCDQmtC40ZfQsiwgMDIwMDA!5e0!3m2!1suk!2sua!4v1737649790467!5m2!1suk!2sua"
                        width="424"
                        height="254"
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="Google Maps location for Strategic Engineering Alliance"
                    ></iframe>
                    </div>
                    </div>
        </section>
    )
}

export default Communication