import React from 'react';
import '../styles/RouteNotFound.css'
import Fade from 'react-reveal/Fade';
import OHerror from '../assets/OHerror2.png'
import {Link} from "react-router-dom";

function RouteNotFound() {
  return (
    <Fade duration='1500'>
<div className='error'>
<div class="error-container">
<img src={OHerror}></img>
<h4>This page <br></br> doesn't exist</h4>

<div class="break"></div> 
<Link to='/'>
    <button class="errorbtn btn4" href='https://devpost.com/software/aurorah'>Return Home</button>
</Link>
</div>
</div>
</Fade>
  );
}

export default RouteNotFound;
