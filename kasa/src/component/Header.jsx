import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import "../styles/header.css";

function Header() {
  return (
    <div className="navcontainer">
      <img src={logo} alt="Logo kasa" className="logo-kasa" />
      <div className="new-page">
        <Link to="/">Accueil</Link>
        <Link to="/About">A propos</Link>
      </div>
    </div>
  );
}

export default Header;
