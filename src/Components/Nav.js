import './Nav.css';
import {toggleMenu} from '../lib/toggleMenu.js';

function Nav() {
  return (
    <div className="Nav">
        <img className="nav-icon" alt="Menu Icon" src="https://img.icons8.com/ios/50/FFFFFF/menu--v1.png" onClick={toggleMenu} />
    </div>
  );
}

export {Nav};