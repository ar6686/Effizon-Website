import React, { useState } from 'react';
import './contact.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faInstagram, faWhatsapp, faYoutube } from '@fortawesome/free-brands-svg-icons'
import { faLocationDot, faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons'
import Nav from './nav';
import Footer from './footer';


const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleFocus = (e) => {
        e.target.parentNode.classList.add('focus');
    };

    const handleBlur = (e) => {
        if (!e.target.value) {
            e.target.parentNode.classList.remove('focus');
        }
    };

    const clearForm = () => {
        setFormData({
            name: '',
            email: '',
            phone: '',
            message: '',
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault(); // Prevent default form submission

        // Check if required fields are filled
        if (formData.name && formData.email && formData.message) {
            // If valid, submit the form
            e.target.submit();

            // Clear the form after submission
            clearForm();
        } else {
            // If form is incomplete, alert the user (optional)
            alert('Please fill out all required fields');
        }
    };

    return (
        <>
            <Nav />
            <section className="page" id="contact">
                <div className="contactContainer">
                    <span className="big-circle"></span>
                    <img src="images/shape.png" className="square" alt="" />
                    <div className="form">
                        <div className="contact-info">
                            <h3 className="title">Let's get in touch</h3>
                            <p className="text">
                                Have a project in mind or need help with your online presence? We’re here to assist!
                            </p>

                            <div className="info">
                                <div className="information">
                                    <FontAwesomeIcon icon={faLocationDot} className="icon" />
                                    <p>Gothenburg, Sweden</p>
                                </div>
                                <div className="information">
                                    <FontAwesomeIcon icon={faEnvelope} className="icon" />
                                    <p>contact@effizon.com</p>
                                </div>
                                <div className="information">
                                    <FontAwesomeIcon icon={faPhone} className="icon" />
                                    <p>+46734969910</p>
                                </div>
                            </div>


                            <div className="social-media">
                                <p>Connect with us :</p>
                                <div className="social-icons">
                                    <a href="https://www.facebook.com/people/Effizon/61577688916841/" target="_blank" rel="noopener noreferrer"> <FontAwesomeIcon icon={faFacebookF} /> </a>

                                    <a href="https://www.instagram.com/effizon_official/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faInstagram} /></a>
                                    <a href="https://wa.me/+46734969910" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faWhatsapp} /></a>
                                </div>
                            </div>
                        </div>

                        <div className="contact-form">
                            <span className="circle one"></span>
                            <span className="circle two"></span>

                            <form
                                action="https://api.web3forms.com/submit"
                                method="POST"
                                onSubmit={handleSubmit} // Custom submission handling
                            >
                                {/* <input type="hidden" name="access_key" value="8b83ed44-b647-4e54-b96e-06fb1490ea65" /> */}
                                <input type="hidden" name="access_key" value="54999709-3f2d-46a8-836d-a19d498282a5" />

                                <div className="input-contactContainer">
                                    <input
                                        type="text"
                                        name="name"
                                        className="input"
                                        required
                                        value={formData.name}
                                        onChange={handleChange}
                                        onFocus={handleFocus}
                                        onBlur={handleBlur}
                                    />
                                    <label htmlFor="name">Username</label>
                                    <span>Username</span>
                                </div>

                                <div className="input-contactContainer">
                                    <input
                                        type="email"
                                        name="email"
                                        className="input"
                                        required
                                        value={formData.email}
                                        onChange={handleChange}
                                        onFocus={handleFocus}
                                        onBlur={handleBlur}
                                    />
                                    <label>Email</label>
                                    <span>Email</span>
                                </div>

                                <div className="input-contactContainer">
                                    <input
                                        type="tel"
                                        name="phone"
                                        className="input"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        onFocus={handleFocus}
                                        onBlur={handleBlur}
                                    />
                                    <label>Phone (Optional)</label>
                                    <span>Phone (Optional)</span>
                                </div>

                                <div className="input-contactContainer textarea">
                                    <textarea
                                        name="message"
                                        className="input"
                                        required
                                        value={formData.message}
                                        onChange={handleChange}
                                        onFocus={handleFocus}
                                        onBlur={handleBlur}
                                    ></textarea>
                                    <label>Message</label>
                                    <span>Message</span>
                                </div>

                                <input type="submit" value="Send" className="clear-btn btnCon" />
                            </form>

                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    );
};

export default Contact;
