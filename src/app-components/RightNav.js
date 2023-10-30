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
        <div id="left-segment-buttons">
          <button
            id="materialy"
            className={
              location.pathname === "/matzone/materialy" ? "nav-clicked" : ""
            }
            onClick={() => {
              navigate("/matzone/materialy");
            }}
          >
            Materiały
          </button>

          <button
            id="korepetycje"
            className={
              location.pathname === "/matzone/korepetycje" ? "nav-clicked" : ""
            }
            onClick={() => {
              navigate("/matzone/korepetycje");
            }}
          >
            Korepetycje
          </button>

          <button
            id="studia"
            className={
              location.pathname === "/matzone/studia" ? "nav-clicked" : ""
            }
            onClick={() => {
              navigate("/matzone/studia");
            }}
          >
            Studia
          </button>

          <button
            id="arkusze"
            className={
              location.pathname === "/matzone/arkusze" ? "nav-clicked" : ""
            }
            onClick={() => {
              navigate("/matzone/arkusze");
            }}
          >
            Arkusze
          </button>
        </div>
      ) : null}
      <div id="zmien-motyw-div">
        {!props.darkMode ? (
          <button
            className="zmien-motyw"
            onClick={() => {
              zmienMotyw();
            }}
          ></button>
        ) : (
          <button
            className="zmien-motyw"
            onClick={() => {
              zmienMotyw();
            }}
          ></button>
        )}
      </div>
    </nav>
  );
}
export default RightNav;
