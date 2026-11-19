/*
import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
*/

import { CarteProjet } from "./CarteProjet";
import { Encadre } from "./Encadre";

export default function App() {
  return (
    <>
      <div>
        <h1>Mes projets</h1>
        <Encadre>
          <CarteProjet
            titre="SmartGreen"
            description="Gestion d'une serre intelligente avec capteurs et relevés de données."
            technologies={[
              "HTML",
              "CSS",
              "JavaScript",
              "Bootstrap",
              "Chart.js",
              "PostgreSQL",
            ]}
          />
        </Encadre>
        <Encadre>
          <CarteProjet
            titre="ChatBot"
            description="Page informationelle sur HTML, CSS et JavaScript."
            technologies={["HTML", "CSS", "JavaScript"]}
          />
        </Encadre>
      </div>
    </>
  );
}
