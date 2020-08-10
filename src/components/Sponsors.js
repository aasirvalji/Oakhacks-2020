import React from 'react';
import '../styles/Sponsors.css';
import Slide from 'react-reveal/Slide';
import bunch from '../assets/sponsors/bunch.png';
import bugsee from '../assets/sponsors/Bugsee-Logo (1).svg';
import linode from '../assets/sponsors/linodeLandscape.png';

const Sponsors = () => {
  return (
    <div className="sponsors" id="sponsor">
      <Slide right>
        <h2>Sponsors</h2>
      </Slide>

      <div className="sponsors-container">
    
          <div className="sponsors-image">
          <Slide up>
          <a
              href="https://www.linode.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={linode} alt="Linode" id="linode-logo"></img>
            </a>
            </Slide>
          <Slide right>
            <a
              href="https://bunch.live"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={bunch} alt="Bunch" id="bunch-logo"></img>
            </a>
            </Slide>
            <Slide left>
            <a
              href="https://www.bugsee.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={bugsee} alt="Bugsee" id="bugsee-logo"></img>
            </a>
        </Slide>
          </div>

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
