import React from "react";
import "../component-styles/HomePage.scss";
import { useAtom } from "jotai";
import { NavLink } from "react-router-dom";
import { motywStrony } from "../App.tsx";
function HomePage(props) {
  const [motyw] = useAtom(motywStrony);


  return (
    <div id="home-page">
      <header id="home-header">
        <div id="welcome-home-page">
          Cała wiedza w <br />
          <span className="purple-text">jednym miejscu!</span>
        </div>
        <div id="big-buttons">
          <NavLink
            className="big-buttons-button"
            to="/materialy"
            data-content="Materiały"
          >
            <img
              src={
                motyw === "light"
                  ? process.env.PUBLIC_URL + "/images/Materialy.png"
                  : process.env.PUBLIC_URL + "/images/MaterialyDarkMode.png"
              }
              alt="materialy"
            />
          </NavLink>

          <NavLink
            className="big-buttons-button"
            to="/korepetycje"
            data-content="Korepetycje"
          >
            <img
              src={
                motyw === "light"
                  ? process.env.PUBLIC_URL + "/images/Korepetycje.png"
                  : process.env.PUBLIC_URL + "/images/KorepetycjeDarkMode.png"
              }
              alt="korepetycje"
            />
          </NavLink>

          <NavLink
            className="big-buttons-button"
            to="/studia"
            data-content="Studia"
          >
            <img
              src={
                motyw === "light"
                  ? process.env.PUBLIC_URL + "/images/Studia.png"
                  : process.env.PUBLIC_URL + "/images/StudiaDarkMode.png"
              }
              alt="studia"
            />
          </NavLink>

          <NavLink
            className="big-buttons-button"
            to="/arkusze"
            data-content="Arkusze"
          >
            <img
              src={
                motyw === "light"
                  ? process.env.PUBLIC_URL + "/images/Arkusze.png"
                  : process.env.PUBLIC_URL + "/images/ArkuszeDarkMode.png"
              }
              alt="arkusze"
            />
          </NavLink>
        </div>
      </header>
    </div>
  );
}
export default HomePage;
