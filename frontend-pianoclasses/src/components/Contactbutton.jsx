import React from 'react';
import { Link } from 'react-router-dom'
import '../index.css';

function Contactbutton() {
  return (
    <>
    <div className='button-container'>
        <Link to='/Contact'><button className='custom-btn btn-15'>CONTACT ME</button></Link>

    </div>
    </>
  )
}

export default Contactbutton