import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import AboutText from '../components/AboutText';




function About() {
  return (
    <>
    <Navbar/>
    <h1 className='h1-register'>ABOUT ME</h1>
   <AboutText/>
    <Footer/>  
   </>
  )
}

export default About