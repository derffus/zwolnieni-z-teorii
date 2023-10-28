import React from "react";
import ClipboardJS from "clipboard";
import korepetytorzy from "../korepetytorzy";
import "@fortawesome/fontawesome-free/css/all.css";
function Korepetycje(props) {
  const clipboard = new ClipboardJS(".copy");
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
  clipboard.on("success", (e) => {
    e.clearSelection();
  });
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
            <span id="numerTelefonu" class="copy" data-clipboard-text={x.numerTelefonu}>{x.numerTelefonu}</span>
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
