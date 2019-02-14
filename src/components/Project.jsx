import React from 'react';
import { Link } from 'react-router-dom';
import CircleImage from './CircleImage';
import howdy from '../assets/img/howdy.jpg';

function Project(props) {
  return (
    <div style={{border: '1px solid red'}}>
      <CircleImage
        imageSize = '300px'
        imagePath = {props.imagePath}
      />
      <h2>{props.projectName}</h2>
    </div>
  )
}

export default Project;
