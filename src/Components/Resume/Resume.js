import React, { useEffect, useState } from 'react';
import Card from './Card';
import './Resume.css';


const Resume = () => {
    const [resume, setResume] = useState([]);

    useEffect(() => {
        fetch('./resume-data.json')
            .then(res => res.json())
            .then(data => setResume(data));
    }, []);

    return (
        <>
            <section className="resume" id="resume">
                <div className="container top">
                    <div className="heading text-center">
                        <h4>+1 YEARS OF EXPERIENCE</h4>
                        <h1>My Resume</h1>
                    </div>
                    <div className="content-section mtop d_flex">
                        <div className="left">
                            <div className="heading">
                                <h4>2020-2022</h4>
                                <h1>Eduaction Qualifications</h1>
                            </div>
                            <div className="content">
                                {resume.map((value, id) => {
                                    if (value.category === 'education')
                                        return <Card
                                            key={id}
                                            val={value}
                                        ></Card>
                                })}
                            </div>
                        </div>
                        <div className="left">
                            <div className="heading">
                                <h4>2020-2022</h4>
                                <h1>Job Experience</h1>
                            </div>
                            <div className="content">
                                {resume.map((value, id) => {
                                    if (value.category === 'experience')
                                        return <Card
                                            key={id}
                                            val={value}
                                        ></Card>
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Resume;