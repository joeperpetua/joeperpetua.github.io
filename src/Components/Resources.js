import './Resources.css';

function Resources() {
  return (
    <div className="Resources">
      <span className='app-anchor' id="resources"></span>
      <h2 className='app-title'>My Resources</h2>
      <p className='res-desc'>All my resources (CV, Certifications) are available in the following <a href='https://github.com/joeperpetua/joeperpetua.github.io/tree/main/src/Resources' rel="noreferrer" target="_blank">link</a>.</p>
      <p className='res-desc'><a href='https://github.com/joeperpetua' rel="noreferrer" target="_blank">Github</a></p>
      <p className='res-desc'><a href='https://www.linkedin.com/in/joelperpetua' rel="noreferrer" target="_blank">LinkedIn</a></p>
      <br></br>
      <p className='res-desc'>Attributions:</p>
      <a rel="noreferrer" target="_blank" href="https://icons8.com/icon/3096/menu">Menu icon by Icons8</a>
      <br></br>
      <a rel="noreferrer" target="_blank" href="https://icons8.com/icon/fuaPZ2MgTeTk/x">X icon by Icons8</a>
    </div>
  );
}

export {Resources};