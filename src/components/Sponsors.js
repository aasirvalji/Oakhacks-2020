import React from 'react';
import '../styles/Sponsors.css';
import Slide from 'react-reveal/Slide';
import robot from '../assets/dummy.png';

const Sponsors = () => {
  return (
    <div className="sponsors" id="sp">
      <Slide right>
        <h2>Sponsors</h2>
      </Slide>

      <div className="sponsors-container">
        <Slide left>
          <div className="sponsors-image">
            <img src={robot} alt="Programmer"></img>
          </div>
        </Slide>

        <Slide right>
          <div className="sponsors-text">
            <p> More sponsors coming soon ...</p>
          </div>
        </Slide>
      </div>
    </div>
  );
};

export default Sponsors;
