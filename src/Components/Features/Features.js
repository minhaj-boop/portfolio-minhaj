import React from 'react';
import './Features.css';

const Features = () => {
    return (
        <>
            <section className="features top" id="features">
                <div className="container">
                    <div className="heading">
                        <h4>Features</h4>
                        <h1>What I do</h1>
                    </div>
                    <div className="content grid">
                        <div className="box btn_shadow">
                            <img src="" alt="" />
                            <h2>Title</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio, repellat rerum. Ea ab cum distinctio illo ratione, nulla consequatur, laudantium impedit tenetur alias recusandae ad, et rerum necessitatibus libero. At.</p>
                            <a href=''>
                                <i className="fas fa-arrow-right"></i>
                            </a>
                        </div>
                        <div className="box btn_shadow">
                            <img src="" alt="" />
                            <h2>Title</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio, repellat rerum. Ea ab cum distinctio illo ratione, nulla consequatur, laudantium impedit tenetur alias recusandae ad, et rerum necessitatibus libero. At.</p>
                            <a href=''>
                                <i className="fas fa-arrow-right"></i>
                            </a>
                        </div>
                        <div className="box btn_shadow">
                            <img src="" alt="" />
                            <h2>Title</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio, repellat rerum. Ea ab cum distinctio illo ratione, nulla consequatur, laudantium impedit tenetur alias recusandae ad, et rerum necessitatibus libero. At.</p>
                            <a href=''>
                                <i className="fas fa-arrow-right"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Features;