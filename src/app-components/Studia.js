import React, { useEffect } from "react";
function Studia(props) {
  useEffect(() => {
    props.segmentOpened("studia");
    return () => {
      props.segmentClosed("studia");
    };
  });
  return <div id="studia-segment">Tu studia</div>;
}
export default Studia;
