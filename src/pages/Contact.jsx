function Contact() {
  return (
    <section className="page">
      <div className="container">

        <h1>Contactez-nous</h1>

        <p>
          Vous souhaitez en savoir plus sur nos actions ou travailler
          avec nous ? Contactez notre équipe.
        </p>

        <div className="contact-grid">

          <div>
            <h2>Nos coordonnées</h2>

            <p>
              <strong>Adresse :</strong><br />
              Antananarivo, Madagascar
            </p>

            <p>
              <strong>Email :</strong><br />
              contact@organisation.org
            </p>

            <p>
              <strong>Téléphone :</strong><br />
              +261 XX XX XXX XX
            </p>
          </div>

          <form className="contact-form">

            <input
              type="text"
              placeholder="Votre nom"
              required
            />

            <input
              type="email"
              placeholder="Votre adresse email"
              required
            />

            <input
              type="text"
              placeholder="Sujet"
              required
            />

            <textarea
              rows="6"
              placeholder="Votre message"
              required
            />

            <button type="submit">
              Envoyer le message
            </button>

          </form>

        </div>
      </div>
    </section>
  );
}

export default Contact;