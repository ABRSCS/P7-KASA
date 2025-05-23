// HEADER.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import "./Header.css";
import logo from '../../assets/images/LOGO.png';

const Header = () => {
    return (
        <header className="header">
            <div className="container">
                <div className="logo">
                    <Link to="/">
                        <img src={logo} alt="Logo" />
                    </Link>
                </div>
                <nav className="nav">
                    <ul>
                        <li><Link to="/">Accueil</Link></li>
                        <li><Link to="/about">À propos</Link></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;