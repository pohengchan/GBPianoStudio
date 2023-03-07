import React from 'react';
import { Link } from 'react-router-dom'
import '../index.css';

function Contactbutton() {
  return (
    <>
    <div class="button-container">
        <Link to='/Contact'><button class="custom-btn btn-15">CONTACT ME</button></Link>

    </div>
    </>
  )
}

export default Contactbutton