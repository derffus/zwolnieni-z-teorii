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
              src={require("../images/LogoStrony.png")}
              alt="Logo MatZone"
            />
          </div>
          <div id="mat-zone">
            <span
              id="mat"
              style={
                motyw === "light"
                  ? { color: "hsl(235, 26%, 62%)" }
                  : { color: "hsl(235, 26%, 25%)" }
              }
            >
              Mat
            </span>
            <span
              id="zone"
              style={
                motyw === "light"
                  ? { color: "hsl(201, 43%, 25%)" }
                  : { color: "hsl(201, 43%, 45%)" }
              }
            >
              Zone
            </span>
          </div>
        </button>
      </div>
      {width > 700 ? (
        <div id="top-buttons">
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
      <div id="show-nav">
        <button onClick={toggleRightNav}>
          <i className="fa fa-bars"></i>
        </button>
      </div>
    </nav>
  );
}
export default NavBar;
