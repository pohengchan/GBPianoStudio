import React from 'react';
import './index';
import Footer from './components/Footer';
import Contactbutton from './components/Contactbutton';
import Textborder from './components/Textborder';
import Piano from './components/Piano';
import DayHour from './components/DayHour/DayHour';


function App() {
  return (
    <>
    <Textborder/>
    <DayHour/>
    <Contactbutton/>
    <Piano/>
    <Footer/>
    </>
  );
}

export default App;
