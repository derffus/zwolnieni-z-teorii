import React from "react";
import "../component-styles/About.scss";
function About(props) {
  return (
    <footer id="about-segment">
      <div className="social-media">
        <nav className="instagram">
          <>
            <img />
          </>
          <h1>Odwiedź nas na instagramie!</h1>
        </nav>
        <nav className="tiktok">
          <>
            <img />
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
            src={process.env.PUBLIC_URL + "/images/ZwolnieniZTeorii.png"}
            alt="zwolnieni z teiruu"
          />
        </>
      </div>
    </footer>
  );
}
export default About;
