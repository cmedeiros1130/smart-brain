import React from "react";
import "./App.css";
//import Particles from "react-tsparticles";
import Navigation from "./components/Navigation/navigation";
import Logo from "./components/Logo/Logo";
import Rank from "./components/Rank/Rank";
import ImageLinkForm from "./components/ImageLinkForm/ImageLinkForm";

function App() {
  return (
    <div className="App">
      <Navigation />
      <Logo />
      <Rank />
      <ImageLinkForm />
    </div>
  );
}

export default App;

//<Particles className="particles" />
