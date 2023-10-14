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
        <button>Korepetycje</button>
        <button>Studia</button>
        <button>Arkusze</button>
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
