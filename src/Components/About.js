import './About.css';

function About() {
  return (
    <div className="About">
      <span className='app-anchor' id="about"></span>
      <h2 className='app-title'>About me</h2>
      <p className='about-desc'>Hello! I am Joel Perpetua. I am 23 years old and I was born and raised in Buenos Aires, Argentina.</p>
      <p className='about-desc'>I am currently based in Paris, France. Despite my development background I started working at Synology France as a Backup & Cloud support engineer for NAS devices. At the moment, I have transitioned to software development within the company working on internal tools that interact with the support system for a faster and optimized workflow for several subsidiaries around the world.</p>
      <p className='about-desc'>On my free time, I enjoy developing and working on my personal projects (currently <a href='#multilang'>MultiLang</a>).</p>
      <p className='about-desc'>
      I also enjoy learning languages and getting to know new cultures. I speak Spanish (native level), English (~C1) and French fluently (~B2). I studied Japanese for two years (of which I remember virtually nothing, but it was a fun experience) and I am currently studying German (~B1 level).
      </p>
      <p className='about-desc'>I feel most comfortable working with JavaScript, but I am more than open to work and learn new technologies and languages :)</p>
    </div>
  );
}

export {About};