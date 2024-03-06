// Collapse.js
import React, { useState } from "react";

const Collapse = ({ defaultOpen = false, children, buttonText }) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  const toggleCollapse = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="Taille">
      <button className="button-wrapper" onClick={toggleCollapse}>
        <span className="texte">{buttonText}</span>
        <span className="arrow">
          {isOpen ? (
            <i className="fa-solid fa-chevron-up"></i>
          ) : (
            <i className="fa-solid fa-chevron-down"></i>
          )}
        </span>
      </button>
      {isOpen && children}
    </div>
  );
};

export default Collapse;
