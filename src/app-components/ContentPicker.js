import React from "react";
import { useAtom } from "jotai";
import { ShowContentPicker } from "../App";
function ContentPicker(props) {
  const [showContentPicker, setShowContentPicker] = useAtom(ShowContentPicker);
  const toggleShowContentPicker = () => {
    const trueOrFalse = showContentPicker === true ? false : true;
    setShowContentPicker(trueOrFalse);
  };
  let width = window.innerWidth;
  return (
    <div
      className={`content-picker ${
        width > 700 ? "wide-content-picker" : "thin-content-picker"
      } ${showContentPicker ? "show-content-picker" : ""}`}
    >
      {width <= 700 ? (
        <button
          id="show-content-picker-button"
          onClick={toggleShowContentPicker}
        >
          <i className="fa-solid fa-chevron-down"></i>
        </button>
      ) : null}
      <div id="klasa-select" className="content-picker-section">
        <div id="klasa"></div>
        <select
          className="content-picker-select"
          onChange={(event) => {
            props.updateState("klasa", event.target.value);
          }}
        >
          <option value="1">Klasa 1</option>
          <option value="2">Klasa 2</option>
          <option value="3">Klasa 3</option>
          <option value="4">Klasa 4</option>
        </select>
      </div>
      <div id="zakres-select" className="content-picker-section">
        <div id="zakres">Zakres</div>
        <select
          className="content-picker-select"
          onChange={(event) => {
            props.updateState("zakres", event.target.value);
          }}
        >
          <option value="podstawa">Podstawa</option>
          <option value="rozszerzenie">Rozszerzenie</option>
        </select>
      </div>
      <div id="temat-select" className="content-picker-section">
        <div id="temat">Temat</div>
        <select
          className="content-picker-select"
          onChange={(event) => {
            props.updateState("temat", event.target.value);
          }}
        >
          <option value="jakistemat">jakistemat</option>
          <option value="innytemat">innytemat</option>
        </select>
      </div>
      <div id="dzial-select" className="content-picker-section">
        <div id="dzial">Dział</div>
        {props.klasa === "1" && props.zakres === "podstawa" ? (
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
        ) : props.klasa === "1" && props.zakres === "rozszerzenie" ? (
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
        ) : props.klasa === "2" && props.zakres === "podstawa" ? (
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
        ) : props.klasa === "2" && props.zakres === "rozszerzenie" ? (
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
        ) : props.klasa === "3" && props.zakres === "podstawa" ? (
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
        ) : props.klasa === "3" && props.zakres === "rozszerzenie" ? (
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
        ) : props.klasa === "4" && props.zakres === "podstawa" ? (
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
        ) : props.klasa === "4" && props.zakres === "rozszerzenie" ? (
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
      <div id="zrodlo-select" className="content-picker-section">
        <div id="zrodlo">Źródło</div>
        <select
          className="content-picker-select"
          onChange={(event) => props.updateState("zrodlo", event.target.value)}
        >
          <option value="youtube">Youtube</option>
          <option value="artykul">Artykuł</option>
        </select>
      </div>
    </div>
  );
}
export default ContentPicker;
