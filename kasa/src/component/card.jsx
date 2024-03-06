import React from "react";
import logements from "../datas/logement.json";
import "../styles/Card.css"; // Assurez-vous d'avoir votre fichier CSS pour la mise en page
import { Link } from "react-router-dom";

function Card() {
  return (
    <div className="card-container">
      {logements.map((logement) => (
        <Link key={logement.id} to={`/logement/${logement.id}`}>
          {" "}
          <div className="card">
            <div
              className="card-image"
              style={{ backgroundImage: `url(${logement.cover})` }}
            ></div>
            <div className="card-title">{logement.title}</div>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default Card;
