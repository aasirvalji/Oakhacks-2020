import React from 'react';
import '../styles/Apply.css'
import Fade from 'react-reveal/Fade';
import TreeLogo from '../assets/onlyTreeLogo.png'
import {Link} from "react-router-dom";

function Apply() {
  return (
    <Fade duration='1500'>
<div className='coming-soon'>
<div class="coming-soon-container">
<img src={TreeLogo}></img>
<h4>Coming Soon</h4>

<div class="break"></div> 
<Link to='/'>
    <button class="butn btn4" href='https://devpost.com/software/aurorah'>Return Home</button>
</Link>
</div>
</div>
</Fade>
  );
}

export default Apply;
