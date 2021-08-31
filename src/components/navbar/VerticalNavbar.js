import React from "react";
import zenicon from "../../img/verticalNavbar/zenicon.svg";
import swimicon from "../../img/verticalNavbar/swimicon.svg";
import bikeicon from "../../img/verticalNavbar/bikeicon.svg";
import weighticon from "../../img/verticalNavbar/weighticon.svg";

/** Functional component of the navigation vertical navbar, copyright include
 *
 * @returns JSX of the vertical navbar
 */
function VerticalNavbar() {
  return (
    <nav className="verticalNavbar">
      <div className="verticalNavbar_iconContainer">
        <img src={zenicon} alt="zen" className="verticalNavbar_icon"></img>
        <img src={swimicon} alt="swim" className="verticalNavbar_icon"></img>
        <img src={bikeicon} alt="bike" className="verticalNavbar_icon"></img>
        <img src={weighticon} alt="muscle" className="verticalNavbar_icon"></img>
      </div>
      <p className="verticalNavbar_copyright">Copyright, Sportsee 2020</p>
    </nav>
  );
}

export default VerticalNavbar;
