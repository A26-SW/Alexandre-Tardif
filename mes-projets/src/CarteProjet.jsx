export function CarteProjet({ titre, technologies, description }) {
  console.log("CarteProjet props:", { titre, technologies, description });
  return (
    <>
      <article>
        <h2>{titre}</h2>
        <p>{description}</p>
        <ul>
          {technologies.map((tech, index) => (
            <li key={index}>{tech}</li>
          ))}
        </ul>
      </article>
    </>
  );
}
