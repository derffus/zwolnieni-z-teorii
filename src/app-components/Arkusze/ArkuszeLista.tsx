import React from "react";
import "../../component-styles/Arkusze.scss";
function ArkuszeLista(props) {
  const openPDF = (fileName: string) => {
    window.open(require(`./ArkuszePDF/${fileName}.pdf`), "_blank");
  };
  return (
    <div id="arkusze-lista">
      <div className="lista">
        <div className="lista-div maturaPodstawowaMaj2023Formula2015">
          <button
            className="lista-button"
            onClick={() => {
              openPDF("MaturaPodstawowaMaj2023Formula2015");
            }}
          >
            Matura podstawowa maj 2023 formuła 2015
          </button>
          <button
            className="lista-button"
            onClick={() => {
              openPDF("MaturaPodstawowaMaj2023Formula2015Odpowiedzi");
            }}
          >
            Matura podstawowa maj 2023 formuła 2015 - odpowiedzi
          </button>
        </div>
        <div className="lista-div">
          <button className="lista-button">Matura x</button>
          <button className="lista-button">Matura x odpowiedzi</button>
        </div>
        <div className="lista-div">
          <button className="lista-button">Matura y</button>
          <button className="lista-button">Matura y odpowiedzi</button>
        </div>
      </div>
    </div>
  );
}
export default ArkuszeLista;
