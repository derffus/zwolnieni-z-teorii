import React from "react";
import "../../component-styles/Arkusze.scss";
import { Outlet } from "react-router-dom";
import { atom } from "jotai";

export const ZakresArkusze = atom("podstawa");
function Arkusze(props) {
  return (
    <div id="arkusze">
      <Outlet />
    </div>
  );
}

export default Arkusze;
