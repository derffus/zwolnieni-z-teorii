import React, { useState, useRef, useEffect } from "react";
import ContentPicker from "./ContentPicker";
import "../component-styles/Materialy.scss";
import filmyYtLinki from "../filmyYTLinki";
function Materialy(props) {
  const [klasa, setKlasa] = useState("");
  const [zakres, setZakres] = useState("");
  const [dzial, setDzial] = useState("");
  const [temat, setTemat] = useState("");
  const [zrodlo, setZrodlo] = useState("");

  const targetRef = useRef(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            console.log("Element is in the viewport!");
          }
        });
      },
      { threshold: 0.5 }
    );

    if (targetRef.current) {
      observer.observe(targetRef.current);
    }
    return () => {
      if (targetRef.current) {
        observer.unobserve(targetRef.current);
      }
    };
  }, []);
  function wypiszFilmy(filmy, klasa, zakres, dzial, temat, zrodlo) {
    return filmy
      .filter(
        (x) =>
          x[1].indexOf("film-" + zakres + klasa) !== -1 &&
          x[3] === dzial &&
          x[4] === zrodlo
      )
      .map((x) => (
        <div className="filmy-div">
          <iframe ref={targetRef}
            key={x}
            className={x[1].join(" ")}
            src={x[0]}
            title={x[2]}
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen="true"
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
          zrodlo={zrodlo}
          setZrodlo={setZrodlo}
        />
        {klasa !== "" && zakres !== "" && dzial !== "" && zrodlo !== "" ? (
          <div className="filmy">
            {wypiszFilmy(filmyYtLinki, klasa, zakres, dzial, temat, zrodlo)}
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
