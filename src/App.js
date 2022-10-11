import './App.css';
import {Nav} from "./Components/Nav.js";
import {Header} from "./Components/Header.js";
import {Projects} from "./Components/Projects.js";
import {About} from "./Components/About.js";
import {Resources} from "./Components/Resources.js";

function App() {
  return (
    <div className="App">
      <Nav />
      <Header />
      <Projects />
      <About />
      <Resources />
    </div>
  );
}

export default App;
