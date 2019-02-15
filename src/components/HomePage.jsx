import React from 'react';
import About from './About';
import Contact from './Contact';
import ProjectList from './ProjectList';

function HomePage() {
  return (
    <div className='wrapper'>
    <style jsx>{`
      .wrapper {
        font-family: America, sans-serif;
        display: grid;
        grid-template-columns: 100vw;
        grid-template-rows: 100vh 50vh 50vh;
      }
      
      div {
        border: 1px solid black;
      }
      `}
    </style>
      
      <div style={{background: 'tomato'}}>
        <About/>
      </div>
      
      <div style={{background: 'lightyellow'}}>
        <ProjectList/>
      </div>
      
    </div>
  )
}

export default HomePage;
