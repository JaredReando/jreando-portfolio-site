import React from 'react';
import { Link } from 'react-router-dom';
import CircleImage from './CircleImage';
import howdy from '../assets/img/howdy.jpg';

function Project(props) {
  return (
    <div className='project-card'>
      <style jsx> {`
        .project-card {
          width: 300px;
          height: 300px;
          border: 3px solid black;
          border-radius: 10px;
          overflow: hidden;
        }

        .project-card:hover{
         border: 4px solid grey;
        }

        `}
      </style>
      <img style={{width: '300px', height: '300px', objectFit: 'cover'}} src={props.imagePath}></img>
      <h2>{props.projectName}</h2>
    </div>
  )
}

export default Project;
