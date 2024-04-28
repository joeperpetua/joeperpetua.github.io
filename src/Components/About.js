import './About.css';

function About() {
  return (
    <div className="About">
      <span className='app-anchor' id="about"></span>
      <h2 className='app-title'>About me</h2>
      <p className='about-desc'>Hello! I am Joel Perpetua. I am 23 years old and I was born and raised in Buenos Aires, Argentina.</p>
      <p className='about-desc'>I am currently based in Paris, France where I am employed as software developer for Synology France working on internal tools that interact with the support ticketing system for a faster and optimized workflow for all the subsidiaries around the world. I also have some experience working with Linux NAS devices on the data protection area and its services APIs.</p>
      <p className='about-desc'>On my free time, I enjoy developing and working on my personal projects (currently <a href='#multilang'>MultiLang</a>).</p>
      <p className='about-desc'>
      I also enjoy learning languages and getting to know new cultures. I speak Spanish (native level), English (~C1) and French fluently (~B2). I studied Japanese for two years (of which I remember virtually nothing, but it was a fun experience) and I am currently studying German (~B1 level).
      </p>
      <p className='about-desc'>In the past years I have used and tried out a handful of languages and frameworks, mainly JS and Python, so I am more than open to work and learn new technologies and languages :)</p>
    </div>
  );
}

export {About};