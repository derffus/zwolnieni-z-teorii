import "./App.css";
import React from "react";
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      homeClicked: true,
      selectedKlasa1: false,
      clickedKlasa1Podstawa: false,
      clickedKlasa1Rozszerzenie: false,
      selectedKlasa2: false,
      clickedKlasa2Podstawa: false,
      clickedKlasa2Rozszerzenie: false,
      selectedKlasa3: false,
      clickedKlasa3Podstawa: false,
      clickedKlasa3Rozszerzenie: false,
      selectedKlasa4: false,
      clickedKlasa4Podstawa: false,
      clickedKlasa4Rozszerzenie: false,
    };
    this.falseOnOtherClickers = this.falseOnOtherClickers.bind(this);
  }
  falseOnOtherClickers = (event) => {
    switch (event.target.id) {
      case "podstawa1":
        this.setState({
          homeClicked: false,
          clickedKlasa1Podstawa: true,
          clickedKlasa1Rozszerzenie: false,
          clickedKlasa2Podstawa: false,
          clickedKlasa2Rozszerzenie: false,
          clickedKlasa3Podstawa: false,
          clickedKlasa3Rozszerzenie: false,
          clickedKlasa4Podstawa: false,
          clickedKlasa4Rozszerzenie: false,
        });
        break;
      case "rozszerzenie1":
        this.setState({
          homeClicked: false,
          clickedKlasa1Podstawa: true,
          clickedKlasa1Rozszerzenie: true,
          clickedKlasa2Podstawa: false,
          clickedKlasa2Rozszerzenie: false,
          clickedKlasa3Podstawa: false,
          clickedKlasa3Rozszerzenie: false,
          clickedKlasa4Podstawa: false,
          clickedKlasa4Rozszerzenie: false,
        });
        break;
      case "podstawa2":
        this.setState({
          homeClicked: false,
          clickedKlasa1Podstawa: false,
          clickedKlasa1Rozszerzenie: false,
          clickedKlasa2Podstawa: true,
          clickedKlasa2Rozszerzenie: false,
          clickedKlasa3Podstawa: false,
          clickedKlasa3Rozszerzenie: false,
          clickedKlasa4Podstawa: false,
          clickedKlasa4Rozszerzenie: false,
        });
        break;
      case "rozszerzenie2":
        this.setState({
          homeClicked: false,
          clickedKlasa1Podstawa: false,
          clickedKlasa1Rozszerzenie: false,
          clickedKlasa2Podstawa: true,
          clickedKlasa2Rozszerzenie: true,
          clickedKlasa3Podstawa: false,
          clickedKlasa3Rozszerzenie: false,
          clickedKlasa4Podstawa: false,
          clickedKlasa4Rozszerzenie: false,
        });
        break;
      case "podstawa3":
        this.setState({
          homeClicked: false,
          clickedKlasa1Podstawa: false,
          clickedKlasa1Rozszerzenie: false,
          clickedKlasa2Podstawa: false,
          clickedKlasa2Rozszerzenie: false,
          clickedKlasa3Podstawa: true,
          clickedKlasa3Rozszerzenie: false,
          clickedKlasa4Podstawa: false,
          clickedKlasa4Rozszerzenie: false,
        });
        break;
      case "rozszerzenie3":
        this.setState({
          homeClicked: false,
          clickedKlasa1Podstawa: false,
          clickedKlasa1Rozszerzenie: false,
          clickedKlasa2Podstawa: false,
          clickedKlasa2Rozszerzenie: false,
          clickedKlasa3Podstawa: true,
          clickedKlasa3Rozszerzenie: true,
          clickedKlasa4Podstawa: false,
          clickedKlasa4Rozszerzenie: false,
        });
        break;
      case "podstawa4":
        this.setState({
          homeClicked: false,
          clickedKlasa1Podstawa: false,
          clickedKlasa1Rozszerzenie: false,
          clickedKlasa2Podstawa: false,
          clickedKlasa2Rozszerzenie: false,
          clickedKlasa3Podstawa: false,
          clickedKlasa3Rozszerzenie: false,
          clickedKlasa4Podstawa: true,
          clickedKlasa4Rozszerzenie: false,
        });
        break;
      case "rozszerzenie4":
        this.setState({
          homeClicked: false,
          clickedKlasa1Podstawa: false,
          clickedKlasa1Rozszerzenie: false,
          clickedKlasa2Podstawa: false,
          clickedKlasa2Rozszerzenie: false,
          clickedKlasa3Podstawa: false,
          clickedKlasa3Rozszerzenie: false,
          clickedKlasa4Podstawa: true,
          clickedKlasa4Rozszerzenie: true,
        });
        break;
      case "home-button":
        this.setState({
          homeClicked: true,
          clickedKlasa1Podstawa: false,
          clickedKlasa1Rozszerzenie: false,
          clickedKlasa2Podstawa: false,
          clickedKlasa2Rozszerzenie: false,
          clickedKlasa3Podstawa: false,
          clickedKlasa3Rozszerzenie: false,
          clickedKlasa4Podstawa: false,
          clickedKlasa4Rozszerzenie: false,
        });
        break;
      default:
        break;
    }
  };
  render() {
    return (
      <div id="website">
        <nav id="navbar-top">
          <div id="top-buttons">
            <button>Korepetycje</button>
            <button>Studia</button>
            <button>Arkusze</button>
            <button>Korepetycje</button>
          </div>
          <div id="logowanie">
            <button>Zaloguj się</button>
            <button>Zarejestruj się</button>
          </div>
        </nav>
        <div id="left-side">
          <div id="home">
            <button id="home-button" onClick={this.falseOnOtherClickers}>
              Home
            </button>
          </div>
          <nav id="navbar-left">
            <div
              id="klasa1"
              onMouseOver={() => {
                this.setState({ selectedKlasa1: true });
              }}
              onMouseOut={() => {
                this.setState({ selectedKlasa1: false });
              }}
            >
              Klasa I
            </div>
            {this.state.selectedKlasa1 === true ? (
              <div
                className="klasa-div"
                onMouseOver={() => {
                  this.setState({ selectedKlasa1: true });
                }}
                onMouseOut={() => {
                  this.setState({ selectedKlasa1: false });
                }}
              >
                <div
                  className="podstawa-i-rozszerzenie podstawa"
                  id="podstawa1"
                  onClick={this.falseOnOtherClickers}
                >
                  Podstawa
                </div>

                <div
                  className="podstawa-i-rozszerzenie"
                  id="rozszerzenie1"
                  onClick={this.falseOnOtherClickers}
                >
                  Rozszerzenie
                </div>
              </div>
            ) : (
              ""
            )}
            <div
              id="klasa2"
              onMouseOver={() => {
                this.setState({ selectedKlasa2: true });
              }}
              onMouseOut={() => {
                this.setState({ selectedKlasa2: false });
              }}
            >
              Klasa II
            </div>
            {this.state.selectedKlasa2 === true ? (
              <div
                className="klasa-div"
                onMouseOver={() => {
                  this.setState({ selectedKlasa2: true });
                }}
                onMouseOut={() => {
                  this.setState({ selectedKlasa2: false });
                }}
              >
                <div
                  className="podstawa-i-rozszerzenie podstawa"
                  id="podstawa2"
                  onClick={this.falseOnOtherClickers}
                >
                  Podstawa
                </div>
                <div
                  className="podstawa-i-rozszerzenie"
                  id="rozszerzenie2"
                  onClick={this.falseOnOtherClickers}
                >
                  Rozszerzenie
                </div>
              </div>
            ) : (
              ""
            )}
            <div
              id="klasa3"
              onMouseOver={() => {
                this.setState({ selectedKlasa3: true });
              }}
              onMouseOut={() => {
                this.setState({ selectedKlasa3: false });
              }}
            >
              Klasa III
            </div>
            {this.state.selectedKlasa3 === true ? (
              <div
                className="klasa-div"
                onMouseOver={() => {
                  this.setState({ selectedKlasa3: true });
                }}
                onMouseOut={() => {
                  this.setState({ selectedKlasa3: false });
                }}
              >
                <div
                  className="podstawa-i-rozszerzenie podstawa"
                  id="podstawa3"
                  onClick={this.falseOnOtherClickers}
                >
                  Podstawa
                </div>
                <div
                  className="podstawa-i-rozszerzenie"
                  id="rozszerzenie3"
                  onClick={this.falseOnOtherClickers}
                >
                  Rozszerzenie
                </div>
              </div>
            ) : (
              ""
            )}
            <div
              id="klasa4"
              onMouseOver={() => {
                this.setState({ selectedKlasa4: true });
              }}
              onMouseOut={() => {
                this.setState({ selectedKlasa4: false });
              }}
            >
              Klasa IV
            </div>
            {this.state.selectedKlasa4 === true ? (
              <div
                className="klasa-div"
                onMouseOver={() => {
                  this.setState({ selectedKlasa4: true });
                }}
                onMouseOut={() => {
                  this.setState({ selectedKlasa4: false });
                }}
              >
                <div
                  className="podstawa-i-rozszerzenie podstawa"
                  id="podstawa4"
                  onClick={this.falseOnOtherClickers}
                >
                  Podstawa
                </div>
                <div
                  className="podstawa-i-rozszerzenie"
                  id="rozszerzenie4"
                  onClick={this.falseOnOtherClickers}
                >
                  Rozszerzenie
                </div>
              </div>
            ) : (
              ""
            )}
          </nav>
        </div>
        <div id="content-picker">
          <div id="dzial-select">
            <div>Dział:</div>
            <select >
              <option>I</option>
              <option>II</option>
              <option>III</option>
              <option>IV</option>
              <option>V</option>
              <option>VI</option>
              <option>VII</option>
              <option>VIII</option>
            </select>
          </div>
          <div id="zrodlo-select">
            <div>Źródło:</div>
            <select >
              <option>Youtube</option>
              <option>Artykuł</option>
            </select>
          </div>
          <button>Karta wzorów</button>
        </div>
        <div id="content">
          {this.state.homeClicked ? <div>Witam na stronie</div> : ""}

          {this.state.clickedKlasa1Podstawa ? (
            <div>Filmiki dla podstawy klasa 1:</div>
          ) : (
            ""
          )}
          {this.state.clickedKlasa1Rozszerzenie ? (
            <div>Filmiki dla rozszerzenie klasa 1:</div>
          ) : (
            ""
          )}
          {this.state.clickedKlasa2Podstawa ? (
            <div className="na-stronie">
              <div>Filmiki dla podstawy klasa 2:</div>
              <div className="filmy">
                <iframe
                  id="video"
                  src="https://www.youtube.com/embed/naq9D6jvnhA"
                  title="Matematyka - Wielomiany jednej zmiennej (część I)"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                ></iframe>
                <iframe
                  src="https://www.youtube.com/embed/ev_-R-3W_yo"
                  title="Co to jest wielomian? #1 [ Wielomiany ]"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                ></iframe>
                <iframe
                  src="https://www.youtube.com/embed/V2D8wYNpAk8"
                  title="Dodawanie i odejmowanie wielomianów"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                ></iframe>
                <iframe
                  src="https://www.youtube.com/embed/VZA09ymFcV4"
                  title="Szybko i na temat. Dzielenie Wielomianów Krok po Kroku"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                ></iframe>
              </div>
            </div>
          ) : (
            ""
          )}
          {this.state.clickedKlasa2Rozszerzenie ? (
            <div>Filmiki dla rozszerzenie klasa 2:</div>
          ) : (
            ""
          )}
          {this.state.clickedKlasa3Podstawa ? (
            <div>Filmiki dla podstawy klasa 3:</div>
          ) : (
            ""
          )}
          {this.state.clickedKlasa3Rozszerzenie ? (
            <div>Filmiki dla rozszerzenie klasa 3:</div>
          ) : (
            ""
          )}
          {this.state.clickedKlasa4Podstawa ? (
            <div>Filmiki dla podstawy klasa 4:</div>
          ) : (
            ""
          )}
          {this.state.clickedKlasa4Rozszerzenie ? (
            <div>Filmiki dla rozszerzenie klasa 4:</div>
          ) : (
            ""
          )}
        </div>
      </div>
    );
  }
}

export default App;
