import React from 'react';
import '../styles/Landing.css'
import img1 from '../assets/treeLogoCompressed.png'
import Fade from 'react-reveal/Fade';
 
 
function Landing() {
 return (
     <div className='intro' id='start'>
   <div className = 'intro-container'>
   <Fade duration='2000' delay='1000'>
 
       <div className='intro-images'> {/* testing div */}
       <div className = 'intro-image'>
       <img src = {img1} alt='Aasir Valji' className='img1'></img>
       </div>
       </div>
 
</Fade>
   </div>
   </div>
 );
}
 
export default Landing;
 

