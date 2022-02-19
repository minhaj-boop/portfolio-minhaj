import React, { useState } from 'react';
import contact1 from '../../pic/contact.jpg';
import './Contact.css';

const Contact = () => {

    const [data, setData] = useState({
        fullname: "",
        phone: "",
        email: "",
        subject: "",
        message: "",
    })

    const inputEvent = (event) => {
        const { name, value } = event.target;

        setData((preVal) => {
            return {
                ...preVal,
                [name]: value,
            }
        })
    }

    const formSubmit = (event) => {
        event.preventDefault();
        alert('Sorry, this feature is temporarily unavailable. Please email or call for your queries.')
    }

    return (
        <>
            <section className="contact" id="contact">
                <div className="container top">
                    <div className="heading text-center">
                        <h4>CONTACT</h4>
                        <h1>Contact with me</h1>
                    </div>

                    <div className="content d_flex">
                        <div className="left">
                            <div className="box box_shadow">
                                <div className="img">
                                    <img src={contact1} alt="" />
                                </div>
                                <div className="details">
                                    <h1>Mohammed Minhaj</h1>
                                    <p>I am available for freelancing and part-time Full-stack Web-development.</p>
                                    <p>Phone: +88 01626885465</p>
                                    <p>Email: imminhajj@gmail.com</p>
                                    <span>FIND ME</span>
                                    <div className="button f_flex">
                                        <button className="btn_shadow">
                                            <i className="fab fa-facebook-f"></i>
                                        </button>
                                        <button className="btn_shadow">
                                            <i className="fab fa-instagram"></i>
                                        </button>
                                        <button className="btn_shadow">
                                            <i className="fab fa-twitter"></i>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="right box_shadow">
                            <form onSubmit={formSubmit}>
                                <div className="f_flex">
                                    <div className="input row">
                                        <span>YOUR NAME</span>
                                        <input type='text' name='fullname' value={data.fullname} onChange={inputEvent} />
                                    </div>
                                    <div className="input row">
                                        <span>YOUR NUMBER</span>
                                        <input type='phone' name='phone' value={data.phone} onChange={inputEvent} />
                                    </div>
                                </div>
                                <div className="input">
                                    <span>EMAIL</span>
                                    <input type='email' name='email' value={data.email} onChange={inputEvent} />
                                </div>
                                <div className="input">
                                    <span>SUBJECT</span>
                                    <input type='text' name='subject' value={data.subject} onChange={inputEvent} />
                                </div>
                                <div className="input">
                                    <span>YOUR MESSAGE</span>
                                    <textarea cols='30' rows='6' name='message' value={data.message} onChange={inputEvent} />
                                </div>
                                <button className="btn_shadow">
                                    SEND MESSAGE <i className="fa fa-long-arrow-down"></i>
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Contact;