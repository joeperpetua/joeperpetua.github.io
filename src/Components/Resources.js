import './Resources.css';

function Resources() {
  return (
    <div className="Resources">
      <span className='app-anchor' id="resources"></span>
      <h2 className='app-title'>My Resources</h2>
      <p className='res-desc'>All my resources (CV, Certifications) are available in the following <a href='https://github.com/joeperpetua/joeperpetua.github.io/tree/main/src/Resources' rel="noreferrer" target="_blank">link</a>.</p>
      <p className='res-desc'>My socials:</p>
      <a href='https://github.com/joeperpetua' rel="noreferrer" target="_blank" className='res-desc'>Github</a>
      <a href='https://www.linkedin.com/in/joelperpetua?locale=en_US' rel="noreferrer" target="_blank" className='res-desc'>LinkedIn</a>
      <br></br>
      <p className='res-desc'>Attributions:</p>
      <a className='res-desc' rel="noreferrer" target="_blank" href="https://icons8.com/icon/3096/menu">Menu icon by Icons8</a>
      <a className='res-desc' rel="noreferrer" target="_blank" href="https://icons8.com/icon/fuaPZ2MgTeTk/x">X icon by Icons8</a>
    </div>
  );
}

export {Resources};