import React from "react";
import "../component-styles/HomePage.scss";
import { useAtom } from "jotai";
import { useNavigate } from "react-router-dom";
import { motywStrony } from "../App";
function HomePage(props) {
  const [motyw] = useAtom(motywStrony);

  const navigate = useNavigate();

  return (
    <div id="home-page">
      <header id="home-header">
        <div id="welcome-home-page">
          Cała wiedza w <br />
          <span>jednym miejscu!</span>
        </div>
        <div id="big-buttons">
          <button
            data-content="Materiały"
            onClick={() => {
              navigate("/materialy");
            }}
          >
            <img
              src={
                motyw === "light"
                  ? process.env.PUBLIC_URL + "/images/Materialy.png"
                  : process.env.PUBLIC_URL + "/images/MaterialyDarkMode.png"
              }
              alt="materialy"
            />
          </button>

          <button
            data-content="Korepetycje"
            onClick={() => {
              navigate("/korepetycje");
            }}
          >
            <img
              src={
                motyw === "light"
                  ? process.env.PUBLIC_URL + "/images/Korepetycje.png"
                  : process.env.PUBLIC_URL + "/images/KorepetycjeDarkMode.png"
              }
              alt="korepetycje"
            />
          </button>

          <button
            data-content="Studia"
            onClick={() => {
              navigate("/studia");
            }}
          >
            <img
              src={
                motyw === "light"
                  ? process.env.PUBLIC_URL + "/images/Studia.png"
                  : process.env.PUBLIC_URL + "/images/StudiaDarkMode.png"
              }
              alt="studia"
            />
          </button>

          <button
            data-content="Arkusze"
            onClick={() => {
              navigate("/arkusze");
            }}
          >
            <img
              src={
                motyw === "light"
                  ? process.env.PUBLIC_URL + "/images/Arkusze.png"
                  : process.env.PUBLIC_URL + "/images/ArkuszeDarkMode.png"
              }
              alt="arkusze"
            />
          </button>
        </div>
      </header>
      <footer id="home-footer">
        <div className="kontakt-welcome">Skontaktuj się z nami</div>
        <div className="kontakt-linki">
          <button data-content="matZone">
            <i className="fa-brands fa-instagram"></i>
          </button>
          <button data-content="matzone.kontakt@gmail.com">
            <i className="fa-regular fa-envelope"></i>
          </button>
          <button data-content="MatZone">
            <i className="fa-brands fa-tiktok fa-sm"></i>
          </button>
        </div>
      </footer>
    </div>
  );
}
export default HomePage;
