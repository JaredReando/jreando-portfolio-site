import React from 'react';
import Contact from './Footer/Contact';
import ProjectList from './Portfolio/ProjectList';
import ExperienceList from './Experience/ExperienceList';
import EducationList from './Education/EducationList';
import styled from 'styled-components';

import SkillList from './Skills/SkillList';
import About2 from './AboutMe/About2';
import NewProject from './Portfolio/NewProject';



const Wrapper = styled.div``;

const Body = styled.div`
  background: #2A9D8F;
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
    <Wrapper>
      <About2 />
      <Body>
        <SkillList />
        <ProjectList />
        <EducationList />
        <ExperienceList />
      </Body>
      <Contact />
    </Wrapper>
  )
}

export default Main;
