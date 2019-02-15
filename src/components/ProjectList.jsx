import React from 'react'
import { Link } from 'react-router-dom'
import Project from './Project';
import imageOne from '../assets/img/imageOne.jpg';
import imageTwo from'../assets/img/imageTwo.png';
import imageThree from '../assets/img/imageThree.jpg';

let allProjects = [
  {
    imagePath: imageOne,
    projectName: 'MasterMind'
  },
  {
    imagePath: imageTwo,
    projectName: 'Messenger Hunt'
  },
  {
    imagePath: imageThree,
    projectName: 'Trimet Commuter'
  }
]

function ProjectList() {
  return (
    <div>
      <style jsx> {`
        .project-wrapper {
          display: grid;
          grid-template-columns: 1fr 1fr 1fr;
          // grid-column-gap: 100px;
          justify-items: center;
          max-width: 80%;
          margin-right: auto;
          margin-left: auto;
          text-align: center;
        }

        `}
      </style>
      <h1 style={{textAlign: 'center'}}>'muh projects</h1>
      <hr/>
      <div className='project-wrapper'>
        {allProjects.map((project, index) =>
          <Project
          imagePath = {project.imagePath}
          projectName = {project.projectName}
          key = {index}
          id = {index}
          />
        )}
      </div>
    </div>
  )
}

export default ProjectList;
