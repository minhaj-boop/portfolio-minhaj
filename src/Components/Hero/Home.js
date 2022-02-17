import React from 'react';
import './Home.css';
// import hero from '../../pic/hero.png';
// import skill1 from '../../pic/skill1.png';
// import skill2 from '../../pic/skill2.png';
// import skill3 from '../../pic/skill3.png';
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
                                    words={['Coder', 'Developer', 'Travaller']}
                                    loop
                                    cursor
                                    cursorStyle='|'
                                    typeSpeed={70}
                                    deleteSpeed={50}
                                    delaySpeed={1000}
                                />
                            </span>
                        </h2>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam dolore iste nobis assumenda similique voluptatem quidem eligendi quae modi, sed, ipsam nisi ipsa animi esse eveniet odio ullam perferendis amet.</p>
                        <div className="hero_btn d_flex">
                            <div className="col_1">
                                <h4>FIND WITH ME</h4>
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
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Home;