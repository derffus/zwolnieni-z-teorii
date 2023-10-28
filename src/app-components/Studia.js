import "../component-styles/Studia.css";
import React from "react";
function Studia(props) {
  return (
    <div id="studia-segment">
      <div id="welcome-studia">
        <div id="welcome-studia-start">
          Studia po <span>matematyce rozszerzonej</span>
        </div>
        <div id="welcome-studia-content">
          Obecnie zdając matematykę rozszerzoną masz szeroki wybór kierunków
          studiów i uczelni w całej Polsce. Nauki, na które możesz się
          zdecydować, to między innymi:
          <ul>
            {[
              "Matematyka",
              "Ekonomia",
              "Informatyka",
              "Finanse",
              "Medycyna",
              "Administracja",
              "Energetyka",
              "Architektura",
              "Geologia",
            ].map((x, index) => (
              <li id={x + "-list"} key={index}>
                {x}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div id="szkola-glowna-handlowa">
        <div id="szkola-glowna-handlowa-text">
          <div id="szkola-glowna-handlowa-start">
            <span>Szkoła główna handlowa w Warszawie</span>
          </div>
          <div id="szkola-glowna-handlowa-content">
            Rekrutacja na sgh nie jest prosta, oprócz zdania matur uczestnicy
            muszą podejsć do egzaminu wstępnego pod nazwą "test z wiedzy o
            przedsiębiorczosci", który liczy sie tak samo jak matura z
            matematyki!
            <br /> Próg punktowy na rok 2023- 306 pkt
            <br /> Sgh w warszawie to najstarsza I najbardziej prestizowa
            uczelnia ekonomiczna w polsce, a takze jeden z najlepszych
            uniwersytetów o tym profilu w europie, dlatego warto wziac go pod
            uwage.
            <br /> Myśląc o tej uczelni celuj w bardzo wysokie wyniki na
            maturze.
          </div>
        </div>
        <div id="szkola-glowna-handlowa-img">
          <img
            src={require("../images/SzkolaGlownaHandlowaWWarszawie.png")}
            alt="Szkola Glowna Handlowa W Warszawie"
          />
        </div>
      </div>
    </div>
  );
}
export default Studia;
