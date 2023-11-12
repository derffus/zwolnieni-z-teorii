import React, { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { atom, useAtom } from "jotai";

import "./App.css";
import "./component-styles/About.scss";
import colors from "./colors";
import NavBar from "./app-components/NavBar";
import HomePage from "./app-components/HomePage";
import Materialy from "./app-components/Materialy";
import Korepetycje from "./app-components/Korepetycje";
import Studia from "./app-components/Studia";
import Arkusze from "./app-components/Arkusze/Arkusze";
import ArkuszeLista from "./app-components/Arkusze/ArkuszeLista";
import About from "./app-components/About";
export const motywStrony = atom("light");

function App() {
  const [motyw] = useAtom(motywStrony);
  const location = useLocation();
  useEffect(() => {
      window.scrollTo(0, 0);
  }, [location]);
  return (
    <div
      className="website"
      style={{
        "--purple":
          motyw === "light" ? colors.lightMode.purple : colors.darkMode.purple,
        "--purpleHovered":
          motyw === "light"
            ? colors.lightMode.purpleHovered
            : colors.darkMode.purpleHovered,
        "--purpleDarker":
          motyw === "light"
            ? colors.lightMode.purpleDarker
            : colors.darkMode.purpleDarker,
        "--content":
          motyw === "light"
            ? colors.lightMode.content
            : colors.darkMode.content,
        "--blue":
          motyw === "light" ? colors.lightMode.blue : colors.darkMode.blue,
        "--colorFont":
          motyw === "light"
            ? colors.lightMode.colorFont
            : colors.darkMode.colorFont,
        "--contentInverted":
          motyw === "light"
            ? colors.lightMode.contentInverted
            : colors.darkMode.contentInverted,
      }}
    >
      <NavBar />
      <main id="content">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="materialy" element={<Materialy />} />
          <Route path="korepetycje" element={<Korepetycje />} />
          <Route path="studia" element={<Studia />} />
          <Route path="arkusze" element={<Arkusze />}>
            <Route path="lista" element={<ArkuszeLista />} />
          </Route>
        </Routes>
        <About />
      </main>
    </div>
  );
}

export default App;
