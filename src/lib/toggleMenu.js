import {sleep} from './sleep.js';

const toggleMenu = async () => {
    let nav = document.querySelector(".Nav");
    let menu = document.querySelector(".Menu");
    let navIcon = document.querySelector(".nav-icon");
    if (menu.className.includes("open")) {
      menu.className = "Menu closed";
      await sleep(50, 'ms');
      nav.removeAttribute("style");
      navIcon.src = "https://img.icons8.com/ios/50/FFFFFF/menu--v1.png";
    }else {
      menu.className = "Menu opened";
      await sleep(50, 'ms');
      nav.setAttribute("style", "justify-content: flex-end;");
      navIcon.src = "https://img.icons8.com/sf-ultralight-filled/50/FFFFFF/x.png";
    }
}

export {toggleMenu};