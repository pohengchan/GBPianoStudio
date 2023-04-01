import React, { useState } from "react";
import "../styles/NavbarStyle.css";
import { Icon } from "react-icons-kit";
import { menu } from "react-icons-kit/feather/menu";
import { x } from "react-icons-kit/feather/x";
import logo from "../assets/images/Logo3.png";
import { NavLink, Link } from "react-router-dom";
import { getAxiosInstance } from "../services/functions";
import Swal from 'sweetalert2';

var instance = getAxiosInstance();

const logoutSubmit = (e) =>{
    e.preventDefault();
    instance.post('http://localhost:8000/api/logout').then(res=> {
        if(res.data.status === 200){
        localStorage.removeItem('auth_token');
        localStorage.removeItem('auth_name');
        localStorage.clear();
        Swal.fire({ text: res.data.message,color: 'white', background: '#676060', confirmButton: 'true', confirmButtonColor: '#01FDFD', });
        window.location = "/";
        }
      });
}
  const Navbar = () => {
    var AuthButtons = '';
    var Calendar = '';
    var ManageUsers = '';
    
    if(!localStorage.getItem('auth_token')) 
    {
      Calendar = '';

      AuthButtons = (
        
      <div className="login-out">
       
        <NavLink to="/Login" className="link" activeclassname="active"><li>LOGIN</li></NavLink>
      
        <NavLink to="/Register" className="link" activeclassname="active"><li>REGISTER</li></NavLink>
        </div> 
     );
    } else{
      if(localStorage.getItem('role')==='admin') {
        ManageUsers =  (
          <>  
            {/* <ul className="links"> */}
             <NavLink to="/Users" className="link" activeclassname="active">
            <li>MANAGE USERS</li>
          </NavLink>
          {/* </ul> */}
          </>
        );
       }
      Calendar =  (
        <>  
        {/* <ul className="links"> */}
           <NavLink to="/Calendar" className="link" activeclassname="active">
          <li>BOOK A CLASS</li>
        </NavLink>
        {/* </ul> */}
        </>
      );

      AuthButtons = (
      <li>
        <button type="button" onClick={logoutSubmit} className="logout-button">LOGOUT</button>
      </li>
    )}

  const [toggle, setToggle] = useState();
  const toggleIcon = toggle ? (
    <Icon icon={x} size={26} />
  ) : (
    <Icon icon={menu} size={26} />
    );

  const handleToggle = () => {
    setToggle(!toggle);

  };

  return (

    <nav className={toggle ? "navbar-expanded" : "navbar-desktop"}>
    <div className="logo">
      <Link to="/">
        <img className="piano" src={logo} alt="Logo" />
      </Link>
      <div className="nameLogo"> 
        <h5 className="title"> GILLIAN BECKWITH</h5>
        <h6 className="title1">PIANO STUDIO</h6>
      </div>
      </div>
      <div className="toggle-icon" onClick={handleToggle}>
        {toggleIcon} 
      </div>
      <ul className="links">
        {ManageUsers}
        {Calendar}

        <NavLink to="/Tips" className="link" activeclassname="active">
          <li>TEACHING TIPS</li>
        </NavLink>
        <NavLink to="/Exams" className="link" activeclassname="active">
          <li>EXAMS</li>
        </NavLink>
        <NavLink to="/About" className="link" activeclassname="active">
          <li>ABOUT</li>
        </NavLink>
        <NavLink to="/Contact" className="link" activeclassname="active">
          <li>CONTACT</li>
        </NavLink>
        {AuthButtons}
      </ul>
    </nav>
  );
};

export default Navbar;

