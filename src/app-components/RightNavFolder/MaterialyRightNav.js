import React from "react";
import Select from "react-select";
import DzialOptions from "./DzialOptions";
function MaterialyRightNav(props) {
  return (
    <div id="materialy-right-nav">
      <div id="klasa-picker">
        <div className="klasa">
          <div
            id="klasa1"
            className="klasa-name"
            onMouseOver={() => {
              props.updateState("selectedKlasa1", true);
            }}
            onMouseOut={() => {
              props.updateState("selectedKlasa1", false);
            }}
          >
            Klasa I
          </div>
          {props.selectedKlasa1 === true ? (
            <div
              className="klasa-div"
              onMouseOver={() => {
                props.updateState("selectedKlasa1", true);
              }}
              onMouseOut={() => {
                props.updateState("selectedKlasa1", false);
              }}
            >
              <div
                className="podstawa-i-rozszerzenie podstawa"
                id="podstawa1"
                onClick={() => {
                  props.updateState("clicked", "podstawa1");
                }}
              >
                Podstawa
              </div>

              <div
                className="podstawa-i-rozszerzenie rozszerzenie"
                id="rozszerzenie1"
                onClick={() => {
                  props.updateState("clicked", "rozszerzenie1");
                }}
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
              props.updateState("selectedKlasa2", true);
            }}
            onMouseOut={() => {
              props.updateState("selectedKlasa2", false);
            }}
          >
            Klasa II
          </div>
          {props.selectedKlasa2 === true ? (
            <div
              className="klasa-div"
              onMouseOver={() => {
                props.updateState("selectedKlasa2", true);
              }}
              onMouseOut={() => {
                props.updateState("selectedKlasa2", false);
              }}
            >
              <div
                className="podstawa-i-rozszerzenie podstawa"
                id="podstawa2"
                onClick={() => {
                  props.updateState("clicked", "podstawa2");
                }}
              >
                Podstawa
              </div>
              <div
                className="podstawa-i-rozszerzenie rozszerzenie"
                id="rozszerzenie2"
                onClick={() => {
                  props.updateState("clicked", "rozszerzenie2");
                }}
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
              props.updateState("selectedKlasa3", true);
            }}
            onMouseOut={() => {
              props.updateState("selectedKlasa3", false);
            }}
          >
            Klasa III
          </div>
          {props.selectedKlasa3 === true ? (
            <div
              className="klasa-div"
              onMouseOver={() => {
                props.updateState("selectedKlasa3", true);
              }}
              onMouseOut={() => {
                props.updateState("selectedKlasa3", false);
              }}
            >
              <div
                className="podstawa-i-rozszerzenie podstawa"
                id="podstawa3"
                onClick={() => {
                  props.updateState("clicked", "podstawa3");
                }}
              >
                Podstawa
              </div>
              <div
                className="podstawa-i-rozszerzenie rozszerzenie"
                id="rozszerzenie3"
                onClick={() => {
                  props.updateState("clicked", "rozszerzenie3");
                }}
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
              props.updateState("selectedKlasa4", true);
            }}
            onMouseOut={() => {
              props.updateState("selectedKlasa4", false);
            }}
          >
            Klasa IV
          </div>
          {props.selectedKlasa4 === true ? (
            <div
              className="klasa-div"
              onMouseOver={() => {
                props.updateState("selectedKlasa4", true);
              }}
              onMouseOut={() => {
                props.updateState("selectedKlasa4", false);
              }}
            >
              <div
                className="podstawa-i-rozszerzenie podstawa"
                id="podstawa4"
                onClick={() => {
                  props.updateState("clicked", "podstawa4");
                }}
              >
                Podstawa
              </div>
              <div
                className="podstawa-i-rozszerzenie rozszerzenie"
                id="rozszerzenie4"
                onClick={() => {
                  props.updateState("clicked", "rozszerzenie4");
                }}
              >
                Rozszerzenie
              </div>
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
      <div id="content-picker">
        <div id="dzial-select">
          {props.clicked === "podstawa1" ? (
            <select
              className="content-picker-select"
              onChange={(event) => {
                props.updateState("dzial", event.target.value);
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
          ) : props.clicked === "rozszerzenie1" ? (
            <select
              className="content-picker-select"
              onChange={(event) => {
                props.updateState("dzial", event.target.value);
              }}
            >
              <option value="1">Zbiory liczbowe. Liczby rzeczywiste</option>
              <option value="2">Wyrażenia algebraiczne</option>
              <option value="3">Funkcja i jej własności</option>
              <option value="4">Funkcja linowa</option>
              <option value="5">
                Układy równań liniowych z dwiema niewiadomymi
              </option>
              <option value="6">Podstawowe własności wybranych funkcji</option>
              <option value="7">
                Geometria płaska - pojęcia wstępne. Trójkąty
              </option>
              <option value="8">Trygonometria kąta ostrego</option>
            </select>
          ) : props.clicked === "podstawa2" ? (
            <select
              className="content-picker-select"
              onChange={(event) => {
                props.updateState("dzial", event.target.value);
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
          ) : props.clicked === "rozszerzenie2" ? (
            <select
              className="content-picker-select"
              onChange={(event) => {
                props.updateState("dzial", event.target.value);
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
          ) : props.clicked === "podstawa3" ? (
            <select
              className="content-picker-select"
              onChange={(event) => {
                props.updateState("dzial", event.target.value);
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
          ) : props.clicked === "rozszerzenie3" ? (
            <select
              className="content-picker-select"
              onChange={(event) => {
                props.updateState("dzial", event.target.value);
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
          ) : props.clicked === "podstawa4" ? (
            <select
              className="content-picker-select"
              onChange={(event) => {
                props.updateState("dzial", event.target.value);
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
          ) : props.clicked === "rozszerzenie4" ? (
            <select
              className="content-picker-select"
              onChange={(event) => {
                props.updateState("dzial", event.target.value);
              }}
            >
              <option value="1">Funkcja wykładnicza</option>
              <option value="2">Funkcja logarytmiczna</option>
              <option value="3">Elementy statystyki</option>
              <option value="4">Rachunek prawdopodobieństwa</option>
              <option value="5">Geometria przestrzenna. Wielościany</option>
              <option value="6">Geometria przestrzenna. Bryły obrotowe</option>
            </select>
          ) : (
            ""
          )}
        </div>
        <div id="zrodlo-select">
          <select
            className="content-picker-select"
            onChange={(event) =>
              props.updateState("zrodlo", event.target.value)
            }
          >
            <option value="youtube">Youtube</option>
            <option value="artykul">Artykuł</option>
          </select>
        </div>
        <button className="content-picker-select">Karta wzorów</button>
      </div>
      
    </div>
  );
}
export default MaterialyRightNav;
