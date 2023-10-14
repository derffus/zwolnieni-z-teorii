import "./App.css";
import React from "react";
import NavBar from "./app-components/NavBar";
import RightNav from "./app-components/RightNav";
import ContentPicker from "./app-components/ContentPicker";
import HomePage from "./app-components/HomePage";
import VideoPlayer from "./app-components/VideoPlayer";
import filmyYtLInki from "./filmyYTLinki";
import $ from "jquery";
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      homeClicked: true,
      showNavbar: false,
      selectedKlasa1: false,
      selectedKlasa2: false,
      selectedKlasa3: false,
      selectedKlasa4: false,
      clicked: "",
      dzial: "1",
      zrodlo: "youtube",
      shuffled: true,
    };
    this.updateState = this.updateState.bind(this);
    this.shuffleFilmy = this.shuffleFilmy.bind(this);
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
  shuffleFilmy() {
    this.filmyYTLinki = this.shuffle(this.filmyYTLinki);
    this.setState({
      shuffled: true,
    });
  }
  wypiszFilmy(filmy,clicked,dzial,zrodlo) {
    return filmy
      .filter(
        (x) =>
          x[1].indexOf("film-" + clicked) !== -1 &&
          x[3] === dzial &&
          x[4] === zrodlo
      )
      .map((x) => (
        <iframe
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
  filmyYTLinki = filmyYtLInki;
  render() {
    return (
      <div className="website">
        <NavBar
          updateState={this.updateState}
          showNavbar={this.state.showNavbar}
        />
        {this.state.showNavbar ? (
          <RightNav
            updateState={this.updateState}
            selectedKlasa1={this.state.selectedKlasa1}
            selectedKlasa2={this.state.selectedKlasa2}
            selectedKlasa3={this.state.selectedKlasa3}
            selectedKlasa4={this.state.selectedKlasa4}
          />
        ) : (
          ""
        )}
        {!this.state.homeClicked ? (
          <ContentPicker
            updateState={this.updateState}
            clicked={this.state.clicked}
          />
        ) : (
          ""
        )}
        <div id="content">
          {this.state.homeClicked ? (
            <HomePage />
          ) : (
            <VideoPlayer
              updateState={this.updateState}
              clicked={this.state.clicked}
              dzial={this.state.dzial}
              zrodlo={this.state.zrodlo}
              shuffled={this.state.shuffled}
              shuffleFilmy={this.shuffleFilmy}
              wypiszFilmy={this.wypiszFilmy}
              filmyYTLinki={this.filmyYTLinki}
            />
          )}
        </div>
      </div>
    );
  }
}

export default App;
