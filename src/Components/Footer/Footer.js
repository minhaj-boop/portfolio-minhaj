import React from 'react';
import './Footer.css';
import logo from '../../pic/logo-mj.jpg'
const Footer = () => {
    return (
        <>
            <footer>
                <div className="container text-center top">
                    <div className="img">
                        <img src={logo} alt="" />
                    </div>
                    <p>© 2022. All rights reverved by Minhaj</p>
                </div>
            </footer>
        </>
    );
};

export default Footer;