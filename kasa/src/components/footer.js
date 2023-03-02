import React from "react";
import "../styles/footer.css";
import logoFooter from "../assets/LogoFooter.png";

function Footer() {
  return(
    <footer>
      <div id="footer-container">
        <img src={logoFooter} alt="Logo" />
        <p>&copy; 2022 Kasa. Tous droits réservés</p>
      </div>
    </footer>
  );
}

export default Footer;