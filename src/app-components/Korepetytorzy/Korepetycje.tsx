import React, { ChangeEvent, FormEvent, useState } from "react";
import ClipboardJS from "clipboard";
import korepetytorzy, { Korepetytor } from "./korepetytorzy.ts";
import "../../component-styles/Korepetycje.scss";
import "@fortawesome/fontawesome-free/css/all.css";
function Korepetycje() {
  const [lokalizacjaInput, setLokalizacjaInput] = useState<string>("");
  const [lokalizacjaSubmit, setLokalizacjaSubmit] = useState<string>("");

  const clipboard = new ClipboardJS(".copy");

  function handleLokalizacjaInput(event: ChangeEvent<HTMLInputElement>) {
    setLokalizacjaInput(event.target.value);
  }
  function handleLokalizacjaSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (lokalizacjaInput !== "") {
      setLokalizacjaSubmit(lokalizacjaInput);
      setLokalizacjaInput("");
    }
  }

  function sortByLokalizacja(array: Korepetytor[], lokalizacja: string) {
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
    <div id="korepetycje">
      <div className="korepetycje-segment">
        <div className="wpisz-lokalizacje">
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
        <div className="welcome-korepetycje">
          znajdź swojego
          <br />
          <span className="purple-text">korepetytora!</span>
        </div>
        <div className="korepetytorzy">
          {sortByLokalizacja(korepetytorzy, lokalizacjaSubmit).map(
            (x, index) => (
              <div className="korepetytor-div" key={x + '-korepetytor'}>
                <span className="imie-i-nazwisko">
                  {x.imie + " " + x.nazwisko}
                </span>
                <br />
                <span className="miejscowosc">{x.miejscowosc}</span>
                <br />
                <span
                  className="numerTelefonu copy "
                  data-clipboard-text={x.numerTelefonu}
                >
                  {x.numerTelefonu}
                </span>
                <br />
                <span className="mail copy " data-clipboard-text={x.mail}>
                  {x.mail}
                </span>
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
}
export default Korepetycje;
