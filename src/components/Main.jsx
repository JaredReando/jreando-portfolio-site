import React from 'react';
import Contact from './Footer/Contact';
import ProjectList from './Portfolio/ProjectList';
import ExperienceList from './Experience/ExperienceList';
import EducationList from './Education/EducationList';
import styled from 'styled-components';

import About2 from './AboutMe/About2';
import NewProjectList from './Portfolio/NewProjectList';



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

function Main() {
  return (
    <StyledDiv>
      <About2 />
      <MiddlePart>
        <NewProjectList />
        <ProjectList />
        <EducationList />
        <ExperienceList />
      </MiddlePart>
      <Contact />
    </StyledDiv>
  )
}

export default Main;
