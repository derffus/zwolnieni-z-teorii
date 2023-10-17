import React, { useEffect } from "react";
function Arkusze(props) {
  useEffect(() => {
    props.segmentOpened("arkusze");
    return () => {
      props.segmentClosed("arkusze");
    };
  });
  return <div id="arkusze-segment">Tu arkusze</div>;
}
export default Arkusze;
