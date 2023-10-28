import "./App.css";
import React from "react";
import { Routes, Route } from "react-router-dom";
import NavBar from "./app-components/NavBar";
import RightNav from "./app-components/RightNav";
import HomePage from "./app-components/HomePage";
import VideoPlayer from "./app-components/VideoPlayer";
import Korepetycje from "./app-components/Korepetycje";
import Studia from "./app-components/Studia";
import Arkusze from "./app-components/Arkusze";
import filmyYtLinki from "./filmyYTLinki";
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
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
          darkMode={this.state.darkMode}
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
          <Routes>
            <Route
              path="/"
              element={
                <HomePage
                  updateState={this.updateState}
                  darkMode={this.state.darkMode}
                />
              }
            />
            <Route
              path="materialy"
              element={
                <VideoPlayer
                  updateState={this.updateState}
                  klasa={this.state.klasa}
                  zakres={this.state.zakres}
                  dzial={this.state.dzial}
                  temat={this.state.temat}
                  zrodlo={this.state.zrodlo}
                  wypiszFilmy={this.wypiszFilmy}
                  filmyYTLinki={this.filmyYTLinki}
                />
              }
            />
            <Route
              path="korepetycje"
              element={
                <Korepetycje
                  updateState={this.updateState}
                  lokalizacjaInput={this.state.lokalizacjaInput}
                  lokalizacjaSubmit={this.state.lokalizacjaSubmit}
                />
              }
            />
            <Route
              path="studia"
              element={
                <Studia
                  updateState={this.updateState}
                />
              }
            />
            <Route
              path="arkusze"
              element={
                <Arkusze
                  updateState={this.updateState}
                />
              }
            />
          </Routes>
        </div>
      </div>
    );
  }
}

export default App;
