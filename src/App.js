import React from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Work from "./pages/Work";
import Contact from "./pages/Contact";

function App() {
  return (
    <React.Fragment>
      <NavBar />
      <Home />
      <About />
      <Services />
      <Work />
      <Contact />
    </React.Fragment>
  );
}

export default App;
