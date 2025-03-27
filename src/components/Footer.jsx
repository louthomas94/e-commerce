import React from 'react';
import '../styles/components/footer.css';

const Footer = () => {
  return (
    <footer>
      <div className="footer-container">
        <div className="footer-content">
          <div className="menu-principal">
            <h4>MENU PRINCIPAL</h4>
            <nav>
              <a href="/">Accueil</a>
              <a href="/boutique">Boutique</a>
              <a href="/contact">Contact</a>
              <a href="/connexion">Connexion</a>
            </nav>
          </div>
          <div className="information">
            <h4>INFORMATION :</h4>
            <nav>
              <a href="/conditions">Condition général d'utilisation et ventes (CGU)</a>
              <a href="/politique-confidentialite">Politique de confidentialité</a>
              <a href="/cookies">Politique de cookies (UE)</a>
              <a href="/mentions-legales">Mentions Légales</a>
            </nav>
          </div>
        </div>
      </div>
      <div className="copyright">
        © 2025 Tapis Therapy
      </div>
    </footer>
  );
}

export default Footer;