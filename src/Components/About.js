import './About.css';

function About() {
  return (
    <div className="About">
      <span className='app-anchor' id="about"></span>
      <h2 className='app-title'>About me</h2>
      <p className='about-desc'>Hello! I am Joel Perpetua. I am 24 years old and I was born and raised in Buenos Aires, Argentina.</p>
      <p className='about-desc'>I am currently based in Vienna, Austria. I have experience as Full Stack and also working with Linux NAS devices on the data protection area and its services APIs for Synology.</p>
      <p className='about-desc'>On my free time, I enjoy developing and working on my personal projects. Lately I have been pretty obsessed with bouldering so I spend a lot of my free time in the gym.</p>
      <p className='about-desc'>
      I also enjoy learning languages and getting to know new cultures. I speak Spanish (native level), English (~C1) and French fluently (~B2). I studied Japanese for two years (of which I remember virtually nothing, but it was a fun experience) and I am currently studying German (~B1 level).
      </p>
      <p className='about-desc'>In the past years I have used and tried out a handful of languages and frameworks, mainly Js/Ts and Python, so I am more than open to work and learn new technologies and languages :)</p>
    </div>
  );
}

export {About};