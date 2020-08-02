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
              {' '}
              OakHacks is a 24 hour hackathon virtual hackathon where students
              create innovative projects from scratch and push the bounds of
              what's possible.{' '}
            </p>
          </div>
        </Slide>
      </div>
    </div>
  );
}

export default About;
