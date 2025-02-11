import React from 'react';
import Logo from '../assets/logo.jpg';
import '../styles/components/header.css';

const Header = () => {
    return (
        <header>
            <div>
                <img className="logo" src={Logo} alt="logo du site"/>
            </div>
            <nav className='menu'>
                <ul>
                    <li><a href="/">Accueil</a></li>
                    <li><a href="/boutique">Boutique en ligne</a></li>
                    <li><a href="/contact">Contact</a></li>
                    <li><a href="/connexion" className='Mconnexion'>Connexion</a></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;