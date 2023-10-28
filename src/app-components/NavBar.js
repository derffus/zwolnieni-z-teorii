import React from "react";
import { useAtom } from "jotai";
import { useNavigate, useLocation } from "react-router-dom";
import { motywStrony } from "../App";
function NavBar(props) {
  const navigate = useNavigate();
  const location = useLocation();
  const [motyw] = useAtom(motywStrony);
  return (
    <nav id="navbar-top">
      <div id="home">
        <button
          id="home-button"
          onClick={() => {
            navigate("/matzone");
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
      <div id="top-buttons">
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

      {!props.showNavbar ? (
        <div id="show-nav">
          <button
            onClick={() => {
              props.updateState("showNavbar", true);
            }}
          >
            <i className="fa fa-bars"></i>
          </button>
        </div>
      ) : (
        <div id="show-nav">
          <button
            onClick={() => {
              props.updateState("showNavbar", false);
            }}
          >
            <i className="fa fa-bars"></i>
          </button>
        </div>
      )}
    </nav>
  );
}
export default NavBar;
