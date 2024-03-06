import React, { useState } from "react";
import img from "../assets/paysages.jpg";
import "../styles/home.css";
import Collapse from "../component/Collapse";

function About() {
  const [messagesVisibility, setMessagesVisibility] = useState({
    fiabilite: false,
    respect: false,
    service: false,
    securite: false,
  });

  const handleClick = (buttonName) => {
    const newMessagesVisibility = { ...messagesVisibility };
    newMessagesVisibility[buttonName] = !messagesVisibility[buttonName];
    setMessagesVisibility(newMessagesVisibility);
  };

  return (
    <div>
      <section
        id="text-home"
        className="text-home"
        style={{ backgroundImage: `url(${img})` }}
      ></section>
      <div className="button-container">
        <Collapse
          defaultOpen={messagesVisibility.fiabilite}
          buttonText="Fiabilité"
          onClick={() => handleClick("fiabilite")}
        >
          <p className="centered-justified">
            Les annonces postées sur Kasa garantissent une Fiabilité totale. Les
            photos sont conformes au logements, et toutes les informations sont
            régulièrement vérifiées par nos équipes.
          </p>
        </Collapse>

        <Collapse
          defaultOpen={messagesVisibility.respect}
          buttonText="Respect"
          onClick={() => handleClick("respect")}
        >
          <p className="centered-justified">
            La bienveillance fait partie des valeurs fondatrice de Kasa. Tout
            comportement discriminatoire ou de perturbation du voisinage
            entraînera une exclusion de notre plateforme.
          </p>
        </Collapse>

        <Collapse
          defaultOpen={messagesVisibility.service}
          buttonText="Service"
          onClick={() => handleClick("service")}
        >
          <p className="centered-justified">
            La bienveillance fait partie des valeurs fondatrice de Kasa. Tout
            comportement discriminatoire ou de perturbation du voisinage
            entraînera une exclusion de notre plateforme.
          </p>
        </Collapse>

        <Collapse
          defaultOpen={messagesVisibility.securite}
          buttonText="Sécurité"
          onClick={() => handleClick("securite")}
        >
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
