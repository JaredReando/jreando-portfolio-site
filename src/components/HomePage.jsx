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
          background: lightblue;
          display: grid;
          grid-template-columns: 100vw;
          grid-template-rows: 50vh;
          justify-items: center;
          align-items: center
        }
        `}
      </style>
      <div>
        <About/>
      </div>
      <div>
        <ProjectList/>
      </div>
    </div>
  )
}

export default HomePage;
