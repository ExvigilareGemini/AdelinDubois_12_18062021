import React from "react";
import HorizontalNavbar from "./HorizontalNavbar";
import VerticalNavbar from "./VerticalNavbar";

/** Functionnal component rendering all navbars (Horizontal & Vertical)
 * 
 * @returns React component
 */
function Nav() {
  return (
    <nav className="nav">
      <HorizontalNavbar />
      <VerticalNavbar />
    </nav>
  );
}

export default Nav;
