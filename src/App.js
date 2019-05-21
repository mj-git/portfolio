import React from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";

function App() {
  return (
    <React.Fragment>
      <NavBar />
      <Home />
      <About />
      <Services />
    </React.Fragment>
  );
}

export default App;
