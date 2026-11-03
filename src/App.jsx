
import { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";

import Navbar from "./components/Navbar";
import WelcomeScreen from "./components/WelcomeScreen";
import Reveal from "./components/Reveal";

// Interactive Neural Network Background
import NeuralNetworkBackground from "./components/NeuralNetworkBackground";

import Home from "./sections/Home";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import Education from "./sections/Education";
import Contact from "./sections/Contact";

export default function App() {
  // Dark / Light Mode
const [dark, setDark] = useState(true);

  // Welcome Screen - once per browser tab session
  const [welcome, setWelcome] = useState(() => {
    return !sessionStorage.getItem("portfolio-welcomed");
  });

  // Apply theme
  useEffect(() => {
    document.documentElement.classList.toggle(
      "dark",
      dark
    );

    localStorage.setItem(
      "theme",
      dark ? "dark" : "light"
    );
  }, [dark]);

  // Auto close Welcome Screen
  useEffect(() => {
    if (!welcome) return;

    const timer = setTimeout(() => {
      setWelcome(false);

      sessionStorage.setItem(
        "portfolio-welcomed",
        "yes"
      );
    }, 3000);

    return () => clearTimeout(timer);
  }, [welcome]);

  // Skip Welcome Screen
  const skipWelcome = () => {
    setWelcome(false);

    sessionStorage.setItem(
      "portfolio-welcomed",
      "yes"
    );
  };

  // Toggle Dark / Light Mode
  const toggleTheme = () => {
    setDark((previous) => !previous);
  };

  return (
    <div className="relative min-h-screen theme-bg theme-text">

      {/* Global Animated Neural Network */}
      <NeuralNetworkBackground />

      {/* Animated Welcome Screen */}
      <AnimatePresence mode="wait">
        {welcome && (
          <WelcomeScreen
            key="welcome-screen"
            onSkip={skipWelcome}
          />
        )}
      </AnimatePresence>

      {/* Entire portfolio above background */}
      <div className="neural-portfolio-content">

        {/* Navigation */}
        <Navbar
          dark={dark}
          toggleTheme={toggleTheme}
        />

        {/* Main Portfolio */}
        <main>
          <Home welcomeFinished={!welcome} />

          <Reveal>
            <About />
          </Reveal>

          <Reveal>
            <Skills />
          </Reveal>

          <Reveal>
            <Projects />
          </Reveal>

          <Reveal>
            <Education />
          </Reveal>

          <Reveal>
            <Contact />
          </Reveal>
        </main>

      </div>
    </div>
  );
}
