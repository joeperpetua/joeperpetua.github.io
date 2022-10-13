import './Menu.css';
import {toggleMenu} from '../lib/toggleMenu.js';

function Menu() {
  return (
    <div className="Menu">
        <div className='menu-item'>
            <a href='#projects' onClick={toggleMenu}>My Projects</a>
        </div>
        <div className='menu-item'>
            <a href='#about' onClick={toggleMenu}>About Me</a>
        </div>
        <div className='menu-item'>
            <a href='#resources' onClick={toggleMenu}>My Resources</a>
        </div>
    </div>
  );
}

export {Menu};