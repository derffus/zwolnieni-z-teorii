import React, { useEffect } from "react";
import $ from "jquery";
function RightNav(props) {
  useEffect(() => {
    if (props.darkMode) {
      $(".website").addClass("website-dark-mode");
      $(".zmien-motyw").addClass("ciemny-motyw");
      $(".zmien-motyw").removeClass("jasny-motyw");
    } else {
      $(".website").removeClass("website-dark-mode");
      $(".zmien-motyw").removeClass("ciemny-motyw");
      $(".zmien-motyw").addClass("jasny-motyw");
    }
  });
  return (
    <nav id="right-nav">
      <div id="zmien-motyw-div">
        {!props.darkMode ? (
          <button
            className="zmien-motyw"
            onClick={() => {
              props.updateState("darkMode", true);
            }}
          ></button>
        ) : (
          <button
            className="zmien-motyw"
            onClick={() => {
              props.updateState("darkMode", false);
            }}
          ></button>
        )}
      </div>
    </nav>
  );
}
export default RightNav;
