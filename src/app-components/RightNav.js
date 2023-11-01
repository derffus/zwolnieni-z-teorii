import React from "react";
import "../component-styles/RightNav.scss";
import { useAtom } from "jotai";
import { useNavigate, useLocation } from "react-router-dom";
import { motywStrony, ShowRightNav } from "../App";
function RightNav(props) {
  const [motyw, setMotyw] = useAtom(motywStrony);
  const [showRightNav] = useAtom(ShowRightNav);
  const zmienMotyw = () => {
    const nowyMotyw = motyw === "light" ? "dark" : "light";
    setMotyw(nowyMotyw);
  };
  const navigate = useNavigate();
  const location = useLocation();
  let width = window.innerWidth;
  return (
    <nav className={`right-nav ${showRightNav ? "show-right-nav" : ""}`}>
      {width <= 700 ? (
        <div id="right-segment-buttons">
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
            className={
              location.pathname === "/korepetycje" ? "nav-clicked" : ""
            }
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
      ) : null}
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
        <button className="instagram-button" onClick={()=>{window.open("https://instagram.com/", '_blank')}}>
          <i className="fa-brands fa-instagram" id="instagram"></i>
        </button>
        <button className="tiktok-button" onClick={()=>{window.open("https://tiktok.com/", '_blank')}}>
          <i className="fa-brands fa-tiktok fa-sm" id="tiktok"></i>
        </button>
      </div>
    </nav>
  );
}
export default RightNav;
