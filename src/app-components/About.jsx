import React from "react";
import "../component-styles/About.scss";
import { useAtom } from "jotai";
import { motywStrony } from "../App";
function About(props) {
  const [motyw] = useAtom(motywStrony);
  return (
    <footer id="about-segment">
      <div className="social-media">
        <nav className="instagram">
          <>
            <img src={ process.env.PUBLIC_URL + "/images/Instagram.png"} alt="instagram logo" />
          </>
          <h1>Odwiedź nas na instagramie!</h1>
        </nav>
        <nav className="tiktok">
          <>
            <img src={ process.env.PUBLIC_URL + "/images/TikTok.png"} alt="tiktok logo" />
          </>
          <h1>Odwiedź nas na tiktoku!</h1>
        </nav>
      </div>
      <div className="inne">
        <div className="inne-div">Inne</div>
        <div>Kontakt</div>
        <div>Wsparcie</div>
        <div>O nas</div>
      </div>
      <div className="projekt-w-ramach-zwolnieni">
        <h1>Projekt w ramach</h1>
        <>
          <img
            src={
              motyw === "light"
                ? process.env.PUBLIC_URL + "/images/ZwolnieniZTeorii.png"
                : process.env.PUBLIC_URL +
                  "/images/ZwolnieniZTeoriiDarkMode.png"
            }
            alt="zwolnieni z teorii"
          />
        </>
      </div>
    </footer>
  );
}
export default About;
