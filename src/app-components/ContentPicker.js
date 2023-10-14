import React from "react";
function ContentPicker(props) {
  return (
    <div id="content-picker">
      <div id="dzial-select">
        <div id="dzial">Dział:</div>
        {props.clicked === "podstawa1" ? (
          <select
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
        ) : props.clicked === "podstawa2" ? (
          <select
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
            <option value="5">V</option>
            <option value="6">VI</option>
            <option value="7">VII</option>
            <option value="8">VIII</option>
          </select>
        ) : props.clicked === "rozszerzenie2" ? (
          <select
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
        ) : (
          ""
        )}
      </div>
      <div id="zrodlo-select">
        <div>Źródło:</div>
        <select
          onChange={(event) => props.updateState( 'zrodlo', event.target.value )}
        >
          <option value="youtube">Youtube</option>
          <option value="artykul">Artykuł</option>
        </select>
      </div>
      <button>Karta wzorów</button>
    </div>
  );
}
export default ContentPicker;
