import './About.css';

function About() {
  return (
    <div className="About">
      <span className='app-anchor' id="about"></span>
      <h2 className='app-title'>About me</h2>
      <p className='about-desc'>Hey! I am Joel Perpetua. I am 22 years old and I was born and raised in Buenos Aires, Argentina.</p>
      <p className='about-desc'>I am currently based in Paris, France. Despite my development background I am working full time as a Cloud Backup & Sync Specialist for Synology France. I enjoy developing and working on my personal projects in my free time.</p>
      <p className='about-desc'>I also enjoy learning languages and getting to know new cultures. I speak Spanish (native level), English (advanced level) and French (intermediate level) fluently. I studied Japanese for two years and I am currently studying German (both elementary level).</p>
      <p className='about-desc'>I feel most comfortable working with JavaScript, but I am more than open to work and learn new technologies and languages :)</p>
    </div>
  );
}

export {About};