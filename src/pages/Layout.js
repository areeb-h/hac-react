import { Outlet, Link } from "react-router-dom";
import React, { useState } from 'react';
import logo from '../assets/hac/hac.png';
import '../index.css';

import { NavLink } from "react-router-dom";

const Layout = () => {

    const [isActive, setActive] = useState("false");
    const Toggle = () => {
        setActive(!isActive); 
    };

    const linkStyle = "ff-sans-cond letter-spacing-4 text-dark";
    const buttonStyle = "ff-sans-cond letter-spacing-4 reg-btn";

    return (
        <body className="home">
            <header className="primary-header flex">
                <img src={logo} alt="space tourism logo" className="logo" />
                <button aria-expanded={isActive ? "true" : "false"} onClick={Toggle} className="mobile-nav-toggle"><span className="sr-only">Menu</span></button>
                <nav>
                    <ul data-visible={isActive ? "true" : "false"} className="primary-navigation link-hover-indicators flex">
                        <NavLink onClick={Toggle}  to="/" end className={linkStyle}>Home</NavLink> 
                        <NavLink onClick={Toggle} to="about" className={linkStyle}>About</NavLink> 
                        <NavLink onClick={Toggle} to="programs" className={linkStyle}>Programs</NavLink>
                        <NavLink onClick={Toggle} to="gallery" className={linkStyle}>Gallery</NavLink>
                        <NavLink onClick={Toggle} to="contact" className={linkStyle}>Contact</NavLink>
                        <NavLink onClick={Toggle} to="register" className={buttonStyle}>Register</NavLink>
                    </ul>
                </nav>
            </header>
            <Outlet />
        </body>
    )
};

export default Layout;