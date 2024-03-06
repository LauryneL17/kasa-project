import React from "react";
import Collapse from "./Collapse";

const LogementContent = ({ currentApartment }) => {
  return (
    <div className="destock-mobile">
      <div className="containe">
        <div className="container-x2">
          <div className="left-content">
            <h1 className="title-color">{currentApartment.title}</h1>
            <h2 className="sous-titre">{currentApartment.location}</h2>
          </div>
          <div className="right-content">
            <p className="proprio">{currentApartment.host.name}</p>
            <img
              className="proprio-image"
              src={currentApartment.host.picture}
              alt="Propriétaire"
            />
          </div>
        </div>
        <div className="top-buttons">
          <div className="global-buttons">
            {currentApartment.tags.map((tag, index) => (
              <button className="style-button" key={index}>
                {tag}
              </button>
            ))}
          </div>
          <div className="stars">
            {Array.from(
              { length: parseInt(currentApartment.rating) },
              (_, index) => (
                <i key={index} className="fas fa-star"></i>
              )
            )}
          </div>
        </div>
        <div className="column">
          <Collapse buttonText="Description">
            <div className="description-column">
              <p>{currentApartment.description}</p>
            </div>
          </Collapse>
          <Collapse buttonText="Equipement">
            <ul className="equipment-column">
              {currentApartment.equipments.map((equipment, index) => (
                <li key={index}>{equipment}</li>
              ))}
            </ul>
          </Collapse>
        </div>
      </div>
      <div className="containe-mobile">
        <div className="left-content-mobile">
          <h1 className="title-color-mobile">{currentApartment.title}</h1>
          <h2 className="sous-titre-mobile">{currentApartment.location}</h2>
        </div>
        <div className="global-buttons-mobile">
          {currentApartment.tags.map((tag, index) => (
            <button className="style-button-mobile" key={index}>
              {tag}
            </button>
          ))}
        </div>
        <div className="top-buttons-mobile">
          <div className="stars-mobile">
            {Array.from(
              { length: parseInt(currentApartment.rating) },
              (_, index) => (
                <i key={index} className="fas fa-star"></i>
              )
            )}
          </div>
          <div className="right-content-mobile">
            <p className="proprio">{currentApartment.host.name}</p>
            <img
              className="proprio-image-mobile"
              src={currentApartment.host.picture}
              alt="Propriétaire"
            />
          </div>
        </div>
        <div className="column-mobile">
          <Collapse buttonText="Description">
            <div className="description-column">
              <p>{currentApartment.description}</p>
            </div>
          </Collapse>
          <Collapse buttonText="Equipement">
            <ul className="equipment-column">
              {currentApartment.equipments.map((equipment, index) => (
                <li key={index}>{equipment}</li>
              ))}
            </ul>
          </Collapse>
        </div>
      </div>
    </div>
  );
};

export default LogementContent;
