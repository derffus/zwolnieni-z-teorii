import React from "react";
import { useAtom } from "jotai";
import { motywStrony } from "../App";
function RightNav(props) {
  const [motyw,setMotyw] = useAtom(motywStrony);
  const zmienMotyw = () => {
    const nowyMotyw = motyw === "light" ? "dark" : "light";
    setMotyw(nowyMotyw);
  };
  return (
    <nav id="right-nav">
      <div id="zmien-motyw-div">
        {!props.darkMode ? (
          <button
            className="zmien-motyw"
            onClick={() => {
              zmienMotyw();
            }}
          ></button>
        ) : (
          <button
            className="zmien-motyw"
            onClick={() => {
              zmienMotyw();
            }}
          ></button>
        )}
      </div>
    </nav>
  );
}
export default RightNav;
