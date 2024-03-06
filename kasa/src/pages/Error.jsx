import React from "react";
import { Link } from "react-router-dom";
import "../styles/Error.css";

function Error() {
  return (
    <div className="error-wrapper">
      <h1 className="error-title">404</h1>
      <p className="error-subtitle">
        Oups! La page que vous demandez n’existe pas.
      </p>
      <p className="changement-pages">
        <Link to="/">Retourner à la page d'accueil</Link>
      </p>
    </div>
  );
}

export default Error;
