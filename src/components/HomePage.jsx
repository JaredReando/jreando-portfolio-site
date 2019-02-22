import React from 'react';
import About from './About';
import Contact from './Contact';
import ProjectList from './ProjectList';
import ExperienceList from './ExperienceList';
import EducationList from './EducationList';
import styled from 'styled-components';

import About2 from './About2';

const Wrapper = styled.div`
  max-height: 100vh;
  overflow: scroll;
  
  font-family: America, sans-serif;
  display: grid;
  grid-template-columns: 100vw;
  grid-template-rows: 100vh repeat(4, auto);
  // scroll-snap-type: y mandatory;
`;

const Section = styled.section`
  border: 1px solid black;
  scroll-snap-align: start;
  padding-top: 20px;
  padding-bottom: 20px;
`;

const color = 'blue'

function HomePage() {
  return (
    <Wrapper>
      <style jsx>{`
      
      // section {
      //   border: 1px solid black;
      //   scroll-snap-align: start;
      //   padding-top: 20px;
      //   padding-bottom: 20px;
      // }
      
      #about-section {
        background: blue;
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

      <Section style={{background: {color}}} id='about-section'>
        <About2/>
      </Section>
      
      <Section id='project-section'>
        <ProjectList/>
      </Section>
      
      <Section id='experience-section'>
        <ExperienceList/>
      </Section>
      
      <Section id='education-section'>
        <EducationList/>
      </Section>
      
      <Section id='contact-section'>
        <Contact/>
      </Section>
      
    </Wrapper>
  );
}

export default HomePage;
