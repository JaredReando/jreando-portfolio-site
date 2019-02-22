import React from 'react';
import projects from './projects.json';
import trimetCommuter from '../../assets/img/trimet_commuter.png';
import masterMind from '../../assets/img/mastermind.png';
import messengerHunt from '../../assets/img/messenger_hunt.png';
import NewProject from './NewProject';
import styled from 'styled-components';


const Wrapper = styled.div`
  display: grid;
  align-items: start;
  justify-items: center;
  max-width: 80%;
  margin-right: auto;
  margin-left: auto;
  text-align: center;
  
  @media (min-width: 1060px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
  
  @media (max-width: 1059px) {
    grid-template-columns: 1fr;
    grid-row-gap: 20px; 
  }
`;





function ProjectList() {
  return (
    <div>
      <h1 style={{textAlign: 'center'}}>Projects</h1>
      <Wrapper>
        {projects.map((project) =>
          <NewProject
            key = {project.id}
            project = {project}
          />
        )}
      </Wrapper>
    </div>
  );
}

export default ProjectList;
