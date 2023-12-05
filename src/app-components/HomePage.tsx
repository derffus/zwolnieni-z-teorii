import React from "react";
import "../component-styles/HomePage.scss";
import { useAtom } from "jotai";
import { NavLink } from "react-router-dom";
import { MotywStrony } from "../App.tsx";
function HomePage() {
  const [motyw] = useAtom(MotywStrony);

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
          <span className="sss">
            Co wyróżnia{" "}
            <span className={`mat ${motyw === "light" ? "purple-text" : ""}`}>
              Mat
            </span>
            <span className={`zone ${motyw === "light" ? "" : "purple-text"}`}>
              Zone
            </span>
            ?
          </span>
        </header>
        <nav className="o-stronie-nav">
          <div
            className="o-stronie-nav-item materialy-video"
            data-content="Na naszej stronie znajdziesz wiele wartościowych filmików dopasowanych do konkretnych zagadnień, które z pewnością pomogą Ci opanować materiał szkolny. "
          >
            <img
              src={process.env.PUBLIC_URL + "/images/MaterialyVideo.png"}
              alt=""
            />
            <div>Materiały video</div>
          </div>
          <div
            className="o-stronie-nav-item rozwiazania-matur"
            data-content="Chcesz jak najlepiej przygotować się do matury? Przerób arkusze z poprzednich lat. Na naszej stronie masz je wszystkie w jednym miejscu wraz z odpowiedziami i wyjaśnieniami zadań."
          >
            <img
              src={process.env.PUBLIC_URL + "/images/RozwiazaniaMatur.png"}
              alt=""
            />
            <div>Rozwiązania matur</div>
          </div>
          <div
            className="o-stronie-nav-item teoria-i-artykuly"
            data-content="Oprócz materiałów video znajdziesz u nas też całą potrzebną teorię i wzory do każdego tematu (nawet te których nie znajdziesz w karcie wzorów). Co więcej możesz przeczytać wiele ciekawych i wartościowych artykułów edukacyjnych i nowinkowych takich jak na przykład najnowszych zmianach wymagań maturalnych."
          >
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
