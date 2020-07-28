import React from 'react';
import '../styles/Skills.css'
import Roll from 'react-reveal/Roll';
import Slide from 'react-reveal/Slide';

function Skills() {
  return (
      <div className='skills'>

<Slide right>
      <h2>Technical Skills</h2>
      </Slide>

      <Roll bottom>
<div className='skills-container'>

<div className = 'skill-card' id='front-end'>
<h3>Front End</h3>
<p>React, HTML, CSS, Vue</p>
<img src={"https://d2eip9sf3oo6c2.cloudfront.net/series/square_covers/000/000/209/full/React_Dnd_Final.png"} alt='front-end'></img>
</div>

<div className = 'skill-card' id ='back-end' alt='back-end'>
<h3>Back End</h3>
<p>Java, Javascript, C#</p>
<img src={"https://d2eip9sf3oo6c2.cloudfront.net/series/square_covers/000/000/061/full/EGH_WebGL_Final-b.png"} alt='back-end'></img>
</div>

<div className = 'skill-card' id='other'>
<h3>Other</h3>
<p>MS Office, Matlab, Mongo</p>
<img src={"https://assets.techsmith.com/Images/content/techsmith-homepage-graphic-transparent.png"} alt='other'></img>
</div>

</div>
</Roll>
    </div>
  );
}

export default Skills;
