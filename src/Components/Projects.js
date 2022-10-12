import './Projects.css';
import {projectsRaw} from '../lib/projectsRaw.js';

const renderProjects = () => {
  return (
    projectsRaw.map((element, key) => (
      <div key={key} className='project-item'>
        <h3 className='project-title'>{element.name}</h3>
        <p className='project-sub-title'><i>{element.technologies}</i> | {element.status}</p>
        <p className='project-desc'>{element.description}</p>
        {element.gh_link.api ? (<a href={element.gh_link.api} target="_blank" className='project-link'>API Repository</a>) : null}
        {element.gh_link.client ? (<a href={element.gh_link.client} target="_blank" className='project-link'>Client Repository</a>) : null}
        {element.demo_link ? (<a href={element.demo_link} target="_blank" className='project-link'>Online Demo</a>) : null}
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