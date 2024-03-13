import React from "react";
import img from "../assets/paysages.jpg";
import "../styles/home.css";
import Collapse from "../component/Collapse";

function About() {
  return (
    <div>
      <section
        id="text-home"
        className="text-home"
        style={{ backgroundImage: `url(${img})` }}
      ></section>
      <div className="button-container">
        <Collapse buttonText="Fiabilité">
          <p className="centered-justified">
            Les annonces postées sur Kasa garantissent une Fiabilité totale. Les
            photos sont conformes au logements, et toutes les informations sont
            régulièrement vérifiées par nos équipes.
          </p>
        </Collapse>

        <Collapse buttonText="Respect">
          <p className="centered-justified">
            La bienveillance fait partie des valeurs fondatrice de Kasa. Tout
            comportement discriminatoire ou de perturbation du voisinage
            entraînera une exclusion de notre plateforme.
          </p>
        </Collapse>

        <Collapse buttonText="Service">
          <p className="centered-justified">
            La bienveillance fait partie des valeurs fondatrice de Kasa. Tout
            comportement discriminatoire ou de perturbation du voisinage
            entraînera une exclusion de notre plateforme.
          </p>
        </Collapse>

        <Collapse buttonText="Sécurité">
          <p className="centered-justified">
            La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que
            pour les voyageurs, chaque logement correspond aux critères de
            Sécurité établis par nos services. En laissant une note aussi bien a
            l'hôte qu'au locataire, cela permet à nos équipes de vérifer que les
            standars sont bien respectés. Nous organisons également des ateliers
            sur le sécurité domestiques pour nos hôtes.
          </p>
        </Collapse>
      </div>
    </div>
  );
}

export default About;
