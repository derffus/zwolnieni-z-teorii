import React from "react";
import { useNavigate } from "react-router-dom";
function NavBar(props) {
  const navigate = useNavigate();
  return (
    <nav id="navbar-top">
      <div id="home">
        <button
          id="home-button"
          onClick={() => {
            navigate("/");
            props.updateState("home", true);
            props.updateState("materialy", false);
            props.updateState("korepetycje", false);
            props.updateState("studia", false);
            props.updateState("arkusze", false);
          }}
        >
          <div>
            <img
              src={
                !props.darkMode
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
          onClick={() => {
            navigate("/materialy");
            props.updateState("home", false);
            props.updateState("materialy", true);
            props.updateState("klasa", "1");
            props.updateState("zakres", "podstawa");
            props.updateState("korepetycje", false);
            props.updateState("studia", false);
            props.updateState("arkusze", false);
          }}
        >
          Materiały
        </button>

        <button
          id="korepetycje"
          onClick={() => {
            navigate("/korepetycje");
            props.updateState("home", false);
            props.updateState("materialy", false);
            props.updateState("korepetycje", true);
            props.updateState("studia", false);
            props.updateState("arkusze", false);
          }}
        >
          Korepetycje
        </button>

        <button
          id="studia"
          onClick={() => {
            navigate("/studia");
            props.updateState("home", false);
            props.updateState("materialy", false);
            props.updateState("korepetycje", false);
            props.updateState("studia", true);
            props.updateState("arkusze", false);
          }}
        >
          Studia
        </button>

        <button
          id="arkusze"
          onClick={() => {
            navigate("/arkusze");
            props.updateState("home", false);
            props.updateState("materialy", false);
            props.updateState("korepetycje", false);
            props.updateState("studia", false);
            props.updateState("arkusze", true);
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
