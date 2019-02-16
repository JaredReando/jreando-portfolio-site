import React from 'react';
import Education from './Education';
import gitHubIcon from '../assets/img/github-sign.svg'
import linkedInIcon from '../assets/img/linkedin-sign.svg'
import gmailIcon from '../assets/img/gmail.svg'
import CircleImage from './CircleImage';

const allSchools = [
  {
    school: 'Epicodus'
  },
  {
    school: 'Multnomah'
  }
  
]


function EducationList() {
  return (
    <div>
    <CircleImage
    imageSize = '30px'
    imagePath = {gitHubIcon}
    />
    <CircleImage
    imageSize = '30px'
    imagePath = {linkedInIcon}
    />
    <CircleImage
    imageSize = '30px'
    imagePath = {gmailIcon}
    />
      <h1>EducationList Works</h1>
      {allSchools.map((school, index) =>
        <Education
        school = {school.school}
        key = {index}
        />
      )}
    </div>
  )
}

export default EducationList;
