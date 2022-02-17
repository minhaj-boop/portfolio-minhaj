import React, { useEffect, useState } from 'react';
import Card from '../Portfolio/Card';
import './Portfolio.css';
const Portfolio = () => {

    const [portfolio, setPortfolio] = useState([]);

    useEffect(() => {
        fetch('./portfolio-data.json')
            .then(res => res.json())
            .then(data => setPortfolio(data))
    }, [])


    return (
        <>
            <section className="portfolio top" id="portfolio">
                <div className="container">
                    <div className="heading text-center">
                        <h4>VISIT MY PORTFOLIO AND GIVE YOUR FEEDBACK</h4>
                        <h1>My Portfolio</h1>
                    </div>
                    <div className="content grid">
                        {portfolio.map((value, index) => {
                            return <Card
                                key={index}
                                val={value}
                            ></Card>
                        })}
                    </div>
                </div>
            </section>
        </>
    );
};

export default Portfolio;