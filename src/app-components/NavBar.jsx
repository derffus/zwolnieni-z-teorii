import React, { useState } from "react";
import "../component-styles/NavBar.scss";
import RightNav from "./RightNav";
import { useNavigate, useLocation } from "react-router-dom";
import { useAtom } from "jotai";
import { motywStrony } from "../App";
function NavBar(props) {
  const [showRightNav, setShowRightNav] = useState(false);
  const [motyw, setMotyw] = useAtom(motywStrony);

  const navigate = useNavigate();
  const location = useLocation();
  const width = window.innerWidth;

  const toggleRightNav = () => {
    const trueOrFalse = showRightNav === true ? false : true;
    setShowRightNav(trueOrFalse);
  };
  const zmienMotyw = () => {
    const nowyMotyw = motyw === "light" ? "dark" : "light";
    setMotyw(nowyMotyw);
  };

  return (
    <>
      <RightNav showRightNav={showRightNav} />
      <nav id="navbar-top">
        <div id="home">
          <button
            id="home-button"
            onClick={() => {
              navigate("/");
              setShowRightNav(false);
            }}
          >
            <div>
              <img
                src={process.env.PUBLIC_URL + "/images/LogoStrony.png"}
                alt="Logo MatZone"
              />
            </div>
            <div id="mat-zone">
              <span
                id="mat"
                style={
                  motyw === "light"
                    ? { color: "hsl(235, 26%, 62%)" }
                    : { color: "#D9D9D9" }
                }
              >
                Mat
              </span>
              <span
                id="zone"
                style={
                  motyw === "light"
                    ? { color: "hsl(201, 43%, 25%)" }
                    : { color: "#7F7FB0" }
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
        ) : null}
        {width < 700 ? (
          <div id="show-nav">
            <button onClick={toggleRightNav}>
              <i className="fa fa-bars"></i>
            </button>
          </div>
        ) : (
          <div className="zmien-motyw-div">
            <button
              className={`zmien-motyw ${
                motyw === "light" ? "moon-button" : "sun-button"
              }`}
              onClick={() => {
                zmienMotyw();
              }}
            >
              <i
                className={`fa-solid ${
                  motyw === "light" ? "fa-moon" : "fa-sun"
                }`}
                id="moon"
              />
            </button>
          </div>
        )}
      </nav>
    </>
  );
}
export default NavBar;
