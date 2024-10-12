import React, { Component } from "react";
//import { ParallaxTilt } from "react-parallax-tilt";
import ParticlesBg from "particles-bg";
import Clarifai from "clarifai";
import FaceRecognition from "./components/FaceRecognition/FaceRecognition";
import Navigation from "./components/Navigation/navigation";
import Signin from "./components/SignIn/SignIn";
import Register from "./components/Register/Register";
import Logo from "./components/Logo/Logo";
import ImageLinkForm from "./components/ImageLinkForm/ImageLinkForm";
import Rank from "./components/Rank/Rank";
import "./App.css";
import Particles from "react-tsparticles";

/*const app = new Clarifai.App({
  apiKey: process.env.REACT_APP_CLARIFAI_API_KEY, // Ensure process.env is used
});

console.log("API Key:", process.env.REACT_APP_CLARIFAI_API_KEY); // Log to check if it's defined*/

class App extends Component {
  constructor() {
    super();
    this.state = {
      input: "",
      /*imageUrl: "",
      box: {},
      route: "signin",
      isSignedIn: false,
      user: {
        id: "",
        name: "",
        email: "",
        entries: 0,
        joined: "",
      },*/
    };
  }

  onInputChange = (event) => {
    console.log(event.target.value);
    //this.setState({ input: event.target.value });
  };

  onButtonSubmit = () => {
    console.log("click");
  };

  render() {
    return (
      <div className="App">
        <Particles className="particles" />
        <Navigation />
        <Logo />
        <Rank />
        <ImageLinkForm
          onInputChange={this.onInputChange}
          onButtonSubmit={this.onButtonSubmit}
        />
      </div>
    );
  }
}

export default App;
