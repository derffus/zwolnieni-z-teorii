import React from "react";
function VideoPlayer(props) {
  return (
    <div className="na-stronie">
      <div id="shuffle-button">
        <button onClick={props.shuffleFilmy}>
          Wymieszaj
          <br />
          filmy
        </button>
      </div>
      <div id="pokaz-klase">
        Klasa {props.clicked.match(/\d/)} poziom{" "}
        {/podstawa/.test(props.clicked)
          ? "podstawowy"
          : /rozszerzenie/.test(props.clicked)
          ? "rozszerzony"
          : ""}
      </div>
      <div className="filmy">
        {props.wypiszFilmy(props.filmyYTLinki,props.clicked,props.dzial,props.zrodlo)}
      </div>
    </div>
  );
}
export default VideoPlayer;
