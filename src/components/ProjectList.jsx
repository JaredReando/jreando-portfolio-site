import React from 'react';
import { Link } from 'react-router-dom';
import Project from './Project';
import imageOne from '../assets/img/imageOne.jpg';
import imageTwo from'../assets/img/imageTwo.png';
import imageThree from '../assets/img/imageThree.jpg';
import trimetCommuter from '../assets/img/trimet_commuter.png';
import masterMind from '../assets/img/mastermind.png';
import messengerHunt from '../assets/img/messenger_hunt.png';

let allProjects = [
  {
    imagePath: messengerHunt,
    projectName: 'Messenger Hunt',
    projectDescription: 'Geo-location based messenging app. Uses Google API integration to post hidden messages for friends to find by checking in at matching locations.',
    projectStack: ['Ruby', 'Rails', 'Javascript'],
    projectGitLink: 'https://github.com/JaredReando/messenger_hunt',
    projectDemoLink: 'http://message-hunter.herokuapp.com/'
  },
  {
    imagePath: trimetCommuter,
    projectName: 'Tri-Met Commuter',
    projectDescription: 'Trimet transit tracking application for daily commuters. Utilizes PDX Trimet API to display live ETA information for saved stops in a clean UI.',
    projectStack: ['Javascript', 'Angular', 'Firebase'],
    projectGitLink: 'https://github.com/JaredReando/trimet-commuter',
    projectDemoLink: 'https://trimet-commuter.firebaseapp.com/main/am'
  },
  {
    imagePath: masterMind,
    projectName: 'Mastermind',
    projectDescription: 'desc',
    projectStack: 'stack',
    projectGitLink: 'https://github.com/JaredReando/mastermind',
    projectDemoLink: 'https://jaredreando.github.io/mastermind/'
  }
];

function ProjectList() {
  return (
    <div>
      <style jsx> {`
        .project-wrapper {
          display: grid;
          // grid-column-gap: 100px;
          align-items: start;
          justify-items: center;
          max-width: 80%;
          margin-right: auto;
          margin-left: auto;
          text-align: center;
        }
        @media (min-width: 1060px) {
          .project-wrapper {
            grid-template-columns: 1fr 1fr 1fr;
          }
        }

        @media (max-width: 1059px) {
          .project-wrapper {
            grid-template-columns: 1fr;
            grid-row-gap: 20px;

        }

        `}
      </style>
      <h1 style={{textAlign: 'center'}}>Projects</h1>
      <div className='project-wrapper'>
        {allProjects.map((project, index) =>
          <Project
            imagePath = {project.imagePath}
            projectName = {project.projectName}
            projectDescription = {project.projectDescription}
            projectTechStack = {project.techStack}
            projectGitLink = {project.projectGitLink}
            projectDemoLink = {project.projectDemoLink}

            key = {index}
            id = {index}
          />
        )}
      </div>
    </div>
  );
}

export default ProjectList;
