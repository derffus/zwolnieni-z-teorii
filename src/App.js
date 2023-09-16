import "./App.css";
import React from "react";
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      homeClicked: true,
      selectedKlasa1: false,
      selectedKlasa2: false,
      selectedKlasa3: false,
      selectedKlasa4: false,
      clicked: "",
      dzial: "1",
    };
  }  
  render() {
    const filmyYTLinki = [
      [
        "https://www.youtube.com/embed/naq9D6jvnhA",
        ["film-podstawa2", "film-rozszerzenie2"],
        "Matematyka - Wielomiany jednej zmiennej (część I)",
        "8",
      ],
      [
        "https://www.youtube.com/embed/ev_-R-3W_yo",
        ["film-podstawa2", "film-rozszerzenie2"],
        "Co to jest wielomian? #1 [ Wielomiany ]",
        "8",
      ],
      [
        "https://www.youtube.com/embed/V2D8wYNpAk8",
        ["film-podstawa2", "film-rozszerzenie2"],
        "Dodawanie i odejmowanie wielomianów",
        "8",
      ],
      [
        "https://www.youtube.com/embed/VZA09ymFcV4",
        ["film-podstawa2", "film-rozszerzenie2"],
        "Szybko i na temat. Dzielenie Wielomianów Krok po Kroku",
        "8",
      ],
    ];
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
            <button id="home-button" onClick={()=>this.setState({homeClicked:true, clicked: ''})}>
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
                  onClick={() =>
                    this.setState({ clicked: "podstawa1", homeClicked: false })
                  }
                >
                  Podstawa
                </div>

                <div
                  className="podstawa-i-rozszerzenie"
                  id="rozszerzenie1"
                  onClick={() =>
                    this.setState({
                      clicked: "rozszerzenie1",
                      homeClicked: false,
                    })
                  }
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
                  onClick={() =>
                    this.setState({ clicked: "podstawa2", homeClicked: false })
                  }
                >
                  Podstawa
                </div>
                <div
                  className="podstawa-i-rozszerzenie"
                  id="rozszerzenie2"
                  onClick={() =>
                    this.setState({
                      clicked: "rozszerzenie2",
                      homeClicked: false,
                    })
                  }
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
                  onClick={() =>
                    this.setState({ clicked: "podstawa3", homeClicked: false })
                  }
                >
                  Podstawa
                </div>
                <div
                  className="podstawa-i-rozszerzenie"
                  id="rozszerzenie3"
                  onClick={() =>
                    this.setState({
                      clicked: "rozszerzenie3",
                      homeClicked: false,
                    })
                  }
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
                  onClick={() =>
                    this.setState({ clicked: "podstawa4", homeClicked: false })
                  }
                >
                  Podstawa
                </div>
                <div
                  className="podstawa-i-rozszerzenie"
                  id="rozszerzenie4"
                  onClick={() =>
                    this.setState({
                      clicked: "rozszerzenie4",
                      homeClicked: false,
                    })
                  }
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
            <select
              onChange={(event) => {
                this.setState({ dzial: event.target.value });
              }}
            >
              <option value="1">I</option>
              <option value="2">II</option>
              <option value="3">III</option>
              <option value="4">IV</option>
              <option value="5">V</option>
              <option value="6">VI</option>
              <option value="7">VII</option>
              <option value="8">VIII</option>
            </select>
          </div>
          <div id="zrodlo-select">
            <div>Źródło:</div>
            <select>
              <option>Youtube</option>
              <option>Artykuł</option>
            </select>
          </div>
          <button>Karta wzorów</button>          
        </div>
        <div id="content">
          {this.state.homeClicked ? (
            <div id="home-page">
              <button></button>
              <button></button>
              <button></button>
            </div>
          ) : (
            ""
          )}

          <div className="na-stronie">
            
            <div className="filmy">
              {filmyYTLinki
                .filter(
                  (x) =>
                    x[1].indexOf("film-" + this.state.clicked) !== -1 &&
                    x[3] === this.state.dzial
                )
                .map((x) => (
                  <iframe
                    className={x[1].join(' ')}
                    src={x[0]}
                    title={x[2]}
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen="true"
                  ></iframe>
                ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;