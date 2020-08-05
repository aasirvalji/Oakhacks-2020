import React from 'react';
import '../styles/About.css';
import Slide from 'react-reveal/Slide';
import robot from '../assets/dummy.png';

function About() {
  return (
    <div className="about" id="abt">
      <Slide right>
        <h2>About OakHacks</h2>
      </Slide>

      <div className="about-container">
        <Slide left>
          <div className="about-image">
            <img src={robot} alt="Programmer"></img>
          </div>
        </Slide>

        <Slide right>
          <div className="about-text">
            <p>
            Accompany students across the world in pushing the bounds of what’s possible.
            <br></br>
            <br></br>
Oakhacks is a virtual hackathon that’s catered to high school and university students. This hackathon is beginner friendly. 
This means, you don’t need to have written a single line of code to participate. 
Our goal with OakHacks is to promote engineering and development as well as bring people across the globe together during quarantine!
<br></br>
<br></br>

As a participant, you will be allowed to build whatever you want. Explore your creativity.
<br></br>
<br></br>
You will have 24 hours to build something you think is cool and show it off to our judges. 
<br></br>
<br></br>
We will be releasing our schedule for the hackathon shortly. Stay tuned for that.
<br></br>
<br></br>
Oakhacks will be held on <b>September the 12th-13th.</b>



            </p>
          </div>
        </Slide>
      </div>
    </div>
  );
}

export default About;
