import React from "react";
import ContentPicker from "./ContentPicker";
function VideoPlayer(props) {
  return (
    <div className="filmy-i-artykuly">
      <ContentPicker updateState={props.updateState} klasa={props.klasa} zakres={props.zakres} temat={props.temat}/>
      <div className="filmy">
        {props.wypiszFilmy(
          props.filmyYTLinki,
          props.klasa,
          props.zakres,
          props.dzial,
          props.temat,
          props.zrodlo
        )}
      </div>
    </div>
  );
}
export default VideoPlayer;
