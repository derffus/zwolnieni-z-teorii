import React, { useState } from "react";
import ContentPicker from "./ContentPicker.tsx";
import "../../component-styles/Materialy.scss";
import filmyYtLinki, { filmy } from "./filmyYTLinki.ts";
function Materialy() {
  const [klasa, setKlasa] = useState<string>("");
  const [zakres, setZakres] = useState<string>("");
  const [dzial, setDzial] = useState<string>("wszystkie");
  const [temat, setTemat] = useState<string>("wszystkie");
  function wypiszFilmy(
    filmy: filmy[],
    klasa: string,
    zakres: string,
    dzial: string,
    temat: string
  ) {
    return filmy
      .filter(
        (x) =>
          x[1].indexOf("film-" + zakres + klasa) !== -1 &&
          (dzial !== "wszystkie" ? x[3] === dzial : true) &&
          (x[5] ? x[5].indexOf(temat) !== -1 || temat === "wszystkie" : true)
      )
      .map((x) => (
        <div className="filmy-div">
          <iframe
            key={x + '-film'}
            className={x.join(" ")}
            src={x[0]}
            title={x[2]}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
          <div>{x[2]}</div>
        </div>
      ));
  }

  return (
    <div id="materialy">
      <div className="materialy">
        <ContentPicker
          klasa={klasa}
          setKlasa={setKlasa}
          zakres={zakres}
          setZakres={setZakres}
          temat={temat}
          setTemat={setTemat}
          dzial={dzial}
          setDzial={setDzial}
        />
        {klasa !== "" && zakres !== ""? (
          <div className="filmy">
            {wypiszFilmy(filmyYtLinki, klasa, zakres, dzial, temat)}
          </div>
        ) : (
          <div className="materialy-img">
            <img
              src={process.env.PUBLIC_URL + "/images/MaterialyStart.png"}
              alt=""
            />
          </div>
        )}
      </div>
    </div>
  );
}
export default Materialy;
