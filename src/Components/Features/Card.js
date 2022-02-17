import React from 'react';

const Card = (props) => {
    const { image, title, desc } = props.val;
    return (
        <>
            <div className="box btn_shadow">
                <img src={image} alt="" />
                <h2>{title}</h2>
                <p>{desc}</p>
                <a href='#popup'>
                    <i className="fas fa-arrow-right"></i>
                </a>
            </div>
        </>
    );
};

export default Card;