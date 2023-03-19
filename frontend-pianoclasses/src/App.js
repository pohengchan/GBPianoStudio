import React from 'react';
import './index';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Contactbutton from './components/Contactbutton';
import Textborder from './components/Textborder';
import Piano from './components/Piano';
import ShowUsers from './components/ShowUsers';
import axios from 'axios';

axios.default.baseURL= "http://127.0.0.1:8000/";
axios.defaults.headers.post['Content-Type'] = 'application/json';
axios.defaults.headers.post['Accept'] = 'application/json';

axios.defaults.withCredentials = true;

function App() {
  return (
    <>
    <Navbar/>
    <Textborder/>
    <ShowUsers/>
    <Contactbutton/>
    <Piano/>
    <Footer/>
    </>
  );
}
export default App;