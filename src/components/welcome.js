import React from 'react';
import curriculum_vitae from '../documents/etorresdavila_cv.pdf'; 
import profile_pic from '../images/square_profile_picture.jpg';

const Welcome = () => {
  return (
    <div id="welcome">
      <h1>Welcome!</h1>
      <div className="welcome-section" id="about-me">
        <img id="profile-picture" src={profile_pic} alt="Self-portrait" />
        <h2>About Me</h2>
        <p>
          Hello! I am currently a third-year PhD student at the <a href="https://twin-cities.umn.edu/" className="ext-link" title="UMN" target="_blank" rel="noreferrer"> University
          of Minnesota</a>. I graduated in May 2020 with a Bachelors of
          Science in Applied Mathematics and a minor in Computer Science from <a href="https://www.sdsu.edu/" className="ext-link" title="SDSU" target="_blank" rel="noreferrer"> San Diego State
          University</a>. Outside of academics, I enjoy the outdoors and
          climbing!
        </p>
        <p>
          I am also a co-leader of the <a href="http://cause.umn.edu/" className="ext-link" title="CAUSE" target="_blank" rel="noreferrer"> Council for the
          Advancement of Underrepresented Scientists and Engineers</a> (CAUSE).
          We are dedicated to the recruitment, retention, and professional
          development of graduate students of color and first generation college
          students within the College of Science and Engineering.
        </p>
      </div>
      <div className="welcome-section" id="cur-doing">
        <h2>What I'm up to</h2>
        <p>
          I am currently studying for the Complex Preliminary Exam and a
          supporting mentor for the <a href="https://geometrynyc.wixsite.com/polymathreu/" className="ext-link" title="polymath-jr" target="_blank" rel="noreferrer">PolyMath Jr. REU</a> helping with the
          Ramsey Theory project.
        </p>
      </div>
      <div className="welcome-section" id="skills">
        <div id="tech-skills">
          <h2>Technical Skills</h2>
          <ul>
            <li>Python</li>
            <li className="bullet"></li>
            <li>SageMath</li>
            <li className="bullet"></li>
            <li>ReactJS</li>
            <li className="bullet"></li>
            <li>LaTeX</li>
          </ul>
        </div>
        <div id="soft-skills">
          <h2>Soft Skills</h2>
          <ul>
            <li>Math Teaching</li>
            <li className="bullet"></li>
            <li>Bilingual (English/Spanish)</li>
          </ul>
        </div>
        {/* <a href={curriculum_vitae}><div id="cv-container">CURRICULUM<br/>VITAE</div></a> */}
      </div>
      <div className="welcome-section" id="research-interest">
        <h2>Research Interest</h2>
        <p>
          While at San Diego State, my main interest was in algebraic combinatorics. In particular,
          I studied relationships between numerical semigroups and polytopes under Dr. Christopher
          O'Neill. I also participated in MSRI-UP where I had the opportunity to work with Lie algebras
          under Dr. Pamela E. Harris. Since starting graduate school, I found myself drawn to the application
          of mathematics to real world problems and because of this I have started reading under Dr. Richard
          McGehee about the mathematics behind climate change.
        </p>
      </div>
    </div>
  );
};

export default Welcome;