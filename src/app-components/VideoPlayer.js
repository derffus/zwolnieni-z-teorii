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
      <ContentPicker updateState={props.updateState} klasa={props.klasa} zakres={props.zakres}/>
      <div className="filmy">
        {props.wypiszFilmy(
          props.filmyYTLinki,
          props.klasa,
          props.zakres,
          props.dzial,
          props.zrodlo
        )}
      </div>
    </div>
  );
}
export default VideoPlayer;
