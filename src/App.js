import { useEffect } from 'react';
import {Menu} from "./Components/Menu.js";
import {Nav} from "./Components/Nav.js";
import {Header} from "./Components/Header.js";
import {Projects} from "./Components/Projects.js";
import {About} from "./Components/About.js";
import {Resources} from "./Components/Resources.js";
import './App.css';

function App() {
  useEffect(() => {
    const hash = window.location.hash.slice(1); // Remove the '#' character from the hash
    if (hash) {
      const element = document.getElementById(hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth'});
      }
    }
  }, []);

  return (
    <div className="App">
      <Menu />
      <Nav />
      <Header />
      <Projects />
      <About />
      <Resources />
    </div>
  );
}

export default App;
