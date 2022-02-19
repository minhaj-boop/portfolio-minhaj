import React from 'react';
import './Home.css';
import hero from '../../pic/hero.png';
import skill1 from '../../pic/skill1.png';
import skill2 from '../../pic/skill2.png';
import skill3 from '../../pic/skill3.png';
import { Typewriter } from 'react-simple-typewriter'


const Home = () => {
    return (
        <>
            <section className="hero" id="home">
                <div className="container f_flex top">
                    <div className="left top">
                        <h3>Welcome to my world</h3>
                        <h1>Hi I'm <span>Minhaj</span></h1>
                        <h2>
                            A {""}
                            <span>
                                <Typewriter
                                    words={['Coder', 'Developer', 'Traveller']}
                                    loop
                                    cursor
                                    cursorStyle='|'
                                    typeSpeed={70}
                                    deleteSpeed={50}
                                    delaySpeed={1000}
                                />
                            </span>
                        </h2>
                        <p>I fear that I will always be <br />
                            A lonely number like root three <br />
                            A three is all that's good and right, <br />
                            Why must my three keep out of sight<br />
                            Beneath a vicious square root sign,<br />
                            I wish instead I were a nine<br />
                            For nine could thwart this evil trick,<br />
                            With just some quick arithmetic<br />
                            I know I'll never see the sun, as 1.7321<br />
                            Such is my reality, a sad irrationality<br />
                            When hark! What is this I see,<br />
                            Another square root of a three<br />
                            Has quietly come waltzing by,<br />
                            Together now we multiply<br />
                            To form a number we prefer,<br />
                            Rejoicing as an integer<br />
                            We break free from our mortal bonds<br />
                            And with a wave of magic wands<br />
                            Our square root signs become unglued<br />
                            And love for me has been renewed.</p>
                        <div className="hero_btn d_flex">
                            <div className="col_1">
                                <h4>FIND ME</h4>
                                <div className="button">
                                    <button className="btn_shadow">
                                        <i className="fab fa-facebook-f"></i>
                                    </button>
                                    <button className="btn_shadow">
                                        <i className="fab fa-instagram"></i>
                                    </button>
                                    <button className="btn_shadow">
                                        <i className="fab fa-linkedin-in"></i>
                                    </button>
                                </div>
                            </div>
                            <div className="col_1">
                                <h4>BEST SKILLS ON</h4>
                                <button className="btn_shadow">
                                    <img src={skill1} alt="" />
                                </button>
                                <button className="btn_shadow">
                                    <img src={skill2} alt="" />
                                </button>
                                <button className="btn_shadow">
                                    <img src={skill3} alt="" />
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="right">
                        <div className="right_img">
                            <img src={hero} alt="" />
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Home;