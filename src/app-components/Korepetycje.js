import React, { useState } from "react";
import ClipboardJS from "clipboard";
import korepetytorzy from "../korepetytorzy.js";
import "../component-styles/Korepetycje.scss";
import "@fortawesome/fontawesome-free/css/all.css";
function Korepetycje(props) {
  const [lokalizacjaInput, setLokalizacjaInput] = useState("");
  const [lokalizacjaSubmit, setLokalizacjaSubmit] = useState("");

  const clipboard = new ClipboardJS(".copy");
  
  function handleLokalizacjaInput(event) {
    setLokalizacjaInput(event.target.value);
  }
  function handleLokalizacjaSubmit(event) {
    event.preventDefault();
    if (lokalizacjaInput !== "") {
      setLokalizacjaSubmit(lokalizacjaInput);
      setLokalizacjaInput("");
    }
  }

  function sortByLokalizacja(array, lokalizacja) {
    const diacriticless = require("diacriticless");
    const normalizedLokalizacja = diacriticless(lokalizacja);
    let regexLokalizacja = new RegExp(normalizedLokalizacja, "iu");

    let filteredArr = array.filter((x) => {
      const normalizedMiejscowosc = diacriticless(x.miejscowosc);
      return (
        regexLokalizacja.test(normalizedMiejscowosc) ||
        normalizedMiejscowosc.includes(normalizedLokalizacja)
      );
    });

    let restOfArr = array.filter((x) => {
      const normalizedMiejscowosc = diacriticless(x.miejscowosc);
      return (
        !regexLokalizacja.test(normalizedMiejscowosc) &&
        !normalizedMiejscowosc.includes(normalizedLokalizacja)
      );
    });

    return filteredArr.concat(restOfArr);
  }

  clipboard.on("success", (e) => {
    e.clearSelection();
  });

  return (
    <div id="korepetycje-segment">
      <div id="wpisz-lokalizacje">
        <span>Lokalizacja:</span>
        <form onSubmit={handleLokalizacjaSubmit}>
          <input
            placeholder={lokalizacjaSubmit}
            value={lokalizacjaInput}
            onChange={handleLokalizacjaInput}
          />
          <button type="submit">
            <i className="fa-solid fa-magnifying-glass"></i>
          </button>
        </form>
      </div>
      <div id="welcome-korepetycje">
        znajdź swojego
        <br />
        <span>korepetytora!</span>
      </div>
      <div id="korepetytorzy">
        {sortByLokalizacja(korepetytorzy, lokalizacjaSubmit).map((x) => (
          <div id="korepetytor-div">
            <span id="imie-i-nazwisko">{x.imie + " " + x.nazwisko}</span>
            <br />
            <span id="miejscowosc">{x.miejscowosc}</span>
            <br />
            <span
              id="numerTelefonu"
              class="copy"
              data-clipboard-text={x.numerTelefonu}
            >
              {x.numerTelefonu}
            </span>
            <br />
            <span id="mail" class="copy" data-clipboard-text={x.mail}>
              {x.mail}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
export default Korepetycje;
