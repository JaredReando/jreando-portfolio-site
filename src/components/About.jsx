import React from 'react';
import howdy from '../assets/img/howdy.jpg';
import { Link } from 'react-router-dom';
import Contact from './Contact';
import CircleImage from './CircleImage';

function About(props) {
  return (
    <div className='wrapper'>
      <style jsx>{`

        .wrapper {
          display: grid;
          grid-template-columns: 1fr 2fr;
          grid-column-gap: 40px;
        }


        div {
          border: 1px solid red;
        }
        
        #profile-pic {
          align-self: stretch;
        }
        
        #about-content {
          align-self: center;
          jusitfy-self: center;
          max-width: 500px;
        }
      `}
      </style>
      <div id='profile-pic'>
        <CircleImage
          imageSize='200px'
          imagePath={howdy}
        />
      </div>
      <div id='about-content'>
        <h2 style={{textAlign: 'center'}}>hi.<br/></h2>
        <h3 style={{textAlign: 'center'}}>i'm jared, and i'm so glad you're here.</h3>
        <p>I was born and raised in Anchorage, Alaska, but I've been a committed Portlander for the last decade</p>
        <p>After graduating with a double degree in religious studies and english lit in 2012, I helped start and run a large shipping warehouse for the last six years for a fancy baby gear brand. Go figure.</p>
        <p>I've tinkered and built things since I was little, driven by a deep-seated curiosity to know how the world works.</p>
        <p>In my career so far, I've found success wherever I plant roots, look around, and ask, 'What's going on here? What can I learn? How can I make things better?"</p>
        <p>I stumbled into programming sideways, driven by necessity to find solid solutions to real world problems that weren't going away on their own.</p>
        <p>Seeing firsthand the transformative impact of well applied technology inspired my transition to pursue programming full time as a web developer.</p>
        <p>I'm wrapping up a full-time bootcamp enrollment at Epicodus, drinking daily from the information firehose to learn Ruby, Javascript, and a handful of accompanying libraries and frameworks.</p>
        <p>Check out below to read more about what I've been doing so far.</p>

      </div>
    </div>
  );
}

export default About;
