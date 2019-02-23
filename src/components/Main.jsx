import React from 'react';
import ItemList from './Footer/ItemList';
import ProjectList from './Portfolio/ProjectList';
import styled from 'styled-components';

import SkillList from './Skills/SkillList';
import About from './AboutMe/About';

const backgroundColor = '#333333'

const Wrapper = styled.div``;

const Body = styled.div`
  background: ${backgroundColor};
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
      <About />
      <Body>
        <SkillList />
        <ProjectList />
      </Body>
      <ItemList />
    </Wrapper>
  )
}

export default Main;
