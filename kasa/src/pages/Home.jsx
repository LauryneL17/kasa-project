import React, { useEffect } from "react";
import img from "../assets/image.jpg";
import "../styles/home.css"; // Importez le fichier CSS depuis le chemin correct

import Card from "../component/card";

function Home() {
  useEffect(() => {
    const handleWindowResize = () => {
      const textContent = document.querySelector(".text-content");
      if (textContent && window.innerWidth <= 750) {
        textContent.innerHTML = "Chez vous, partout<br>et ailleurs";
      } else {
        textContent.innerHTML = "Chez vous, partout et ailleurs";
      }
    };

    // Appeler la fonction lors du chargement initial et du redimensionnement de la fenêtre
    handleWindowResize();
    window.addEventListener("resize", handleWindowResize);

    // Nettoyer l'écouteur d'événements lors du démontage du composant
    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);
  return (
    <div className="div-complete">
      <section
        id="text-home"
        className="text-home"
        style={{ backgroundImage: `url(${img})` }}
      >
        <div className="overlay"></div>
        <h2 className="text-content">Chez vous, partout et ailleurs</h2>
      </section>

      <div className="flex-container">
        <Card />
      </div>
    </div>
  );
}

export default Home;
