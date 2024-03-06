// Logement.js
import React from "react";
import { useParams, Navigate } from "react-router-dom";
import apartmentsData from "../datas/logement.json";
import Slider from "../component/Slider";
import LogementContent from "../component/LogementContent";
import "../styles/Appartement.css";

const Logement = () => {
  const { id } = useParams();

  // Rechercher l'appartement correspondant à l'ID dans les données
  const currentApartment = apartmentsData.find(
    (apartment) => apartment.id === id
  );

  // Si aucun appartement correspondant n'est trouvé, rediriger vers la page d'erreur 404
  if (!currentApartment) {
    return <Navigate to="/404" />;
  }

  const images = currentApartment.pictures;

  return (
    <div className="container">
      <Slider images={images} />
      <LogementContent currentApartment={currentApartment} />
    </div>
  );
};

export default Logement;
