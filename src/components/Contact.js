import React, { useRef, useState } from "react";
import { ReactComponent as Arrow } from '../assets/chevron-right.svg';

function Contact() {
    const nameRef = useRef();
    const numberRef = useRef();
    const roleRef = useRef();
    const messageRef = useRef();
    const emailRef = useRef();
    const optionalRef = useRef();
    const interestRef = useRef();

    // Состояние для ошибок
    const [errors, setErrors] = useState({
        name: "",
        number: "",
        email: "",
        optional: "",
        role: "",
        interest: "",
    });

    // Валидация имени (два слова)
    const validateName = (value) => {
        const nameRegex = /^[a-zA-Z]+\s[a-zA-Z]+$/;
        return nameRegex.test(value.trim());
    };

    // Валидация номера телефона (только цифры)
    const validateNumber = (value) => {
        const numberRegex = /^[0-9]+$/;
        return numberRegex.test(value);
    };

    // Проверка выбора значения в select
    const validateSelect = (value) => {
        return value !== "";
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        const form = event.target;

        const nameValue = nameRef.current.value;
        const numberValue = numberRef.current.value;
        const roleValue = roleRef.current.value;
        const interestValue = interestRef.current.value;
        const emailValue = emailRef.current.value;
        const optionalValue = optionalRef.current.value;

        let formIsValid = true;

        // Проверка имени
        if (!validateName(nameValue)) {
            setErrors((prev) => ({ ...prev, name: "Please enter your full name (first and last name)." }));
            formIsValid = false;
        } else {
            setErrors((prev) => ({ ...prev, name: "" }));
        }

        // Проверка номера телефона
        if (!validateNumber(numberValue)) {
            setErrors((prev) => ({ ...prev, number: "Phone number must contain only digits." }));
            formIsValid = false;
        } else {
            setErrors((prev) => ({ ...prev, number: "" }));
        }

        // Проверка селекта "Role"
        if (!validateSelect(roleValue)) {
            setErrors((prev) => ({ ...prev, role: "Please select your role." }));
            formIsValid = false;
        } else {
            setErrors((prev) => ({ ...prev, role: "" }));
        }

        // Проверка селекта "Interest Area"
        if (!validateSelect(interestValue)) {
            setErrors((prev) => ({ ...prev, interest: "Please select your interest area." }));
            formIsValid = false;
        } else {
            setErrors((prev) => ({ ...prev, interest: "" }));
        }

        if (!validateSelect(emailValue)) {
            setErrors((prev) => ({ ...prev, email: "Please enter your email." }));
            formIsValid = false;
        } else {
            setErrors((prev) => ({ ...prev, email: "" }));
        }

        if (!validateSelect(optionalValue)) {
            setErrors((prev) => ({ ...prev, optional: "Please enter your organization name." }));
            formIsValid = false;
        } else {
            setErrors((prev) => ({ ...prev, optional: "" }));
        }

        if (!formIsValid) return;

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

        // Очистка формы
        form.reset();
    };

    return (
        <section className="contact-section">
            <div className="container">
                <h2 className="contact-section__form-title">Schedule a personal or online meeting! Together, We Build the Future!</h2>
                <form
                    className="contact-section__form"
                    id="contact-form"
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
                                className={`contact-section__input ${errors.name ? 'error' : ''}`}
                                name="user-name"
                                id="user-name"
                                type="text"
                                placeholder="Your first and last name"
                            />
                            {errors.name && <p className="contact-section__error">{errors.name}</p>}

                            <label htmlFor="user-number">Phone number</label>
                            <input
                                ref={numberRef}
                                className={`contact-section__input ${errors.number ? 'error' : ''}`}
                                name="user-number"
                                id="user-number"
                                type="tel"
                                placeholder="Your phone number"
                            />
                            {errors.number && <p className="contact-section__error">{errors.number}</p>}

                            <label htmlFor="user-role">Role</label>
                            <div className="contact-section__select-wrapper">
                                <select 
                                    ref={roleRef} 
                                    className={`contact-section__input contact-section__select ${errors.role ? 'error' : ''}`}
                                    name="user-role" 
                                    id="user-role"
                                    defaultValue=""
                                >
                                    <option value="" disabled>Choose your role</option>
                                    <option value="Team Member">Team Member</option>
                                    <option value="Partner">Partner</option>
                                    <option value="Other">Other</option>
                                </select>
                                <Arrow className="contact-section__arrow" />
                            </div>
                            {errors.role && <p className="contact-section__error">{errors.role}</p>}
                        </div>

                        <div className="contact-section__form-block">
                            <label htmlFor="user-optional">Organization name (optional)</label>
                            <input
                                ref={optionalRef}
                                className={`contact-section__input ${errors.optional ? 'error' : ''}`}
                                name="user-optional"
                                id="user-optional"
                                type="text"
                                placeholder="Your organization/company name"
                            />
                            {errors.optional && <p className="contact-section__error">{errors.optional}</p>}

                            <label htmlFor="user-email">Email address</label>
                            <input
                                ref={emailRef}
                                className={`contact-section__input ${errors.email ? 'error' : ''}`}
                                name="user-email"
                                id="user-email"
                                type="email"
                                placeholder="Your email"
                            />
                            {errors.email && <p className="contact-section__error">{errors.email}</p>}

                            <label htmlFor="user-interest">Interest area</label>
                            <div className="contact-section__select-wrapper">
                                <select 
                                    ref={interestRef} 
                                    className={`contact-section__input contact-section__select ${errors.interest ? 'error' : ''}`}
                                    name="user-interest" 
                                    id="user-interest"
                                    defaultValue=""
                                >
                                    <option value="" disabled>Choose your area</option>
                                    <option value="Infrastructure Restoration">Infrastructure Restoration</option>
                                    <option value="Modern Technologies">Modern Technologies</option>
                                    <option value="Resilience to Threats">Resilience to Threats</option>
                                    <option value="Partnerships">Partnerships</option>
                                    <option value="Collaboration">Collaboration</option>
                                    <option value="Other">Other</option>
                                </select>
                                <Arrow className="contact-section__arrow" />
                            </div>
                            {errors.interest && <p className="contact-section__error">{errors.interest}</p>}
                        </div>
                    </div>

                    <div className="contact-section__message-container">
                        <label htmlFor="user-message">Message (optional)</label>
                        <input
                            ref={messageRef}
                            className="contact-section__input"
                            name="user-message"
                            id="user-message"
                            type="text"
                            placeholder="Write down your message"
                        />
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
