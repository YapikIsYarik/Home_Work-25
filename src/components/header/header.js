import React, {Component} from 'react';
import './header.css';
import {NavLink} from "react-router-dom";


function Header() {


    return (
        <div>
            <header className="header-container">
                <div className="logo">LOGO</div>
                <nav className="menu">
                    <ul className="menu__list">
                        <li className="menu__item">
                            <NavLink to={'/home'} className="menu__link">Home</NavLink>
                        </li>
                        <li className="menu__item">
                            <NavLink to={'/images'} className="menu__link">Image</NavLink>
                        </li>
                        <li className="menu__item">
                            <NavLink to={'/posts'} className="menu__link">Post</NavLink>
                        </li>
                        <li className="menu__item">
                            <NavLink to={'/contacts'} className="menu__link">Contact</NavLink>
                        </li>
                    </ul>
                </nav>
            </header>
        </div>
    );

}

export default Header;