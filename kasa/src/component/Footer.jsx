import "../styles/Footer.css";
import bas from "../assets/block.png";
import basmobile from "../assets/block-mobile.png";

function Footer() {
  return (
    <footer className="lmj-footer">
      <div className="footer">
        <img src={bas} alt="bas de pages " className="logo-footer" />
      </div>
      <div className="footer-mobile">
        <img src={basmobile} alt="bas de pages" className="logo-mobile" />
      </div>
    </footer>
  );
}

export default Footer;
