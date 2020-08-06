import React from 'react';
import '../styles/About.css';
import Slide from 'react-reveal/Slide';
import robot from '../assets/dummy.png';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

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

            </p>
            <AppBar position="static" style={{backgroundColor: '#000088'}} className='important-dates-container'>
        <Toolbar>
          <Typography variant="h6" style={{width: '100%'}}>
            <div className='important-dates'>
                     <p>Hackathon: September 12-13th</p>
            <p>Application Deadline: August 16th</p>
            </div>
          </Typography>
        </Toolbar>
      </AppBar>
          </div>
        </Slide>
      </div>
    </div>
  );
}

export default About;
