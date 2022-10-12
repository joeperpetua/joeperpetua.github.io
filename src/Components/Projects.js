import './Projects.css';
import {projectsRaw} from '../lib/projectsRaw.js';

const compileDescription = (str, key) => {
  document.querySelector(`#desc-${key}`).innerHTML = str;
}

const renderProjects = () => {
  return (
    projectsRaw.map((element, key) => (
      <div key={key} className='project-item'>
        <h3 className='project-title'>{element.name}</h3>
        <p className='project-sub-title'><i>{element.technologies}</i> | {element.status}</p>
        <p id={'desc-' + key} className='project-desc' onLoad={compileDescription(element.description, key)}></p>
        {element.gh_link.map(
          (link, link_key) => (
            <a key={link_key} href={link[1]} rel="noreferrer" target="_blank" className='project-link'>{link[0]} Repository</a>
          )
        )}
        {element.demo_link ? (<a href={element.demo_link} rel="noreferrer" target="_blank" className='project-link'>Online Demo</a>) : null}
        <hr></hr>
      </div>
    ))
  );
}

function Projects() {
  return (
    <div className="Projects">
      <span className='app-anchor' id="projects"></span>
      <h2 className='app-title'>My Projects</h2>
      {renderProjects()}
    </div>
  );
}

export {Projects};