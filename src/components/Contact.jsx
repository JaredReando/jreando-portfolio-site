import React from 'react';
import gitHubIcon from '../assets/img/github-sign.svg';
import linkedInIcon from '../assets/img/linkedin-sign.svg';
import gmailIcon from '../assets/img/gmail.svg';
import CircleImage from './CircleImage';

function Contact() {
  return (
    <div className='contact'>
      <style jsx>{`
        .contact {
          background: green
        }      
        `}
      </style>
      <h1>Contact Works</h1>
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
    </div>
  )
}

export default Contact;
