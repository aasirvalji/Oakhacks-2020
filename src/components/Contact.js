import React from 'react';
import '../styles/Contact.css'
import Slide from 'react-reveal/Slide'


function Contact() {
  return (
    
      <div className='contact' id='comms'>
<Slide right>
<h2>Contact</h2>
</Slide>

<div class="middle">

      <a class="btn1" href="https://www.facebook.com/OakHacks-102041141423297/" target='_blank' rel="noopener noreferrer">
      <i class="fab fa-facebook-f"></i>
      </a>
      <a class="btn1" href="https://www.instagram.com/oakhacks/" target='_blank' rel="noopener noreferrer">
      <i class="fab fa-instagram"></i>
      </a>
      <a class="btn1" href="mailto:contact@oakhacks.com" target="_top">
      <i class="fas fa-envelope"></i>
      </a>

    </div>

    </div>
  );
}

export default Contact;
