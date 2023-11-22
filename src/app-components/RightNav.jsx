import React from "react";
import "../component-styles/RightNav.scss";
import { useNavigate, useLocation } from "react-router-dom";
function RightNav(props) {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <nav className={`right-nav ${props.showRightNav ? "show-right-nav" : ""}`}>
      <div id="right-segment-buttons">
        <button
          className={location.pathname === "/" ? "nav-clicked" : ""}
          onClick={() => {
            navigate("/");
          }}
        >
          Strona główna
        </button>
        <button
          className={location.pathname === "/materialy" ? "nav-clicked" : ""}
          onClick={() => {
            navigate("/materialy");
          }}
        >
          Materiały
        </button>
        <button
          className={location.pathname === "/korepetycje" ? "nav-clicked" : ""}
          onClick={() => {
            navigate("/korepetycje");
          }}
        >
          Korepetycje
        </button>
        <button
          className={location.pathname === "/studia" ? "nav-clicked" : ""}
          onClick={() => {
            navigate("/studia");
          }}
        >
          Studia
        </button>
        <button
          className={location.pathname === "/arkusze" ? "nav-clicked" : ""}
          onClick={() => {
            navigate("/arkusze");
          }}
        >
          Arkusze
        </button>
      </div>
    </nav>
  );
}
export default RightNav;
