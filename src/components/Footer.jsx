import React from 'react';
import '../styles/components/footer.css';

const Footer = () => {
  return (
    <footer>
      <nav>
        <li>
          <a href="/">Accueil</a>
          <a href="/boutique">Boutique en ligne</a>
          <a href="/contact">Contact</a>
        </li>
      </nav>
      <p>Tout droit reservé</p>
      <p>&copy; 2025 Tapis Therapy</p>
    </footer>
  );
}

export default Footer;