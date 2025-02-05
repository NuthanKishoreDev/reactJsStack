import React from 'react';
import logo from '../assets/planet-earth.png';

function Header() {
    return (
        <header id="header" className="header">
            <img src={logo} alt="Logo" className="App-logo" />
            <h1 className="header--title">My Travel Journal</h1>
        </header>
    );
}

export default Header;