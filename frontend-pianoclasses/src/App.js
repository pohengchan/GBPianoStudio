import React from 'react';
import './index';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Contactbutton from './components/Contactbutton';
import Textborder from './components/Textborder';
import Piano from './components/Piano';

function App() {
  return (
    <>
    <Navbar/>
    <Textborder/>
    <Contactbutton/>
    <Piano/>
    <Footer/>
    </>
  );
}
export default App;