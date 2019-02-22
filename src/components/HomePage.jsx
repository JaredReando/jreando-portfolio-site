import React from 'react';
import About from './About';
import Contact from './Contact';
import ProjectList from './ProjectList';
import ExperienceList from './ExperienceList';
import EducationList from './EducationList';

// import styled from 'styled-components';

import styled from 'styled-components';

const Wrapper = styled.div`
  max-height: 100vh;
  overflow: scroll;
  
  font-family: America, sans-serif;
  display: grid;
  grid-template-columns: 100vw;
  grid-template-rows: 100vh repeat(4, auto);
  // scroll-snap-type: y mandatory;
`;



function HomePage() {
  return (
    <Wrapper>
      <style jsx>{`
      // .wrapper {
      //   max-height: 100vh;
      //   overflow: scroll;
        
      //   font-family: America, sans-serif;
      //   display: grid;
      //   grid-template-columns: 100vw;
      //   grid-template-rows: 100vh repeat(4, auto);
      //   // scroll-snap-type: y mandatory;
      // }
      
      section {
        border: 1px solid black;
        scroll-snap-align: start;
        padding-top: 20px;
        padding-bottom: 20px;
      }
      
      #about-section {
        background: white;
      }
      
      #project-section {
        background: white;
      }
      
      #experience-section {
        background: white;
      }
      
      #education-section {  
        background: white;
      }
      
      #contact-section {
        background: white;
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
      
    </Wrapper>
  );
}

export default HomePage;
