import React, { useRef } from "react";

function Contact() {
    const nameRef = useRef();
    const numberRef = useRef();
    const roleRef = useRef();
    const messageRef = useRef();
    const emailRef = useRef();
    const optionalRef = useRef();
    const interestRef = useRef();

    const handleSubmit = async (event) => {
        event.preventDefault();
        const form = event.target;

        try {
            const formData = new FormData(form);

            const response = await fetch(form.action, {
                method: "POST",
                body: formData,
            });

            const result = await response.json();
            if (result.status === "success") {
                alert("Form successfully submitted!");
            } else {
                console.error("Server error:", result.message);
            }
        } catch (error) {
            console.error("Network error:", error);
        }

        nameRef.current.value = "";
        numberRef.current.value = "";
        emailRef.current.value = "";
        roleRef.current.value = "";
        optionalRef.current.value = "";
        interestRef.current.value = "";
        messageRef.current.value = "";
    };

    return (
        <section className="contact-section">
            <div className="container">
                <h2 className="contact-section__form-title">Together, We Build the Future!</h2>
                <form
                    className="contact-section__form"
                    autoComplete="off"
                    onSubmit={handleSubmit}
                    action="https://script.google.com/macros/s/AKfycby9MoFFhW2js2CgWDmdV9JB5-ns9c_D3dGzU4js59JTUV-4uTgM64URFtt3bSg6luWP/exec"
                    method="POST"
                >
                    <div className="contact-section__form-container">
                        <div className="contact-section__form-block">
                            <label htmlFor="user-name">Full name</label>
                            <input
                                ref={nameRef}
                                className="contact-section__input"
                                name="user-name"
                                id="user-name"
                                type="text"
                                placeholder="Your first and last name"
                            ></input>

                            <label htmlFor="user-number">Phone number</label>
                            <input
                                ref={numberRef}
                                className="contact-section__input"
                                name="user-number"
                                id="user-number"
                                type="tel"
                                placeholder="+"
                            ></input>

                            <label htmlFor="user-role">Role</label>
                            <input
                                ref={roleRef}
                                className="contact-section__input"
                                name="user-role"
                                id="user-role"
                                type="text"
                                placeholder="Choose your role"
                            ></input>

                            <label htmlFor="user-message">Message (optional)</label>
                            <input
                                ref={messageRef}
                                className="contact-section__input"
                                name="user-message"
                                id="user-message"
                                type="text"
                                placeholder="Write down your message"
                            ></input>
                        </div>
                        <div className="contact-section__form-block">
                            <label htmlFor="user-optional">Organization name (optional)</label>
                            <input
                                ref={optionalRef}
                                className="contact-section__input"
                                name="user-optional"
                                id="user-optional"
                                type="text"
                                placeholder="Your organization/company name"
                            ></input>

                            <label htmlFor="user-email">Email address</label>
                            <input
                                ref={emailRef}
                                className="contact-section__input"
                                name="user-email"
                                id="user-email"
                                type="email"
                                placeholder="Your email"
                            ></input>

                            <label htmlFor="user-interest">Interest area</label>
                            <input
                                ref={interestRef}
                                className="contact-section__input"
                                name="user-interest"
                                id="user-interest"
                                type="text"
                                placeholder="Choose your area"
                            ></input>
                        </div>
                    </div>
                    <div className="contact-section__button">
                        <button type="submit">Send form</button>
                    </div>
                </form>
            </div>
        </section>
    );
}

export default Contact;
