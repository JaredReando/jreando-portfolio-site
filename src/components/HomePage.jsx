import React from 'react';
import About from './About';
import Contact from './Contact';
import ProjectList from './ProjectList';
import ExperienceList from './ExperienceList';
import Experience from './Experience';
import EducationList from './EducationList';
import Education from './Education';

function HomePage() {
  return (
    <div className='wrapper'>
    <style jsx>{`
      .wrapper {
        font-family: America, sans-serif;
        display: grid;
        grid-template-columns: 100vw;
        grid-template-rows: 100vh repeat(4, 100vh);
      }
      
      div {
        border: 1px solid black;
      }
      
      #about-section {
        background: tomato;
        align-self: center;
      }
      `}
    </style>
      
      <div id='about-section'>
        <About/>
      </div>
      
      <div id='project-section'>
        <ProjectList/>
      </div>
      
      <div id='experience-section'>
        <ExperienceList/>
      </div>
      
      <div id='education-section'>
        <EducationList/>
      </div>
      
      <div id='contact-section'>
        <Contact/>
      </div>
      
    </div>
  )
}

export default HomePage;
