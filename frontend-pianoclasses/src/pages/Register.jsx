import React from 'react';
import Footer from '../components/Footer';
 import FormSignUp from '../components/FormSignUp'
import { Link } from 'react-router-dom';

function App() {
  return (
    <>
    <div className="container">
    
    <FormSignUp/>
    
    </div>
    <Footer/>
    </>
  )
}
export default App;