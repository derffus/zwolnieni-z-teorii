import React from "react";
import "../component-styles/NavBar.scss";
import { useNavigate, useLocation } from "react-router-dom";
import { useAtom } from "jotai";
import { motywStrony, ShowRightNav } from "../App";
function NavBar(props) {
  const navigate = useNavigate();
  const location = useLocation();
  const [motyw] = useAtom(motywStrony);
  const [showRightNav, setShowRightNav] = useAtom(ShowRightNav);
  const toggleRightNav = () => {
    const trueOrFalse = showRightNav === true ? false : true;
    setShowRightNav(trueOrFalse);
  };
  let width = window.innerWidth;
  return (
    <nav id="navbar-top">
      <div id="home">
        <button
          id="home-button"
          onClick={() => {
            navigate("/");
          }}
        >
          <div>
            <img
              src={
                motyw === "light"
                  ? require("../images/LogoStrony.jpg")
                  : require("../images/LogoStronyDarkMode.png")
              }
              alt="Strona główna"
            />
          </div>
          <div id="mat-zone">
            <span>Mat</span>Zone
          </div>
        </button>
      </div>
      {width > 700 ? (
        <div id="top-buttons">
          <button
            id="materialy"
            className={
              location.pathname === "/materialy" ? "nav-clicked" : ""
            }
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
            className={
              location.pathname === "/studia" ? "nav-clicked" : ""
            }
            onClick={() => {
              navigate("/studia");
            }}
          >
            Studia
          </button>

          <button
            id="arkusze"
            className={
              location.pathname === "/arkusze" ? "nav-clicked" : ""
            }
            onClick={() => {
              navigate("/arkusze");
            }}
          >
            Arkusze
          </button>
        </div>
      ) : null}
      <div id="show-nav">
        <button onClick={toggleRightNav}>
          <i className="fa fa-bars"></i>
        </button>
      </div>
    </nav>
  );
}
export default NavBar;
