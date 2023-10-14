import React from "react";
function HomePage(props) {
  return (
    <div id="home-page">
      <div id="welcome">
        Cała wiedza w <br /> <span>jednym miejscu!</span>
      </div>
      <div id="big-buttons">
        <button><img src={require("../images/Korepetycje.png")} alt="korepetycje"/></button>
        <button><img src={require("../images/Studia.png")} alt="studia"/></button>
        <button><img src={require("../images/Arkusze.png")} alt="arkusze"/></button>
      </div>
    </div>
  );
}
export default HomePage;
