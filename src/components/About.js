import React from 'react';
import '../styles/About.css';
import Slide from 'react-reveal/Slide';

function About() {
  return (
    <div className="about" id="abt">
      <Slide right>
        <h2>About OakHacks</h2>
      </Slide>

      <div className="about-container">
        <Slide left>
          <div className="about-image">
            <img
              src={
                'https://storage.googleapis.com/domains-goog-prod/exports/2019-08-02/tld/tech/GOE002-Google-Partner-Marketing-Illustrations_TECH-Small-Image-2_190729-V01-01.png'
              }
              alt="Programmer"
            ></img>
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
