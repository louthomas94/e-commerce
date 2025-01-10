import React from 'react';
import '../styles/pages/contact.css';

const Contact = () => {
  return (
    <div className="contact">
      <h1>Contact</h1> <br />
      <p>Si vous souhaitez nous contactez voici un formulaire</p> <br />
      <form>
        <label htmlFor="firstName">Prénom : </label>
        <input type="text" id="firstName" name="firstName" />
        <label htmlFor="lastName">Nom : </label>
        <input type="text" id="lastName" name="lastName" /> <br />
        <label htmlFor="phone">Numéro de téléphone : </label>
        <input type="tel" id="phone" name="phone" />
        <label htmlFor="message">Message : </label>
        <textarea id="message" name="message" />
        <button type="submit">Envoyer</button>
      </form>
    </div>
  );
};

export default Contact;