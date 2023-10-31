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
      <div id="zmien-motyw-div">
        <button
          className={`zmien-motyw ${
            motyw === "light" ? "moon-button" : "sun-button"
          }`}
          onClick={() => {
            zmienMotyw();
          }}
        >
          {motyw === "light" ? (
            <i
              class="fa-solid fa-moon"
              id="moon"
              style={{
                color: "hsl(44, 12%, 59%)",
                textShadow: "3px 3px 2px black",
              }}
            ></i>
          ) : (
            <i
              class="fa-solid fa-sun"
              id="sun"
              style={{
                color: "hsl(50, 13%, 50%)",
                textShadow: "3px 3px 2px black",
              }}
            ></i>
          )}
        </button>
      </div>
    </nav>
  );
}
export default RightNav;
