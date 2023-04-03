import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import AboutText from '../components/AboutText';
import AboutPicture from '../components/AboutPicture';
import AboutTestimonials from '../components/AboutTestimonials';



function About() {
  return (
    <>
    <Navbar/>
    <h1 className='h1-register'>ABOUT ME</h1>
    <AboutPicture/>
    <AboutText/>
    <AboutTestimonials/>
    <Footer/>  
   </>
  )
}

export default About