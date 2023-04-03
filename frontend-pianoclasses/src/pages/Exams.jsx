import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Examstext from '../components/Examstext';

function Exams() {
  return (
    <>
    <Navbar/>
    <h1 className='h1-register'>EXAMS</h1>
    <Examstext/>
    <Footer/>
    </>
  )
}

export default Exams