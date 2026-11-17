function NosActions() {
  const actions = [
    {
      title: "Projets communautaires",
      description:
        "Mise en œuvre de projets répondant aux besoins des communautés.",
    },
    {
      title: "Renforcement des capacités",
      description:
        "Formation et accompagnement des acteurs locaux et institutionnels.",
    },
    {
      title: "Sensibilisation",
      description:
        "Information et mobilisation des communautés autour des enjeux prioritaires.",
    },
    {
      title: "Partenariats",
      description:
        "Collaboration avec les institutions, collectivités et partenaires.",
    },
  ];

  return (
    <section className="page">
      <div className="container">
        <h1>Nos Actions</h1>

        <p>
          Découvrez les principales actions que nous mettons en œuvre
          pour contribuer au développement des communautés.
        </p>

        <div className="cards">
          {actions.map((action, index) => (
            <div className="card" key={index}>
              <h2>{action.title}</h2>
              <p>{action.description}</p>
              <button>En savoir plus</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default NosActions;