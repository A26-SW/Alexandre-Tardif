import styles from "./assets/CSS/CarteProjet.module.css";

export function CarteProjet({ titre, technologies, description }) {
  console.log("CarteProjet props:", { titre, technologies, description });
  return (
    <>
      <article className={styles.carte}>
        <h2 className={styles.title}>{titre}</h2>
        <p>{description}</p>
        <div>Technologies utilisées :</div>
        <ul>
          {technologies.map((tech, index) => (
            <li key={index}>{tech}</li>
          ))}
        </ul>
      </article>
    </>
  );
}
