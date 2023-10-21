import React, { useEffect } from "react";
import $ from "jquery";
function RightNav(props) {
  useEffect(() => {
    if(props.darkMode){
      $(".website").addClass("website-dark-mode");
    }
    else{
      $(".website").removeClass("website-dark-mode");
    }
  });
  return (
    <nav id="right-nav">
      {!props.darkMode ? (
        <button
          id="zmien-motyw"
          className="zmien-na-ciemny"
          onClick={() => {
            props.updateState("darkMode", true);
          }}
        >
          Ciemny motyw
        </button>
      ) : (
        <button
          id="zmien-motyw"
          className="zmien-na-jasny"
          onClick={() => {
            props.updateState("darkMode", false);
          }}
        >
          Jasny motyw
        </button>
      )}
    </nav>
  );
}
export default RightNav;
