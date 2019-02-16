import React from 'react';
import Education from './Education';

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
