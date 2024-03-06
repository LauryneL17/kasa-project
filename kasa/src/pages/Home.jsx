import React from "react";
import img from "../assets/image.jpg";
import "../styles/home.css"; // Importez le fichier CSS depuis le chemin correct

import Card from "../component/card";

function Home() {
  return (
    <div>
      <section
        id="text-home"
        className="text-home"
        style={{ backgroundImage: `url(${img})` }}
      >
        <h2 className="text-content">Chez vous, partout et ailleurs</h2>
      </section>

      <div className="flex-container">
        <Card />
      </div>
    </div>
  );
}

export default Home;
