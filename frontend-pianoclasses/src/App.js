import React from 'react';
import './index';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Contactbutton from './components/Contactbutton';
import Textborder from './components/Textborder';
import Piano from './components/Piano';
import Play from './components/Play';
import Arrow from './components/Arrow';


function App() {
  return (
    <>
    <Navbar/>
    <Piano/>
    <Textborder/>
    <Contactbutton/>
    <Arrow/>
    <h1 className='h1-play'>GIVE IT A TRY A CLICK ON THE KEYS</h1>
    <Play/>
    <Footer/>
    </>
  );
}
export default App;