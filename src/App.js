import "./App.css";
import "./index.css";
import Navigation from "./components/navigation";
import Logo from "./components/Logo";
import ImageLinkForm from "./components/ImageLinkForm";
import Rank from "./components/Rank";

function App() {
  return (
    <>
      <Navigation />
      <Logo />
      <Rank />
      <ImageLinkForm />
    </>
  );
}

export default App;
