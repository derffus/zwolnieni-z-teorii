import React from "react";
import "../component-styles/RightNav.scss";
import { useAtom } from "jotai";
import { useNavigate, useLocation } from "react-router-dom";
import { motywStrony } from "../App";
function RightNav(props) {
  const [motyw, setMotyw] = useAtom(motywStrony);

  const navigate = useNavigate();
  const location = useLocation();

  const zmienMotyw = () => {
    const nowyMotyw = motyw === "light" ? "dark" : "light";
    setMotyw(nowyMotyw);
  };

  return (
    <nav className={`right-nav ${props.showRightNav ? "show-right-nav" : ""}`}>
      <div id="right-segment-buttons">
        <button
          id="strona-glowna"
          className={location.pathname === "/" ? "nav-clicked" : ""}
          onClick={() => {
            navigate("/");
          }}
        >
          Strona główna
        </button>
        <button
          id="materialy"
          className={location.pathname === "/materialy" ? "nav-clicked" : ""}
          onClick={() => {
            navigate("/materialy");
          }}
        >
          Materiały
        </button>
        <button
          id="korepetycje"
          className={location.pathname === "/korepetycje" ? "nav-clicked" : ""}
          onClick={() => {
            navigate("/korepetycje");
          }}
        >
          Korepetycje
        </button>
        <button
          id="studia"
          className={location.pathname === "/studia" ? "nav-clicked" : ""}
          onClick={() => {
            navigate("/studia");
          }}
        >
          Studia
        </button>
        <button
          id="arkusze"
          className={location.pathname === "/arkusze" ? "nav-clicked" : ""}
          onClick={() => {
            navigate("/arkusze");
          }}
        >
          Arkusze
        </button>
      </div>
      <div className="small-buttons">
        <button
          className={`zmien-motyw ${
            motyw === "light" ? "moon-button" : "sun-button"
          }`}
          onClick={() => {
            zmienMotyw();
          }}
        >
          {motyw === "light" ? (
            <i className="fa-solid fa-moon" id="moon"></i>
          ) : (
            <i className="fa-solid fa-sun" id="sun"></i>
          )}
        </button>
      </div>
    </nav>
  );
}
export default RightNav;
