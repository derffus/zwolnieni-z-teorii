import React from "react";
import { useAtomValue } from "jotai";
import "../../component-styles/Arkusze.scss";
import { ZakresArkusze } from "./Arkusze.tsx";
function ArkuszeLista() {
  const zakresArkusze = useAtomValue(ZakresArkusze);

  const openPDF = (fileName: string) => {
    window.open(require(`./ArkuszePDF/${fileName}.pdf`), "_blank");
  };

  return (
    <div id="arkusze-lista">
      <div className="lista">
          {[
            [
              "MaturaPodstawowaMaj2023Formula2015",
              "MaturaPodstawowaMaj2023Formula2015Odpowiedzi",
            ],
          ]
            .filter((x) =>
              new RegExp(
                zakresArkusze === "podstawa" ? "podstawowa" : "rozszerzona",
                "i"
              ).test(x[0])
            )
            .map((x) => (
              <div className="lista-div">
                <button
                  className="lista-button"
                  onClick={() => {
                    openPDF(x[0]);
                  }}
                >{x[0].replace(/([A-Z][a-z]*|\d+)/g, '$1 ').replace(/l/,'ł')}</button>
                <button
                  className="lista-button"
                  onClick={() => {
                    openPDF(x[1]);
                  }}
                >{x[1].replace(/([A-Z][a-z]*|\d+)/g, '$1 ').replace(/Formula/,'Formuła')}</button>
              </div>
            ))}
      </div>
    </div>
  );
}
export default ArkuszeLista;
