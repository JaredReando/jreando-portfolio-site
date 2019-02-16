import React from 'react';

function Education(props) {
  return (
    <div className='education'>
    <style jsx>{`
      .education {
        display: inline-block;
        margin: 20px;
        background: red;
        height: 300px;
        width: 300px;
      }      
      `}
    </style>
    
      <h1>You went to {props.school}</h1>
    </div>
  )
}

export default Education;
