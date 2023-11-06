import './About.css';

function About() {
  return (
    <div className="About">
      <span className='app-anchor' id="about"></span>
      <h2 className='app-title'>About me</h2>
      <p className='about-desc'>Hey! I am Joel Perpetua. I am 23 years old and I was born and raised in Buenos Aires, Argentina.</p>
      <p className='about-desc'>I am currently based in Paris, France. Despite my development background I started working at Synology France as a Technical Support for NAS devices, at the moment, I am transitioning to software development within the company working on internal tools that interact with the support system for a faster and omptimized workflow for several subsidiaries around the world.</p>
      <p className='about-desc'>On my free time, I enjoy developing and working on my personal projects (currently <a href='#multilang'>MultiLang</a>).</p>
      <p className='about-desc'>
      I also enjoy learning languages and getting to know new cultures. I speak Spanish (native level), English (advanced level) and French (intermediate level) fluently. I studied Japanese for two years and I am currently studying German (both elementary level).
      </p>
      <p className='about-desc'>I feel most comfortable working with JavaScript, but I am more than open to work and learn new technologies and languages :)</p>
    </div>
  );
}

export {About};