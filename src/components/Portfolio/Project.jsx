import React from 'react';
import { Link } from 'react-router-dom';
import CircleImage from '../CircleImage';
import howdy from '~/assets/img/howdy.jpg';

function Project(props) {
  return (
    <div className='wrapper'>
      <style jsx> {`
        * {
          margin: 0;
        }
        a {
          text-decoration: none;
          color: green;
        }

        a:hover {
          color: black;
        }

        .wrapper {
          border: 1px solid black;
          padding: 20px;
          max-width: 400px;
          display: grid;
          grid-template-columns: 1fr;
          grid-row-gap: 20px;

          align-items: center;
          justify-items: center;
        }

        .project-card {
          width: 300px;
          height: 300px;
          border: 3px solid black;
          border-radius: 10px;
          overflow: hidden;
        }

        .project-card:hover{
        border: 6px solid black;
        }

        `}
      </style>
      <div className='project-card'>
        <img style={{width: '300px', height: '300px', objectFit: 'cover'}} src={props.imagePath}></img>
      </div>

      <div>
        <h2>{props.projectName}</h2>
        <h4><a href={props.projectGitLink}>Source Code</a> | <a href={props.projectDemoLink}>Deployed</a></h4>
      </div>

      <div>
        <p style={{textAlign: 'justify', fontSize: '1.2em'}}>{props.projectDescription}</p>
      </div>
    </div>
  );
}

export default Project;

// projectDescription
// projectTechStack
// projectGitLink
// projectDemoLink