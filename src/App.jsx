
import { useState, useEffect } from "react";
import About from "./components/About";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Stats from "./components/Stats";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import "./App.css";
import Contact from "./components/Contact";


function App() {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") || "light"
  );

  const [language, setLanguage] = useState(
    localStorage.getItem("language") || "en"
  );

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  useEffect(() => {
    document.documentElement.dir =
      language === "ar" ? "rtl" : "ltr";

    localStorage.setItem("language", language);
  }, [language]);

  return (
    <div className="app">

      <Navbar
        theme={theme}
        setTheme={setTheme}
        language={language}
        setLanguage={setLanguage}
      />

      <main>
        <Hero language={language} />

        <Stats language={language} />

        <Projects language={language} />

        <About language={language} />

        <Skills language={language} />

        <Contact language={language} /> 
      </main>

    </div>
  );
}

export default App;
