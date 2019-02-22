import React from 'react';
import About from './About';
import Contact from './Contact';
import ProjectList from './ProjectList';
import ExperienceList from './ExperienceList';
import EducationList from './EducationList';
import styled from 'styled-components';

import About2 from './About2';
import Education from './Education';


const StyledDiv = styled.div``;

const MiddlePart = styled.div`
  background: lightgreen;
  height: auto;

  @media (min-width: 1000px) {
    padding-bottom: 10px;
  }

  @media (max-width: 1000px) {
    margin: 0;
  }
`;

function HomePage() {
  return (
    <StyledDiv>
      <About2 />
      <MiddlePart>
        <ProjectList />
        <EducationList />
      </MiddlePart>
      <Contact />
    </StyledDiv>
  )
}

export default HomePage;
