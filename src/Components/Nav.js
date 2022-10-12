import './Nav.css';

const toggleMenu = (e) => {
  let menu = document.querySelector(".Menu");
  if (menu.className.includes("open")) {
    menu.className = "Menu closed";
    e.target.src = "https://img.icons8.com/ios/50/FFFFFF/menu--v1.png";
  }else {
    menu.className = "Menu opened";
    e.target.src = "https://img.icons8.com/sf-ultralight-filled/50/FFFFFF/x.png";
  }
}

function Nav() {
  return (
    <div className="Nav">
        <img className="nav-icon" alt="Menu Icon" src="https://img.icons8.com/ios/50/FFFFFF/menu--v1.png" onClick={toggleMenu} />
        {/* <h2 className='nav-title'>Portfolio</h2> */}
    </div>
  );
}

export {Nav};