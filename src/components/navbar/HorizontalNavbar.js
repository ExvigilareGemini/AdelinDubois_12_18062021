import React from "react";
import logo from "../../img/fullLogo.svg";

/** Functional component of the navigation horizontal navbar
 * 
 * @returns JSX of the horizontal navbar "Header"
 */
function HorizontalNavbar() {
  return (
    <nav className="horizontalNavbar">
      <img src={logo} alt="Logo" className="horizontalNavbar_logo"></img>
      <p className="horizontalNavbar_link">Acceuil</p>
      <p className="horizontalNavbar_link">Profil</p>
      <p className="horizontalNavbar_link">Réglages</p>
      <p className="horizontalNavbar_link">Communauté</p>
    </nav>
  );
}

export default HorizontalNavbar;
