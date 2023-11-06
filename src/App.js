import React from "react";
import { Routes, Route } from "react-router-dom";
import { atom, useAtom } from "jotai";

import "./App.css";
import "./component-styles/About.scss"
import colors from "./colors";
import NavBar from "./app-components/NavBar";
import HomePage from "./app-components/HomePage";
import Materialy from "./app-components/Materialy";
import Korepetycje from "./app-components/Korepetycje";
import Studia from "./app-components/Studia";
import Arkusze from "./app-components/Arkusze";

export const motywStrony = atom("light");

function App() {
  const [motyw] = useAtom(motywStrony);
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
        "--content":
          motyw === "light"
            ? colors.lightMode.content
            : colors.darkMode.content,
        "--purpleDark":
          motyw === "light"
            ? colors.lightMode.purpleDark
            : colors.darkMode.purpleDark,
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
          <Route path="/materialy" element={<Materialy />} />
          <Route path="/korepetycje" element={<Korepetycje />} />
          <Route path="/studia" element={<Studia />} />
          <Route path="/arkusze" element={<Arkusze />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
