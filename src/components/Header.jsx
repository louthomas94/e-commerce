import React from 'react';
import Logo from '../assets/logo.jpg';
import '../styles/components/header.css';
/*import Account from '../assets/homepage/icon_client.png'
import Cart from '../assets/homepage/icon_cart.png'*/

const Header = () => {
  return (
    <div>
      <img className="logo" src={Logo} alt="logo du site" />
      {/*<img className="account" src={Account} alt="icon de compte" />
      <img className="cart" src={Cart} alt="icon de panier" />*/}
      <section className='menu'>
        <nav>
          <li>
            <a href="/">Accueil</a>
            <a href="/boutique">Boutique en ligne</a>
          </li>
        </nav>
      </section>
    </div>
  );
};

export default Header;