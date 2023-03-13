import React from 'react';
import './index';
import Footer from './components/Footer';
import Contactbutton from './components/Contactbutton';
import Textborder from './components/Textborder';
import Piano from './components/Piano';
import ShowUsers from './components/ShowUsers';
import FormSignUp from './components/FormSignUp'
function App() {
  return (
    <>
    <Textborder/>
    <ShowUsers/>
    <Contactbutton/>
    <Piano/>
    <FormSignUp/>
    <Footer/>
    </>
  );
}
export default App;