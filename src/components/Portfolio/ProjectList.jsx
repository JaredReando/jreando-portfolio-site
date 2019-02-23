import React from 'react';
import projects from './projects.json';
import trimetCommuter from '../../assets/img/trimet_commuter.png';
import masterMind from '../../assets/img/mastermind.png';
import messengerHunt from '../../assets/img/messenger_hunt.png';
import Project from './Project';
import styled from 'styled-components';


const Wrapper = styled.div`
  height: auto;
  @media (min-width: 1000px) {
    margin-top: 20px;
  }

  @media (max-width: 1000px) {
    text-align: center;
  }
`;

const Title = styled.p`
  letter-spacing: 10px;
  font-size: 2em;
  font-weight: 300;
  color: white;

  @media (min-width: 1000px) {
    margin-left: 100px;
    z-index: 99999;
  }

  @media (max-width: 1000px) {
    text-align: center;
    font-size: 1.7em;
    letter-spacing: 8px;
  }
`;

const AllProjects = styled.div`
  width: 90%;
  margin: 20px auto 0 auto;
`;

function ProjectList() {
  return (
    <Wrapper>
      <Title>Projects</Title>
      <AllProjects>
        {projects.map((project) => (
          <Project 
          key={project.id} 
          project={project} 
          />
        ))}
      </AllProjects>
    </Wrapper>
  );
}

export default ProjectList;
