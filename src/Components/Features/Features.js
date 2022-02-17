import React, { useEffect, useState } from 'react';
import Card from './Card';
import './Features.css';

const Features = () => {

    const [cardData, setCardData] = useState([]);

    useEffect(() => {
        fetch('./app-data.json')
            .then(res => res.json())
            .then(data => setCardData(data))
    }, []);


    return (
        <>
            <section className="features top" id="features">
                <div className="container">
                    <div className="heading">
                        <h4>Features</h4>
                        <h1>What I do</h1>
                    </div>
                    <div className="content grid">
                        {
                            cardData.map((val, index) => {
                                return <Card
                                    key={index}
                                    val={val}
                                ></Card>
                            })
                        }
                    </div>
                </div>
            </section>
        </>
    );
};

export default Features;