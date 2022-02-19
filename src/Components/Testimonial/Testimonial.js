import React, { useEffect, useState } from 'react';
import Slider from './Slider';

const Testimonial = () => {

    const [testimonial, setTestimonial] = useState([]);

    useEffect(() => {
        fetch('./testimonial-data.json')
            .then(res => res.json())
            .then(data => setTestimonial(data));
    }, []);

    return (
        <>
            <section className="testimonial" id="clients">
                <div className="container">
                    <div className="heading text-center">
                        <h4>WHAT CLIENTS SAY</h4>
                        <h1>Testimonial</h1>
                    </div>
                    <div className="slide">
                        {
                            testimonial.map((value, index) => {
                                return <Slider
                                    key={index}
                                    val={value}
                                ></Slider>
                            })
                        }
                        <div className="slide_button">
                            <button className='btn_shadow prev_btn'>
                                <i className="fas fa-arrow-left"></i>
                            </button>
                            <button className='btn_shadow next_btn'>
                                <i className="fas fa-arrow-right"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Testimonial;