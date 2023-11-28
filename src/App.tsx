import React, { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { atom, useAtom } from "jotai";

import "./App.css";
import "./component-styles/About.scss";
import colors from "./colors.ts";
import NavBar from "./app-components/NavBar.tsx";
import HomePage from "./app-components/HomePage.tsx";
import Materialy from "./app-components/Materialy/Materialy.tsx";
import Korepetycje from "./app-components/Korepetytorzy/Korepetycje.tsx";
import Studia from "./app-components/Studia.tsx";
import Arkusze from "./app-components/Arkusze/Arkusze.tsx";
import ArkuszeLista from "./app-components/Arkusze/ArkuszeLista.tsx";
import ArkuszeStart from "./app-components/Arkusze/ArkuszeStart.tsx";
import About from "./app-components/About.tsx";

export const motywStrony = atom("light");
export const windowWidth = atom(window.innerWidth);

declare module "react" {
  interface CSSProperties {
    "--purple"?: string;
    "--purpleHovered"?: string;
    "--purpleDarker"?: string;
    "--content"?: string;
    "--blue"?: string;
    "--colorFont"?: string;
    "--contentInverted"?: string;
    "--gray"?: string;
  }
}

function App() {
  const [motyw] = useAtom(motywStrony);
  const [width, setWidth] = useAtom(windowWidth);

  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  useEffect(() => {
    const updateWindowWidth = () => {
      setWidth(window.innerWidth);
    };
    window.addEventListener("resize", updateWindowWidth);
    return () => {
      window.removeEventListener("resize", updateWindowWidth);
    };
  }, [width, setWidth]);
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
        "--gray":
          motyw === "light" ? colors.lightMode.gray : colors.darkMode.gray,
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
            <Route path="" element={<ArkuszeStart />} />
            <Route path="lista" element={<ArkuszeLista />} />
          </Route>
        </Routes>
        <About />
      </main>
    </div>
  );
}

export default App;
