import React from 'react'
import { Link } from 'react-router-dom'
import Project from './Project';
import imageOne from '../assets/img/imageOne.jpg';
import imageTwo from'../assets/img/imageTwo.png';
import imageThree from '../assets/img/imageThree.jpg';

let allProjects = [
  {
    imagePath: <imageOne/>,
    projectName: 'MasterMind'
  },
  {
    imagePath: <imageTwo/>,
    projectName: 'Messenger Hunt'
  },
  {
    imagePath: <imageThree/>,
    projectName: 'Trimet Commuter'
  }
]

function ProjectList() {
  return (
    <div>
      <h1>ProjectList works</h1>
      <hr/>
      {allProjects.map((project, index) =>
        <Project
          imagePath = {project.imagePath}
          projectName = {project.projectName}
          key = {index}
          id = {index}
        />
      )}
    </div>
  )
}

export default ProjectList;
