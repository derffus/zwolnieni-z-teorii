import React from "react";
import "../../component-styles/Arkusze.scss";

function ArkuszeLista(props) {
  const downloadPDF = (fileName:string) => {
    /*const pdfPath = `./ArkuszePDF/${fileName}.pdf`;
    const link = document.createElement("a");
    link.href = pdfPath;
    link.download = `${fileName}.pdf`;

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);*/
    fetch(`./ArkuszePDF/${fileName}.pdf`).then((response) => {
      response.blob().then((blob) => {
        const fileURL = window.URL.createObjectURL(blob);
        let alink = document.createElement("a");
        alink.href = fileURL;
        alink.download = `${fileName}.pdf`;
        alink.click();
      });
    });
  };
  return (
    <div id="arkusze-lista">
      <div className="lista">
        <button className="lista-button">
          Matura podstawowa maj 2023 formuła 2015
        </button>
        <button
          className="lista-button"
          onClick={() => {
            downloadPDF("MaturaPodstawowaMaj2023Formula2015Odpowiedzi");
          }}
        >
          Matura podstawowa maj 2023 formuła 2015 - odpowiedzi
        </button>
        <button className="lista-button">AA</button>
        <button className="lista-button">HH</button>
        <button className="lista-button">SHHH</button>
        <button className="lista-button">AHAHA</button>
      </div>
    </div>
  );
}
export default ArkuszeLista;
