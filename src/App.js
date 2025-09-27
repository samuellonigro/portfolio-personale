import React from "react";
import NavbarComponent from "./components/NavbarComponent";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Background from "./components/Background"; // 👈 nuovo import

function App() {
  return (
    <>
      <Background /> {/* sfondo animato */}
      <NavbarComponent />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
    </>
  );
}

export default App;



