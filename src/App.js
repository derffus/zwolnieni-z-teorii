import "./App.css";
import React from "react";
import NavBar from "./app-components/NavBar";
import RightNav from "./app-components/RightNav";
import ContentPicker from "./app-components/ContentPicker";
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
      selectedKlasa1: false,
      selectedKlasa2: false,
      selectedKlasa3: false,
      selectedKlasa4: false,
      clicked: "",
      dzial: "1",
      zrodlo: "youtube",
      shuffled: true,
      lokalizacjaInput: "",
      lokalizacjaSubmit: "",
    };
    this.updateState = this.updateState.bind(this);
    this.shuffleFilmy = this.shuffleFilmy.bind(this);
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
  shuffleFilmy() {
    this.filmyYTLinki = this.shuffle(this.filmyYTLinki);
    this.setState({
      shuffled: true,
    });
  }
  wypiszFilmy(filmy, clicked, dzial, zrodlo) {
    return filmy
      .filter(
        (x) =>
          x[1].indexOf("film-" + clicked) !== -1 &&
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
        {this.state.showNavbar && !this.state.home ? (
          <RightNav
            updateState={this.updateState}
            home={this.state.home}
            materialy={this.state.materialy}
            korepetycje={this.state.korepetycje}
            studia={this.state.studia}
            arkusze={this.state.arkusze}
            selectedKlasa1={this.state.selectedKlasa1}
            selectedKlasa2={this.state.selectedKlasa2}
            selectedKlasa3={this.state.selectedKlasa3}
            selectedKlasa4={this.state.selectedKlasa4}
            clicked={this.state.clicked}
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
              clicked={this.state.clicked}
              dzial={this.state.dzial}
              zrodlo={this.state.zrodlo}
              shuffled={this.state.shuffled}
              shuffleFilmy={this.shuffleFilmy}
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
