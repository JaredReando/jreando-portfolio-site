import React from 'react';
import Experience from './Experience';

const allEmployers = [
  {
    employer: 'Multnomah University',
    jobTitle: 'English Tutor',
    jobDescription: 'Assisted undergrad and masters students in writing ideation, development, and composition'
  },
  {
    employer: 'Treeline Construction',
    jobTitle: 'Project Manager',
    jobDescription: 'Managed commerical and residential all-season construction projects'
  },
  {
    employer: 'Nuna',
    jobTitle: 'Senior Distribution Manager',
    jobDescription: 'Managed all aspects of 100,000ft2 national distribution center.'
  }
  
];


function ExperienceList() {
  return (
    <div>
      <h1>ExperienceList Works</h1>
      {allEmployers.map((gig, index) =>
        <Experience
          employer = {gig.employer}
          jobTitle = {gig.jobTitle}
          jobDescription = {gig.jobDescription}
          key = {index}
        />
      )}
    </div>
  );
}

export default ExperienceList;
