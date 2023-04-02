import React from 'react';
import '../index.css';
import photo from '../assets/images/piano_front.jpeg'; // with import


function AboutPicture() {
  return (
    <>
    <div id='container-father-box'>
        <img style={{ width: "40%", height: "40%" }} src={photo} alt="The class piano" />
    </div>
    </>
  )
}

export default AboutPicture