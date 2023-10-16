import React from "react";
import korepetytorzy from "../korepetytorzy";
import "@fortawesome/fontawesome-free/css/all.css";
function Korepetycje(props) {
  function handleLokalizacjaInput(event) {
    props.updateState("lokalizacjaInput", event.target.value);
  }
  function handleLokalizacjaSubmit(event) {
    event.preventDefault();
    props.updateState("lokalizacjaSubmit", props.lokalizacjaInput);
    props.updateState("lokalizacjaInput", "");
  }
  return (
    <div id="korepetycje">
      <div id="wpisz-lokalizacje">
        <span>Lokalizacja:</span>
        <form onSubmit={handleLokalizacjaSubmit}>
          <input
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
        {korepetytorzy.map((x) => (
          <div id="korepetytor-div">
            <span id="imie-i-nazwisko">{x.imie + " " + x.nazwisko}</span>
            <br />
            <span id="miejscowosc">{x.miejscowosc}</span>
            <br />
            <span id="numerTelefonu">{x.numerTelefonu}</span>
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
