import React from "react";

//React router dom
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//Components
import { AudioProvider } from "../../components/audioContext";
import Header from "../../components/header";

//Pages
import Home from "../../pages/home";
import Error from "../../pages/error";
import Projects from "../../pages/projects";
import TechStack from "../../pages/techStack";
import About from "../../pages/about";
import Contact from "../../pages/contact";
import Frined from "../../components/friend";

export default function index() {
  return (
    <>
      <Router>
        <AudioProvider>
          <Header />
          <Frined />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="*" element={<Error error={404} backToHome={true} />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/techStack" element={<TechStack />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </AudioProvider>
      </Router>
    </>
  );
}
