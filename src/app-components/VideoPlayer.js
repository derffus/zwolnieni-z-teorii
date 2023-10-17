import React, { useEffect } from "react";
function VideoPlayer(props) {
  useEffect(() => {
    props.segmentOpened("show-nav");
    return () => {
      props.segmentClosed("show-nav");
    };
  });
  return (
    <div className="filmy-i-artykuly">
      {props.zrodlo === "youtube" ? (
        <div id="shuffle-button">
          <button onClick={props.shuffleFilmy}>
            Wymieszaj
            <br />
            filmy
          </button>
        </div>
      ) : null}
      <div id="pokaz-klase">
        Klasa {props.clicked.match(/\d/)} poziom{" "}
        {/podstawa/.test(props.clicked)
          ? "podstawowy"
          : /rozszerzenie/.test(props.clicked)
          ? "rozszerzony"
          : ""}
      </div>
      <div className="filmy">
        {props.wypiszFilmy(
          props.filmyYTLinki,
          props.clicked,
          props.dzial,
          props.zrodlo
        )}
      </div>
    </div>
  );
}
export default VideoPlayer;
