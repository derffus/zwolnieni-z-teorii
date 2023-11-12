import React, { useState, useEffect } from "react";
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

  useEffect(() => {
    if (width < 700) {
      setShowRightNav(false);
    }
  }, [location, width]);

  return (
    <>
      <RightNav showRightNav={showRightNav} />
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
                    ? process.env.PUBLIC_URL + "/images/LogoStrony.png"
                    : process.env.PUBLIC_URL + "/images/LogoStronyDarkMode.png"
                }
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
            <input type="checkbox" id="zmien-motyw-input" />
            <label
              for="zmien-motyw-input"
              className={"zmien-motyw"}
              onClick={() => {
                zmienMotyw();
              }}
            >
              {/*<i
                className={`fa-solid ${
                  motyw === "light" ? "fa-moon" : "fa-sun"
                }`}
                id="moon"
              />*/}
            </label>
          </div>
        )}
      </nav>
    </>
  );
}
export default NavBar;
