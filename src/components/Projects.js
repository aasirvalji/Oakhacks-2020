import React from 'react';
import '../styles/Projects.css'
import Rotate from 'react-reveal/Rotate';
import Slide from 'react-reveal/Slide';
import {Link} from "react-router-dom";

function Projects() {
  return (
      <div className='projects' id='apply'>

  <Slide right>
      <h2>Get Involved</h2>
</Slide>

      <Rotate bottom right>
      
  
        
      
    <div className = 'projects-container'>
  



    <div class="break"></div> 
<Link to='/apply'>
    <button class="btn btn3" href='https://devpost.com/software/aurorah'>Apply Now!</button>
</Link>

    </div>

    <div className = 'img1' id='img1'>
          <img src={'https://cdn.dribbble.com/uploads/575/original/64815831abbb233d50e55983da639d51.gif?1544738877'} alt='Programmer'></img>
           </div>

    </Rotate>
    </div>
  );
}

export default Projects;
