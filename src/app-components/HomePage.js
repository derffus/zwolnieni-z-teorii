import React from "react";
function HomePage(props) {
  return (
    <div id="home-page">
      <div id="welcome">
        Cała wiedza w <br /> <span>jednym miejscu!</span>
      </div>
      <div id="big-buttons">
        <button
          onClick={() => {
            props.updateState("homeClicked", false);
            props.updateState("clicked", "");
            props.updateState("korepetycje", true);
            props.updateState("studia", false);
            props.updateState("arkusze", false);
          }}
        >
          <img src={require("../images/Korepetycje.png")} alt="korepetycje" />
        </button>
        <button
          onClick={() => {
            props.updateState("homeClicked", false);
            props.updateState("clicked", "");
            props.updateState("korepetycje", false);
            props.updateState("studia", true);
            props.updateState("arkusze", false);
          }}
        >
          <img src={require("../images/Studia.png")} alt="studia" />
        </button>
        <button
          onClick={() => {
            props.updateState("homeClicked", false);
            props.updateState("clicked", "");
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
