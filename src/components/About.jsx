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
          grid-template-columns: auto auto;
          grid-column-gap: 40px;
          background: lightgreen;
          align-items: center;
          justify-items: center;
        }

        #profile-pic img {
          height: 200px;
          width: 200px;
          object-fit: cover;
          border-radius: 50%;
          border: 3px solid black;
        }
        p {
          max-width: 50%;
        }

        div {
          border: 1px solid red;
        }
      `}
      </style>
      <div id='profile-pic'>
        <CircleImage
          imageSize='100px'
          imagePath={howdy}
        />
      </div>
      <div id='about-content'>
        <h2>About</h2>
        <p>On January 22, 2018, Austin, TX united in the first Hi, How Are You Day. Austinites were encouraged to check in on a neighbor, friend, co-worker, family member or loved one and ask, “Hi, How Are You?” - and to really mean it! Founders Tom Gimbel and Courtney Blanton were inspired by Austin’s love for the iconic friendly frog mural painted by Daniel Johnston - himself a world-renowned musician and visual artist despite his own struggles with mental health issues. The success of the day - and the outpouring of support from around the world - inspired the formation of the Hi, How Are You Project. The mission is to remove the stigma and shame around mental health, so people will feel open to communicate.
        <br/>
        <br/>
        We believe if we can change minds, we can change the world!</p>
      </div>
      <Contact/>
    </div>
  );
}



export default About;
