import React from "react";
function HomePage(props) {
  return (
    <div id="home-page">
      <div id="welcome-home-page">
        Cała wiedza w <br /> <span>jednym miejscu!</span>
      </div>
      <div id="big-buttons">
        <button
          onClick={() => {
            props.updateState("home", false);
            props.updateState("materialy", true);
            props.updateState("korepetycje", false);
            props.updateState("studia", false);
            props.updateState("arkusze", false);
          }}
        >
          <img src={require("../images/Materialy.png")} alt="korepetycje" />
        </button>
        <button
          onClick={() => {
            props.updateState("home", false);
            props.updateState("materialy", false);
            props.updateState("korepetycje", true);
            props.updateState("studia", false);
            props.updateState("arkusze", false);
          }}
        >
          <img src={require("../images/Korepetycje.png")} alt="korepetycje" />
        </button>
        <button
          onClick={() => {
            props.updateState("home", false);
            props.updateState("materialy", false);
            props.updateState("korepetycje", false);
            props.updateState("studia", true);
            props.updateState("arkusze", false);
          }}
        >
          <img src={require("../images/Studia.png")} alt="studia" />
        </button>
        <button
          onClick={() => {
            props.updateState("home", false);
            props.updateState("materialy", false);
            props.updateState("korepetycje", false);
            props.updateState("studia", false);
            props.updateState("arkusze", true);
          }}
        >
          <img src={require("../images/Arkusze.png")} alt="arkusze" />
        </button>
      </div>
    </div>
  );
}
export default HomePage;
