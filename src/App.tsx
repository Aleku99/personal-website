import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Experience from "./pages/Experience";
import NoMatch from "./pages/NoMatch";
import Profile from "./pages/Profile";
import Projects from "./pages/Projects";
import { DarkModeContext } from "./context/darkModeContext";
import Contact from "./pages/Contact";

const getDarkModeFromLocalStorage = () => {
  const darkModeString = localStorage.getItem("darkMode");
  if (darkModeString === "true") {
    return true;
  }
  return false;
};

const setFavicon = (darkMode: boolean) => {
  let favicon = document.querySelector("link[rel~='icon']");
  if (!favicon) {
    favicon = document.createElement("link");
    favicon.setAttribute("rel", "icon");
    favicon.setAttribute("type", "image/png");
    document.getElementsByTagName("head")[0].appendChild(favicon);
  }

  if (darkMode) {
    favicon.setAttribute("href", "assets/darkTitleBarLogo.png");
  } else {
    favicon.setAttribute("href", "assets/titleBarLogo.png");
  }
};

const App: React.FC = () => {
  const [darkMode, setDarkMode] = useState(getDarkModeFromLocalStorage());
  setFavicon(darkMode);
  return (
    <DarkModeContext.Provider value={{ darkMode, setDarkMode }}>
      <Routes>
        <Route path="" element={<Profile />}></Route>
        <Route path="experience" element={<Experience />}></Route>
        <Route path="projects" element={<Projects />}></Route>
        <Route path="contact" element={<Contact />}></Route>
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </DarkModeContext.Provider>
  );
};

export default App;
