import React from 'react';

const Slider = (props) => {
    const { design, name, offcer, post, date, desc } = props.val;
    return (
        <>
            <article className='box d_flex'>
                <div className="left box_shadow">
                    <div className="img">
                        <img src="" alt="" />
                    </div>
                    <div className="details mtop">
                        <span>{design}</span>
                        <h2>{name}</h2>
                        <label>{offcer}</label>
                    </div>
                </div>

                <div className="right">
                    <div className="icon">
                        <div className="quote">
                            <i className="fal fa-quote-right"></i>
                        </div>
                    </div>

                    <div className="content box_shadow mtop">
                        <h1>{post}</h1>
                        <h3>{date}</h3>
                        <p>{desc}</p>
                    </div>
                </div>
            </article>
        </>
    );
};

export default Slider;