import React from "react";
function HomePage(props) {
  return (
    <div id="home-page">
      <div id="welcome-home-page">
        Cała wiedza w <br /> <span>jednym miejscu!</span>
      </div>
      <div id="big-buttons">
        <button
          data-content="Materiały"
          onClick={() => {
            props.updateState("home", false);
            props.updateState("materialy", true);
            props.updateState("korepetycje", false);
            props.updateState("studia", false);
            props.updateState("arkusze", false);
          }}
        >
          <img src={!props.darkMode?require("../images/Materialy.png"):require("../images/MaterialyDarkMode.png")} alt="korepetycje" />
        </button>
        <button
          data-content="Korepetycje"
          onClick={() => {
            props.updateState("home", false);
            props.updateState("materialy", false);
            props.updateState("korepetycje", true);
            props.updateState("studia", false);
            props.updateState("arkusze", false);
          }}
        >
          <img src={!props.darkMode?require("../images/Korepetycje.png"):require("../images/KorepetycjeDarkMode.png")} alt="korepetycje" />
        </button>
        <button
          data-content="Studia"
          onClick={() => {
            props.updateState("home", false);
            props.updateState("materialy", false);
            props.updateState("korepetycje", false);
            props.updateState("studia", true);
            props.updateState("arkusze", false);
          }}
        >
          <img src={!props.darkMode?require("../images/Studia.png"):require("../images/StudiaDarkMode.png")} alt="studia" />
        </button>
        <button
          data-content="Arkusze"
          onClick={() => {
            props.updateState("home", false);
            props.updateState("materialy", false);
            props.updateState("korepetycje", false);
            props.updateState("studia", false);
            props.updateState("arkusze", true);
          }}
        >
          <img src={!props.darkMode?require("../images/Arkusze.png"):require("../images/ArkuszeDarkMode.png")} alt="arkusze" />
        </button>
      </div>
    </div>
  );
}
export default HomePage;
