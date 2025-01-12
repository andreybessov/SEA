import React, { useRef, useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";

function Contact() {
        const nameRef = useRef();
        const numberRef = useRef();
        const roleRef = useRef();
        const messageRef = useRef();
        const emailRef = useRef();
        const optionalRef = useRef();
        const interestRef = useRef();
        const [captchaToken, setCaptchaToken] = useState(null)

        const handleCaptchaChange = (token) => {
            setCaptchaToken(token); // Сохраняем токен, сгенерированный reCAPTCHA
        };

    const handleSubmit = async (event) => {
        event.preventDefault();
        const form = event.target;

        if (!captchaToken) {
            alert("Пожалуйста, подтвердите капчу.");
            return;
        }
    
        try {
            const formData = new FormData(form);
            formData.append("g-recaptcha-response", captchaToken)

            const response = await fetch(form.action, {
                method: "POST",
                body: formData,
            });
    
            const result = await response.json();
            if (result.status === "success") {
                alert('Form successfully submitted!');
                setCaptchaToken(null);
            } else {
                console.error("Ошибка сервера:", result.message);
            }
        } catch (error) {
            console.error("Ошибка сети:", error);
        }

        nameRef.current.value = "";
        numberRef.current.value = "";
        emailRef.current.value = "";
        roleRef.current.value = "";
        optionalRef.current.value = "";
        interestRef.current.value = "";
        messageRef.current.value = "";
    };

    return(
        <section className="contact-section">
            <div className="container">
                <h2 className="contact-section__title">contacts</h2>
                <div className="contact-section__contact-block">
                        <div className="contact-section__content-block">
                        <h2>Strategic Engineering Alliance</h2>
                        <address>
                            <a href="mailto:sea_company@gmail.com">sea_company@gmail.com</a>
                            <a href="tel:+380509808871">+380509808871</a>
                            <a href="https://maps.app.goo.gl/KfgFZRwWy149vhBs6" rel="noopener noreferrer" target="_blank">Kyiv, Mykilska St. 10, office 240</a>
                        </address>
                        </div>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1270.0158310489926!2d30.58253839300983!3d50.45913508793883!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4cfa66076e9b3%3A0x27fd4f5c0cc3db9d!2z0J3QvtCy0LAg0J_QvtGI0YLQsC4g0J_QvtGI0YLQvtC80LDRgiDihJYzMTk3OSAo0LTQviAyMCDQutCzKSDQvC4g0JrQuNGX0LIsINCa0LjRl9Cy0YHRjNC60LAg0L7QsdC70LDRgdGC0Yw!5e0!3m2!1suk!2sua!4v1736587118894!5m2!1suk!2sua" 
                        width="600" 
                        height="450"  
                        allowFullScreen="" 
                        loading="lazy" 
                        referrerPolicy="no-referrer-when-downgrade"
                        title="Google Maps location for Strategic Engineering Alliance">
                            
                    </iframe>
                    </div>
                    <h2 className="contact-section__form-title">Together, We Build the Future!</h2>
                    <form className="contact-section__form" autoComplete='off' onSubmit={handleSubmit} action='https://script.google.com/macros/s/AKfycby9MoFFhW2js2CgWDmdV9JB5-ns9c_D3dGzU4js59JTUV-4uTgM64URFtt3bSg6luWP/exec' method="POST">
                    <div className="contact-section__form-container">
                        <div className="contact-section__form-block">
                            <label className="" htmlFor="user-name" >Full name</label>
                            <input ref={nameRef} className="contact-section__input" name="user-name" id="user-name" type="text" placeholder="Your first and last name"></input>

                            <label className="" htmlFor="user-number" >Phone number</label>
                            <input ref={numberRef} className="contact-section__input" name="user-number" id="user-number" type="tel" placeholder="+"></input>

                            <label className="" htmlFor="user-role" >Role</label>
                            <input ref={roleRef} className="contact-section__input" name="user-role" id="user-role" type="text" placeholder="Choose your role"></input>

                            <label className="" htmlFor="user-message" >Massage (optional)</label>
                            <input ref={messageRef} className="contact-section__input" name="user-message" id="user-message" type="text" placeholder="Write down your message"></input>
                        </div>
                        <div className="contact-section__form-block">
                            <label className="" htmlFor="user-optional" >Organization name (optional)</label>
                            <input ref={optionalRef}  className="contact-section__input" name="user-optional" id="user-optional" type="text" placeholder="Your organization/company name"></input>

                            <label className="" htmlFor="user-email" >Email address</label>
                            <input ref={emailRef} className="contact-section__input" name="user-email" id="user-email" type="email" placeholder="Your email"></input>

                            <label className="" htmlFor="user-interest" >Interest area</label>
                            <input ref={interestRef} className="contact-section__input" name="user-interest" id="user-interest" type="text" placeholder="Choose your area"></input>
                        </div>
                        </div>
                        <ReCAPTCHA
                        sitekey={'6Lc8KrUqAAAAAKm4JJuQPm8yk35hM12mMc2D5r8b'} // Замените на ваш Site Key
                        onChange={handleCaptchaChange}
                        />
                        <div className="contact-section__button">
                        <button type="submit">Send form</button>
                        </div>
                    </form>
                </div>
        </section>
    )
}

export default Contact