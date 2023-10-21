import "./App.css";
import React from "react";
import NavBar from "./app-components/NavBar";
import RightNav from "./app-components/RightNav";
import HomePage from "./app-components/HomePage";
import VideoPlayer from "./app-components/VideoPlayer";
import Korepetycje from "./app-components/Korepetycje";
import Studia from "./app-components/Studia";
import Arkusze from "./app-components/Arkusze";
import filmyYtLinki from "./filmyYTLinki";
import $ from "jquery";
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      home: true,
      materialy: false,
      korepetycje: false,
      studia: false,
      arkusze: false,
      showNavbar: false,
      darkMode: false,
      klasa: "1",
      zakres: "podstawa",
      dzial: "1",
      temat: "",
      zrodlo: "youtube",
      lokalizacjaInput: "",
      lokalizacjaSubmit: "",
    };
    this.updateState = this.updateState.bind(this);
  }
  updateState(prop, newValue) {
    this.setState({
      [prop]: newValue,
    });
  }
  segmentOpened(segment) {
    $(`#${segment}`).addClass("nav-clicked");
  }
  segmentClosed(segment) {
    $(`#${segment}`).removeClass("nav-clicked");
  }
  shuffle(array) {
    let currentIndex = array.length,
      randomIndex;
    while (currentIndex > 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex],
        array[currentIndex],
      ];
    }
    return array;
  }
  wypiszFilmy(filmy, klasa, zakres, dzial, temat, zrodlo) {
    return filmy
      .filter(
        (x) =>
          x[1].indexOf("film-" + zakres + klasa) !== -1 &&
          x[3] === dzial &&
          x[4] === zrodlo
      )
      .map((x) => (
        <iframe
          key={x}
          className={x[1].join(" ")}
          src={x[0]}
          title={x[2]}
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen="true"
        ></iframe>
      ));
  }
  componentDidMount() {
    this.filmyYTLinki = this.shuffle(this.filmyYTLinki);
  }
  filmyYTLinki = filmyYtLinki;
  render() {
    return (
      <div className="website">
        <NavBar
          updateState={this.updateState}
          showNavbar={this.state.showNavbar}
          home={this.state.home}
        />
        {this.state.showNavbar ? (
          <RightNav
            updateState={this.updateState}
            darkMode={this.state.darkMode}
          />
        ) : (
          ""
        )}
        <div id="content">
          {this.state.home ? (
            <HomePage
              updateState={this.updateState}
              segmentOpened={this.segmentOpened}
              segmentClosed={this.segmentClosed}
            />
          ) : this.state.materialy ? (
            <VideoPlayer
              updateState={this.updateState}
              segmentOpened={this.segmentOpened}
              segmentClosed={this.segmentClosed}
              klasa={this.state.klasa}
              zakres={this.state.zakres}
              dzial={this.state.dzial}
              zrodlo={this.state.zrodlo}
              wypiszFilmy={this.wypiszFilmy}
              filmyYTLinki={this.filmyYTLinki}
            />
          ) : this.state.korepetycje ? (
            <Korepetycje
              updateState={this.updateState}
              segmentOpened={this.segmentOpened}
              segmentClosed={this.segmentClosed}
              lokalizacjaInput={this.state.lokalizacjaInput}
              lokalizacjaSubmit={this.state.lokalizacjaSubmit}
            />
          ) : this.state.studia ? (
            <Studia
              updateState={this.updateState}
              segmentOpened={this.segmentOpened}
              segmentClosed={this.segmentClosed}
            />
          ) : this.state.arkusze ? (
            <Arkusze
              updateState={this.updateState}
              segmentOpened={this.segmentOpened}
              segmentClosed={this.segmentClosed}
            />
          ) : null}
        </div>
      </div>
    );
  }
}

export default App;
