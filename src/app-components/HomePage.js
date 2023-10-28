import React from "react";
import { useAtom } from "jotai";
import { useNavigate } from "react-router-dom";
import { motywStrony } from "../App";
function HomePage(props) {
  const navigate = useNavigate();
  const [motyw] = useAtom(motywStrony);
  return (
    <div id="home-page">
      <div id="welcome-home-page">
        Cała wiedza w <br /><span>jednym miejscu!</span>
      </div>
      <div id="big-buttons">
        <button
          data-content="Materiały"
          onClick={() => {
            navigate("/materialy");
          }}
        >
          <img
            src={
              motyw == "light"
                ? require("../images/Materialy.png")
                : require("../images/MaterialyDarkMode.png")
            }
            alt="korepetycje"
          />
        </button>

        <button
          data-content="Korepetycje"
          onClick={() => {
            navigate("/korepetycje");
          }}
        >
          <img
            src={
              motyw == "light"
                ? require("../images/Korepetycje.png")
                : require("../images/KorepetycjeDarkMode.png")
            }
            alt="korepetycje"
          />
        </button>

        <button
          data-content="Studia"
          onClick={() => {
            navigate("/studia");
          }}
        >
          <img
            src={
              motyw == "light"
                ? require("../images/Studia.png")
                : require("../images/StudiaDarkMode.png")
            }
            alt="studia"
          />
        </button>

        <button
          data-content="Arkusze"
          onClick={() => {
            navigate("/arkusze");
          }}
        >
          <img
            src={
              motyw == "light"
                ? require("../images/Arkusze.png")
                : require("../images/ArkuszeDarkMode.png")
            }
            alt="arkusze"
          />
        </button>
      </div>
    </div>
  );
}
export default HomePage;
