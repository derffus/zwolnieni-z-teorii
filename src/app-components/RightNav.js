import React from "react";
import MaterialyRightNav from "./RightNavFolder/MaterialyRightNav";
function RightNav(props) {
  return (
    <nav id="right-nav">
      {props.home ? (
        <div>Home</div>
      ) : props.materialy ? (
        <MaterialyRightNav
          updateState={props.updateState}
          clicked={props.clicked}
          selectedKlasa1={props.selectedKlasa1}
          selectedKlasa2={props.selectedKlasa2}
          selectedKlasa3={props.selectedKlasa3}
          selectedKlasa4={props.selectedKlasa4}
        />
      ) : null}
    </nav>
  );
}
export default RightNav;
