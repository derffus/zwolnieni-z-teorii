import React, { useEffect, useRef } from "react";
import korepetytorzy from "../korepetytorzy";
import "@fortawesome/fontawesome-free/css/all.css";
function Korepetycje(props) {
  useEffect(() => {
    props.segmentOpened("korepetycje");
    return () => {
      props.segmentClosed("korepetycje");
    };
  });

  function handleLokalizacjaInput(event) {
    props.updateState("lokalizacjaInput", event.target.value);
  }
  function handleLokalizacjaSubmit(event) {
    event.preventDefault();
    if (props.lokalizacjaInput !== "") {
      props.updateState("lokalizacjaSubmit", props.lokalizacjaInput);
      props.updateState("lokalizacjaInput", "");
    }
  }
  function sortByLokalizacja(array, lokalizacja) {
    let filteredArr = array.filter((x) => x.miejscowosc === lokalizacja);
    let restOfArr = array.filter((x) => x.miejscowosc !== lokalizacja);
    return filteredArr.concat(restOfArr);
  }
  const mailToCopy = useRef(null);
  function copyMail() {
    if (mailToCopy && mailToCopy.current) {
      mailToCopy.current.select();
      document.execCommand("copy");
      alert("Tekst skopiowany");
    }
  }
  return (
    <div id="korepetycje-segment">
      <div id="wpisz-lokalizacje">
        <span>Lokalizacja:</span>
        <form onSubmit={handleLokalizacjaSubmit}>
          <input
            placeholder={props.lokalizacjaSubmit}
            value={props.lokalizacjaInput}
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
        {sortByLokalizacja(korepetytorzy, props.lokalizacjaSubmit).map((x) => (
          <div id="korepetytor-div">
            <span id="imie-i-nazwisko">{x.imie + " " + x.nazwisko}</span>
            <br />
            <span id="miejscowosc">{x.miejscowosc}</span>
            <br />
            <span id="numerTelefonu" onClick={copyMail} ref={copyMail}>
              {x.numerTelefonu}
            </span>
            <br />
            <span id="mail">{x.mail}</span>
            <br />
          </div>
        ))}
      </div>
    </div>
  );
}
export default Korepetycje;
