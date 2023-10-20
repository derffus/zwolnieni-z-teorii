import React, { useEffect } from "react";
import ContentPicker from "./ContentPicker";
function VideoPlayer(props) {
  useEffect(() => {
    props.segmentOpened("materialy");
    return () => {
      props.segmentClosed("materialy");
    };
  });
  return (
    <div className="filmy-i-artykuly">
      <ContentPicker updateState={props.updateState} clicked={props.clicked} />
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
