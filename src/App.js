import "./App.css";
import React from "react";
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
    };
  }
  render() {
    const filmyYTLinki = [
      [ 
        "https://www.youtube.com/embed/naq9D6jvnhA",
        ["film-podstawa2", "film-rozszerzenie2"],
        "Matematyka - Wielomiany jednej zmiennej (część I)",
        "8",
        "youtube",
      ],
      [
        "https://www.youtube.com/embed/ev_-R-3W_yo",
        ["film-podstawa2", "film-rozszerzenie2"],
        "Co to jest wielomian? #1 [ Wielomiany ]",
        "8",
        "youtube",
      ],
      [
        "https://www.youtube.com/embed/V2D8wYNpAk8",
        ["film-podstawa2", "film-rozszerzenie2"],
        "Dodawanie i odejmowanie wielomianów",
        "8",
        "youtube",
      ],
      [
        "https://www.youtube.com/embed/VZA09ymFcV4",
        ["film-podstawa2", "film-rozszerzenie2"],
        "Szybko i na temat. Dzielenie Wielomianów Krok po Kroku",
        "8",
        "youtube",
      ],
      [
        "https://www.youtube.com/embed/77CgfPFONWE",
        ["film-podstawa2", "film-rozszerzenie2"],
        "Sprawdzian na 5!WIELOMIANY (rozkład na czynniki, dzielenie, Horner, równania, TW o reszcie/Bézouta)",
        "8",
        "youtube",
      ],
      [
        "https://www.youtube.com/embed/KLjji_I3XvA",
        ["film-podstawa2", "film-rozszerzenie2"],
        "Liceum. Klasa II. Wielomiany. Nierówności wielomianowe",
        "8",
        "youtube",
      ],
      [
        "https://www.youtube.com/embed/vQgrdSAjYaE",
        ["film-podstawa2", "film-rozszerzenie2"],
        "Dodawanie, odejmowanie i mnożenie wielomianów #3 [ Wielomiany ]",
        "8",
        "youtube",
      ],
      [
        "https://www.youtube.com/embed/f_Kv7-oiMLw",
        ["film-podstawa2", "film-rozszerzenie2"],
        "WSZYSTKO o: NIERÓWNOŚCI WIELOMIANOWE. Jak rysować wykres wielomianu?Co to jest krotność pierwiastka?",
        "8",
        "youtube",
      ],
      [
        "https://www.youtube.com/embed/5UaDP_fF8hY",
        ["film-rozszerzenie2"],
        "Wielomiany co trzeba ogarniać? Matura Matematyka Rozszerzenie",
        "8",
        "youtube",
      ],
      [
        "https://www.youtube.com/embed/eQTEXfqLQYE",
        ["film-podstawa2", "film-rozszerzenie2"],
        "Wzory skróconego mnożenia - sześcian sumy i różnicy.",
        "8",
        "youtube",
      ],
      [
        "https://www.youtube.com/embed/ehRXj3GEpIw",
        ["film-rozszerzenie2"],
        "Matura rozszerzona - kurs - wzory skróconego mnożenia",
        "8",
        "youtube",
      ],
      [
        "https://www.youtube.com/embed/Q-lkLAeKtlA",
        ["film-podstawa2", "film-rozszerzenie2"],
        "Jak dzielić (pisemnie) WIELOMIAN przez DWUMIAN na MATURZE PODSTAWOWEJ?",
        "8",
        "youtube",
      ],
      [
        "https://www.youtube.com/embed/9piOqP5jcw4",
        ["film-podstawa2", "film-rozszerzenie2"],
        "Dzielenie wielomianów #4 [ Wielomiany ]",
        "8",
        "youtube",
      ],
      [
        "https://www.youtube.com/embed/msfZ8_eHIoM",
        ["film-podstawa2", "film-rozszerzenie2"],
        "Pierwiastki całkowite oraz wymierne wielomianu #8 [ Wielomiany ]",
        "8",
        "youtube",
      ],
      [
        "https://www.youtube.com/embed/5ywgT7USp4Y",
        ["film-rozszerzenie2"],
        "Wielomiany na poziomie rozszerzonym",
        "8",
        "youtube",
      ],
    ];
    return (
      <div className="website">
        <nav id="navbar-top">
          <div id="home">
            <button
              id="home-button"
              onClick={() => this.setState({ homeClicked: true, clicked: "" })}
            >
              <img
                src={require("./images/LogoStrony.jpg")}
                alt="Strona główna"
              />
              <div id="mat-zone"><span>Mat</span>Zone</div>
            </button>
          </div>
          <div id="top-buttons">
            <button>Korepetycje</button>
            <button>Studia</button>
            <button>Arkusze</button>
          </div>
          <div id="show-nav">
            {!this.state.showNavbar ? (
              <button
                onClick={() => {
                  this.setState({ showNavbar: true });
                }}
              >
                <i className="fa fa-bars"></i>
              </button>
            ) : (
              <button
                onClick={() => {
                  this.setState({ showNavbar: false });
                }}
              >
                <i className="fa fa-bars"></i>
              </button>
            )}
          </div>
        </nav>

        {this.state.showNavbar ? (
          <nav id="right-nav">
            <div id="klasa-picker">
              <div className="klasa">
                <div
                  id="klasa1"
                  className="klasa-name"
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
                        this.setState({
                          clicked: "podstawa1",
                          homeClicked: false,
                        })
                      }
                    >
                      Podstawa
                    </div>

                    <div
                      className="podstawa-i-rozszerzenie rozszerzenie"
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
              </div>
              <div className="klasa">
                <div
                  id="klasa2"
                  className="klasa-name"
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
                        this.setState({
                          clicked: "podstawa2",
                          homeClicked: false,
                        })
                      }
                    >
                      Podstawa
                    </div>
                    <div
                      className="podstawa-i-rozszerzenie rozszerzenie"
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
              </div>
              <div className="klasa">
                <div
                  id="klasa3"
                  className="klasa-name"
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
                        this.setState({
                          clicked: "podstawa3",
                          homeClicked: false,
                        })
                      }
                    >
                      Podstawa
                    </div>
                    <div
                      className="podstawa-i-rozszerzenie rozszerzenie"
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
              </div>
              <div className="klasa">
                <div
                  id="klasa4"
                  className="klasa-name"
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
                        this.setState({
                          clicked: "podstawa4",
                          homeClicked: false,
                        })
                      }
                    >
                      Podstawa
                    </div>
                    <div
                      className="podstawa-i-rozszerzenie rozszerzenie"
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
              </div>
            </div>
          </nav>
        ) : (
          ""
        )}
        {!this.state.homeClicked ? (
          <div id="content-picker">
            <div id="dzial-select">
              <div id="dzial">Dział:</div>
              {this.state.clicked.indexOf("1") !== -1 ? (
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
              ) : this.state.clicked.indexOf("2") !== -1 ? (
                <select
                  onChange={(event) => {
                    this.setState({ dzial: event.target.value });
                  }}
                >
                  <option value="1">Przekształcenia wykresów funkcji</option>
                  <option value="2">
                    Równania i nierówności z wartością bezwzględną
                  </option>
                  <option value="3">Funkcja kwadratowa</option>
                  <option value="4">Geometria płaska - okręgi i koła</option>
                  <option value="5">Trygonometria</option>
                  <option value="6">Geometria analityczna</option>
                  <option value="7">
                    Geometria płaska - rozwiązywanie trójkątów
                  </option>
                  <option value="8">Wielomiany</option>
                </select>
              ) : this.state.clicked.indexOf("3") !== -1 ? (
                <select
                  onChange={(event) => {
                    this.setState({ dzial: event.target.value });
                  }}
                >
                  <option value="1">Ułamki algebraiczne</option>
                  <option value="2">Ciągi</option>
                  <option value="3">Kombinatoryka</option>
                  <option value="4">Geometria płaska - czworokąty</option>
                  <option value="5">Geometria płaska - pole czworokąta</option>
                  <option value="6">Elementaż analizy matematycznej</option>
                  <option value="7">Trygonometria</option>
                  <option value="8">Geometria analityczna</option>
                </select>
              ) : this.state.clicked.indexOf("4") !== -1 ? (
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
              ) : (
                ""
              )}
            </div>
            <div id="zrodlo-select">
              <div>Źródło:</div>
              <select
                onChange={(event) =>
                  this.setState({ zrodlo: event.target.value })
                }
              >
                <option value="youtube">Youtube</option>
                <option value="artykul">Artykuł</option>
              </select>
            </div>
            <button>Karta wzorów</button>
          </div>
        ) : (
          ""
        )}
        <div id="content">
          {this.state.homeClicked ? (
            <div id="home-page">
              <div id="welcome">
                Cała wiedza w <br /> <span>jednym miejscu!</span>
              </div>
              <div id="big-buttons">
                <button>Korki logo</button>
                <button>Studia logo</button>
                <button>Arkusze logo</button>
              </div>
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
                    x[3] === this.state.dzial &&
                    x[4] === this.state.zrodlo
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
                ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;