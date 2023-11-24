import React from "react";
import "../../component-styles/Arkusze.scss";
import { useNavigate } from "react-router-dom";
import { useAtom } from "jotai";
import { motywStrony } from "../../App";

function ArkuszeStart(props) {
  const [motyw] = useAtom(motywStrony);
  const navigate = useNavigate();

  return (
    <div className="arkusze-segment">
      <div className="welcome-arkusze">
        <div className="img-and-start">
          <img
            src={
              motyw === "light"
                ? process.env.PUBLIC_URL + "/images/ArkuszeWelcome.png"
                : process.env.PUBLIC_URL + "/images/ArkuszeWelcomeDarkMode.png"
            }
            alt="arkusze logo"
          />

          <div className="welcome-arkusze-start">
            Jak dobrze zdać <span className="purple-text">maturę</span>?
          </div>
        </div>
        <p className="welcome-arkusze-content">
          Odpowiedź to <strong>zadania</strong>!<br />
          Mimo, że istnieje wiele porad i sposobów jak przygotować się do
          egzaminu dojrzałości, czyli tak zwanej matury to z pewnością jednym z
          podstawowych kroków jakie powinien podiąć każdy maturzysta jest
          przerobionie arkuszy z poprzednich lat.
          <br />W związku z tym zebraliśmy dla was
          <strong> wszystkie zeszłoroczne matury</strong> oraz przygotowaliśmy
          ich <strong>rozwiązania wraz objaśnieniami</strong>!
        </p>
        <div className="arrows">
          <i className="fa-solid fa-chevron-down first" />
          <i className="fa-solid fa-chevron-down second" />
          <i className="fa-solid fa-chevron-down third" />
          <i className="fa-solid fa-chevron-down fourth" />
        </div>
      </div>
      <div className="wybierz-poziom">
        <div className="wybierz-swoj-poziom">Wybierz</div>
        <div className="strzalka1">
          <img
            src={
              motyw === "light"
                ? process.env.PUBLIC_URL + "/images/ArkuszeStrzalka.png"
                : process.env.PUBLIC_URL + "/images/ArkuszeStrzalkaDarkMode.png"
            }
            alt=""
          />
        </div>
        <div className="wybierz-poziom-buttons">
          <button
            onClick={() => {
              navigate("/arkusze/lista");
            }}
          >
            <div className="matematyka">Matematyka</div>
            <div className="poziom">Poziom podstawowy</div>
          </button>
          <button
            onClick={() => {
              navigate("/arkusze/lista");
            }}
          >
            <div className="matematyka">Matematyka</div>
            <div className="poziom">Poziom rozszerzony</div>
          </button>
        </div>
        <div className="strzalka2">
          <img
            src={
              motyw === "light"
                ? process.env.PUBLIC_URL + "/images/ArkuszeStrzalka.png"
                : process.env.PUBLIC_URL + "/images/ArkuszeStrzalkaDarkMode.png"
            }
            alt=""
          />
        </div>
        <div className="wybierz-swoj-poziom">swój poziom</div>
      </div>
    </div>
  );
}

export default ArkuszeStart;
