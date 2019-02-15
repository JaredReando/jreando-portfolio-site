import React from 'react';
import { Link } from 'react-router-dom';
import CircleImage from './CircleImage';
import howdy from '../assets/img/howdy.jpg';

function Project(props) {
  return (
    <div className='project-card'>
      <style jsx> {`
        .project-card {
          width: auto;
          height: auto;
          border: 1px solid black;
        }

        `}
      </style>
      <CircleImage
        imageSize = '300px'
        imagePath = {props.imagePath}
      />
      <h2>{props.projectName}</h2>
    </div>
  )
}

export default Project;
