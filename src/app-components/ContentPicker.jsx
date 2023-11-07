import React, { useState } from "react";
import tematy from "../dzialyTematy.js";
function ContentPicker(props) {
  const [showContentPicker, setShowContentPicker] = useState(true);

  const width = window.innerWidth;

  const toggleShowContentPicker = () => {
    const trueOrFalse = showContentPicker === true ? false : true;
    setShowContentPicker(trueOrFalse);
  };

  return (
    <div
      className={`content-picker ${
        width > 700 ? "wide-content-picker" : "thin-content-picker"
      } ${showContentPicker ? "show-content-picker" : ""}`}
    >
      {width <= 700 ? (
        <button
          className={`show-content-picker-button ${
            showContentPicker ? "show" : "dont-show"
          }`}
          onClick={toggleShowContentPicker}
        >
          <i className="fa-solid fa-chevron-down"></i>
        </button>
      ) : null}
      <select
        value={props.klasa}
        className="content-picker-select"
        onChange={(event) => {
          props.setKlasa(event.target.value);
        }}
      >
        <option value="" disabled>
          Klasa
        </option>
        <option value="1">Klasa 1</option>
        <option value="2">Klasa 2</option>
        <option value="3">Klasa 3</option>
        <option value="4">Klasa 4</option>
      </select>
      <select
        value={props.zakres}
        className="content-picker-select"
        onChange={(event) => {
          props.setZakres(event.target.value);
        }}
      >
        <option value="" disabled>
          Zakres
        </option>
        <option value="podstawa">Podstawa</option>
        <option value="rozszerzenie">Rozszerzenie</option>
      </select>

      <select
        value={props.dzial}
        className="content-picker-select"
        onChange={(event) => {
          props.setDzial(event.target.value);
        }}
      >
        <option value="" disabled>
          Dział
        </option>
        {props.klasa === "1" && props.zakres === "podstawa" ? (
          <>
            <option value="1">I</option>
            <option value="2">II</option>
            <option value="3">III</option>
            <option value="4">IV</option>
            <option value="5">V</option>
            <option value="6">VI</option>
            <option value="7">VII</option>
            <option value="8">VIII</option>
          </>
        ) : props.klasa === "1" && props.zakres === "rozszerzenie" ? (
          <>
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
          </>
        ) : props.klasa === "2" && props.zakres === "podstawa" ? (
          <>
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
          </>
        ) : props.klasa === "2" && props.zakres === "rozszerzenie" ? (
          <>
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
          </>
        ) : props.klasa === "3" && props.zakres === "podstawa" ? (
          <>
            <option value="1">Ułamki algebraiczne. Równania wymierne</option>
            <option value="2">Ciągi</option>
            <option value="3">Kombinatoryka</option>
            <option value="4">Czworokąty</option>
            <option value="5">Geometria płaska - pole czworokąta</option>
            <option value="6">Geometria analityczna</option>
          </>
        ) : props.klasa === "3" && props.zakres === "rozszerzenie" ? (
          <>
            <option value="1">Ułamki algebraiczne. Równania wymierne</option>
            <option value="2">Ciągi</option>
            <option value="3">Kombinatoryka</option>
            <option value="4">Geometria płaska - czworokąty</option>
            <option value="5">Geometria płaska - pole czworokąta</option>
            <option value="6">Elementaż analizy matematycznej</option>
            <option value="7">Trygonometria</option>
            <option value="8">Geometria analityczna</option>
          </>
        ) : props.klasa === "4" && props.zakres === "podstawa" ? (
          <>
            <option value="1">Funkcja wykładnicza</option>
            <option value="2">Funkcja logarytmiczna</option>
            <option value="3">Elementy statystyki</option>
            <option value="4">Rachunek prawdopodobieństwa</option>
            <option value="5">Geometria przestrzenna. Wielościany</option>
            <option value="6">Geometria przestrzenna. Bryły obrotowe</option>
          </>
        ) : props.klasa === "4" && props.zakres === "rozszerzenie" ? (
          <>
            <option value="1">Funkcja wykładnicza</option>
            <option value="2">Funkcja logarytmiczna</option>
            <option value="3">Elementy statystyki</option>
            <option value="4">Rachunek prawdopodobieństwa</option>
            <option value="5">Geometria przestrzenna. Wielościany</option>
            <option value="6">Geometria przestrzenna. Bryły obrotowe</option>
          </>
        ) : (
          <option value="" disabled>
            Wybierz klasę i zakres
          </option>
        )}
      </select>
      <select
        value={props.temat}
        className="content-picker-select"
        onChange={(event) => {
          props.setTemat(event.target.value);
        }}
      >
        <option value="" disabled>
          Temat
        </option>
        {props.dzial !== "" &&
        tematy[props.klasa][props.zakres][props.dzial] ? (
          <>
            {Object.values(tematy[props.klasa][props.zakres][props.dzial]).map(
              (x, index) => (
                <option key={x + index} value={x}>
                  {x}
                </option>
              )
            )}
          </>
        ) : (
          <option value="" disabled>
            Wybierz klasę, zakres i dział
          </option>
        )}
      </select>
      <select
        value={props.zrodlo}
        className="content-picker-select"
        onChange={(event) => props.setZrodlo(event.target.value)}
      >
        <option value="" disabled>
          Źródło
        </option>
        <option value="youtube">Youtube</option>
        <option value="artykul">Artykuł</option>
      </select>
    </div>
  );
}
export default ContentPicker;
