import React from 'react';
import './Navbar.css';

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navbar-logo">
                <a href="/">Mi Logo</a>
            </div>
            <ul className="navbar-links">
                <li>
                    <a href="/">Inicio</a>
                </li>
                <li>
                    <a href="/login">Iniciar Sesión</a>
                </li>
                <li>
                    <a href="/register">Registrarse</a>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
