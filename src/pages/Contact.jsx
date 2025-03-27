import '../styles/pages/contact.css';

const Contact = () => {
  return (
    <div className="contact-container">
      <div className="contact-image"></div> {/* L'image d'arrière-plan */}
      <div className="contact-form">
        <h1>Contact</h1>
        <p>Si vous souhaitez nous contacter, veuillez utiliser ce formulaire</p>

        <form>
          <div>
            <label htmlFor="firstName">Prénom :</label>
            <input type="text" id="firstName" name="firstName" required />
          </div>

          <div>
            <label htmlFor="lastName">Nom :</label>
            <input type="text" id="lastName" name="lastName" required />
          </div>

          <div>
            <label htmlFor="phone">Numéro de téléphone :</label>
            <input type="tel" id="phone" name="phone" pattern="[0-9]{10}" required />
          </div>

          <div>
            <label htmlFor="message">Message :</label>
            <textarea id="message" name="message" required />
          </div>

          <button type="submit">Envoyer</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
