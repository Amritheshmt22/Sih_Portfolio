import technologies from "../data/technologyData";

function Technologies() {
  return (
    <section id="technologies">
      <h2>Technologies We Use</h2>

      <div className="technology-cards">
        {technologies.map((technology) => (
          <div key={technology.name}>
            <h3>{technology.name}</h3>
            <p>{technology.category}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Technologies;