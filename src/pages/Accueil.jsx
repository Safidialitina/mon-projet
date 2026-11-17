function Accueil() {
  return (
    <div>
      <section className="hero">
        <div className="container hero-content">
          <h1>
            Ensemble pour un développement durable et inclusif
          </h1>

          <p>
            Nous œuvrons pour améliorer les conditions de vie des
            communautés à travers des actions concrètes et durables.
          </p>

          <a href="#actions" className="btn">
            Découvrir nos actions
          </a>
        </div>
      </section>

      <section className="container section">
        <h2>Nos secteurs d'intervention</h2>

        <div className="cards">

          <div className="card">
            <h3>Éducation</h3>
            <p>
              Promouvoir un accès équitable à une éducation de qualité.
            </p>
          </div>

          <div className="card">
            <h3>Gouvernance</h3>
            <p>
              Renforcer la transparence, la participation et la bonne
              gouvernance.
            </p>
          </div>

          <div className="card">
            <h3>Protection Sociale</h3>
            <p>
              Accompagner les populations vulnérables et renforcer leur
              protection sociale.
            </p>
          </div>

          <div className="card">
            <h3>Santé et Nutrition</h3>
            <p>
              Améliorer l'accès aux services de santé et promouvoir une
              bonne nutrition.
            </p>
          </div>

          <div className="card">
            <h3>Environnement</h3>
            <p>
              Contribuer à la protection de l'environnement et à la
              résilience climatique.
            </p>
          </div>

          <div className="card">
            <h3>Décentralisation</h3>
            <p>
              Soutenir les collectivités et le développement local.
            </p>
          </div>

        </div>
      </section>

      <section className="section section-light">
        <div className="container">
          <h2>Notre mission</h2>

          <p>
            Notre mission est de contribuer à un développement inclusif,
            durable et équitable en travaillant aux côtés des communautés,
            des institutions et des différents acteurs du développement.
          </p>
        </div>
      </section>
    </div>
  );
}

export default Accueil;