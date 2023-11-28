import React from "react";
import "../component-styles/HomePage.scss";
import { useAtom } from "jotai";
import { NavLink } from "react-router-dom";
import { motywStrony } from "../App.tsx";
function HomePage(props) {
  const [motyw] = useAtom(motywStrony);

  return (
    <div id="home-page">
      <header className="home-header">
        <div className="welcome-home-page">
          Cała wiedza w <br />
          <span className="purple-text">jednym miejscu!</span>
        </div>
        <div className="big-buttons">
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
      <div className="o-stronie-div">
        <header className="o-stronie-welcome">
          Co wyróżnia{" "}
          <span className={`mat ${motyw === "light" ? "purple-text" : ""}`}>
            Mat
          </span>
          <span className={`zone ${motyw === "light" ? "" : "purple-text"}`}>
            Zone
          </span>
          ?
        </header>
        <nav className="o-stronie-nav">
          <div className="o-stronie-nav-item materialy-video">
            <img
              src={process.env.PUBLIC_URL + "/images/MaterialyVideo.png"}
              alt=""
            />
            <div>Materiały video</div>
          </div>
          <div className="o-stronie-nav-item rozwiazania-matur">
            <img
              src={process.env.PUBLIC_URL + "/images/RozwiazaniaMatur.png"}
              alt=""
            />
            <div>Rozwiązania matur</div>
          </div>
          <div className="o-stronie-nav-item teoria-i-artykuly">
            <img
              src={process.env.PUBLIC_URL + "/images/TeoriaIArtykuly.png"}
              alt=""
            />
            <div>Teoria i artykuły</div>
          </div>
        </nav>
      </div>
    </div>
  );
}
export default HomePage;
