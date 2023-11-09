import React from "react";
import "../component-styles/Arkusze.scss";
function Arkusze(props) {
  return (
    <div id="arkusze">
      <div className="arkusze-segment">
        <div className="welcome-arkusze">
          <div className="img-and-start">
            <img
              src={process.env.PUBLIC_URL + "/images/arkusze.png"}
              alt="arkusze logo"
            />

            <div className="welcome-arkusze-start">
              Jak dobrze zdać <span className="purple-text">maturę</span>?
            </div>
          </div>
          <p className="welcome-arkusze-content">
            Odpowiedź to <strong>zadania</strong>!<br />
            Mimo, że istnieje wiele porad i sposobów jak przygotować się do
            egzaminu dojrzałości, czyli tak zwanej matury to z pewnością jednym
            z podstawowych kroków jakie powinien podiąć każdy maturzysta jest
            przerobionie arkuszy z poprzednich lat.
            <br />W związku z tym zebraliśmy dla was
            <strong> wszystkie zeszłoroczne matury</strong> oraz przygotowaliśmy
            ich <strong>rozwiązania wraz objaśnieniami</strong>!
          </p>
        </div>
      </div>
    </div>
  );
}
export default Arkusze;
