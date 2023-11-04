import React from "react";
import "../component-styles/Studia.scss";
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
      <div
        className="uczelnia-segment szkola-glowna-handlowa"
        onClick={() => {
          window.open("https://www.sgh.waw.pl/", "_blank");
        }}
      >
        <div className="uczelnia-segment-text szkola-glowna-handlowa-text">
          <div className="uczelnia-segment-start szkola-glowna-handlowa-start">
            <span>Szkoła główna handlowa w Warszawie</span>
          </div>
          <div className="uczelnia-segment-content szkola-glowna-handlowa-content">
            Rekrutacja na sgh nie jest prosta, oprócz zdania matur uczestnicy
            muszą podejsć do egzaminu wstępnego pod nazwą "test z wiedzy o
            przedsiębiorczosci", który liczy się tak samo jak matura z
            matematyki!
            <br /> Próg punktowy na rok 2023- 306 pkt
            <br /> Sgh w warszawie to najstarsza i najbardziej prestiżowa
            uczelnia ekonomiczna w polsce, a także jeden z najlepszych
            uniwersytetów o tym profilu w europie, dlatego warto wziąć go pod
            uwage.
            <br /> Myśląc o tej uczelni celuj w bardzo wysokie wyniki na
            maturze.
          </div>
        </div>
        <div className="uczelnia-segment-img szkola-glowna-handlowa-img">
          <img
            src={require("../images/SzkolaGlownaHandlowaWWarszawie.png")}
            alt="Szkola Glowna Handlowa W Warszawie"
          />
        </div>
      </div>
      <div
        className="uczelnia-segment akademia-leona-kozminskiego"
        onClick={() => {
          window.open("https://www.kozminski.edu.pl/", "_blank");
        }}
      >
        <div className="uczelnia-segment-text akademia-leona-kozminskiego-text">
          <div className="uczelnia-segment-start akademia-leona-kozminskiego-start">
            <span>Akademia Leona Koźmińskiego</span>
          </div>
          <div className="uczelnia-segment-content akademia-leona-kozminskiego-content">
            Akademia Leona Koźmińskiego uznawana jest za najlepszą szkołę biznesu
            w Europię centralnej. Specjalizuje się głównie w dziedzinie nauk
            społecznych, oferując zróżnicowany wybór programów z zakresu
            ekonomii, zarządzania, prawa, administracji oraz nauk społecznych.
            Uczelnia ma reputację zaangażowania w badania naukowe, a także silną
            współpracę z międzynarodowymi instytucjami.
            <br /> Na studia w języku polskim zostają przyjęci kandydaci, którzy
            osiągneli conajmniej 300 punktów w rekrutacji (1% na maturze
            podstawowej - 1,5pkt 1% na maturze rozszerzonej - 2pkt 1% na maturze
            rozszerzonej z matematyki 3pkt!)
            <br /> Dla finalistów i laureatów olimpiady "Zwolnieni z Teorii"
            przypada również dodatkowe 30pkt.
          </div>
        </div>
        <div className="uczelnia-segment-img akademia-leona-kozminskiego-img">
          <img
            src={require("../images/AkademiaLeonaKozminskiego.png")}
            alt="Akademia Leona Koźmińskiego"
          />
        </div>
      </div>
    </div>
  );
}
export default Studia;
