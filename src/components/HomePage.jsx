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
        max-height: 100vh;
        overflow: scroll;
        
        font-family: America, sans-serif;
        display: grid;
        grid-template-columns: 100vw;
        grid-template-rows: 100vh repeat(4, 100vh);
        scroll-snap-type: y mandatory;
      }
      
      div {
        border: 1px solid black;
      }
      
      #about-section {
        background: tomato;
        scroll-snap-align: start;
      }
      
      #project-section {
        scroll-snap-align: start;
        background: forestgreen;
      }
      
      #experience-section {
        scroll-snap-align: start;
        background: skyblue;
      }
      
      #education-section {
        scroll-snap-align: start;  
        background: grey;
      }
      
      #contact-section {
        scroll-snap-align: start;
        background: tomato;
      }
      
      `}
    </style>
      
      <section id='about-section'>
        <About/>
      </section>
      
      <section id='project-section'>
        <ProjectList/>
      </section>
      
      <section id='experience-section'>
        <ExperienceList/>
      </section>
      
      <section id='education-section'>
        <EducationList/>
      </section>
      
      <section id='contact-section'>
        <Contact/>
      </section>
      
    </div>
  )
}

export default HomePage;
