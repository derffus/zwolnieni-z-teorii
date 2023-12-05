import React from "react";
import "../component-styles/RightNav.scss";
import { NavLink } from "react-router-dom";
function RightNav(props:any) {
  return (
    <nav className={`right-nav ${props.showRightNav ? "show-right-nav" : ""}`}>
      <div className="right-segment-buttons">
        <NavLink to="/" className="right-nav-link">
          Strona główna
        </NavLink>
        <NavLink to="/materialy" className="right-nav-link">
          Materiały
        </NavLink>
        <NavLink to="/korepetycje" className="right-nav-link">
          Korepetycje
        </NavLink>
        <NavLink to="/studia" className="right-nav-link">
          Studia
        </NavLink>
        <NavLink to="/arkusze" className="right-nav-link">
          Arkusze
        </NavLink>
      </div>
    </nav>
  );
}
export default RightNav;
