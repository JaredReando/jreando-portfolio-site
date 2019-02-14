import React from 'react';
import About from './About';
import Contact from './Contact';

function HomePage() {
  return (
    <div className='wrapper'>
      <style jsx>{`
        .wrapper {
          background: lightblue;
        }
        `}
      </style>
      <div>
        <About/>
      </div>
      <div>
        <Contact/>
      </div>
    </div>
  )
}

export default HomePage;
