import React from "react";
function NavBar(props) {
  return (
    <nav id="navbar-top">
      <div id="home">
        <button
          id="home-button"
          onClick={() => {
            props.updateState("homeClicked", true);
            props.updateState("clicked", "");
            props.updateState("korepetycje", false);
            props.updateState("studia", false);
            props.updateState("arkusze", false);
          }}
        >
          {" "}
          <div>
            <img
              src={require("../images/LogoStrony.jpg")}
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
          onClick={() => {
            props.updateState("homeClicked", false);
            props.updateState("clicked", "");
            props.updateState("korepetycje", true);
            props.updateState("studia", false);
            props.updateState("arkusze", false);
          }}
        >
          Korepetycje
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
          Studia
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
          Arkusze
        </button>
      </div>
      <div id="show-nav">
        {!props.showNavbar ? (
          <button
            onClick={() => {
              props.updateState("showNavbar", true);
            }}
          >
            <i className="fa fa-bars"></i>
          </button>
        ) : (
          <button
            onClick={() => {
              props.updateState("showNavbar", false);
            }}
          >
            <i className="fa fa-bars"></i>
          </button>
        )}
      </div>
    </nav>
  );
}
export default NavBar;
