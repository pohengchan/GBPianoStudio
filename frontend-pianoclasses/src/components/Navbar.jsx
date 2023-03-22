import React, { useState } from "react";
import "../styles/NavbarStyle.css";
import { Icon } from "react-icons-kit";
import { menu } from "react-icons-kit/feather/menu";
import { x } from "react-icons-kit/feather/x";
import logo from "../assets/images/Logo3.png";
import { Link } from "react-router-dom";
import { getAxiosInstance } from "../services/functions";
import swal from 'sweetalert';

var instance = getAxiosInstance();

const logoutSubmit = (e) =>{
  e.preventDefault();

instance.post('http://localhost:8000/api/logout').then(res=> {
    if(res.data.status === 200){
    localStorage.removeItem('auth_token');
    localStorage.removeItem('auth_name');
    swal("Success",res.data.message,"success");
    window.location = "/";

    
}
});
}
  const Navbar = () => {
    var AuthButtons = '';
    if(!localStorage.getItem('auth_token')) 
    
    {
      
      AuthButtons = (
      <ul className="navbar">
        
        <Link to="/Login" className="link"><li>LOGIN</li></Link>
      
        <Link to="/Register" className="link"><li>REGISTER</li></Link>
      </ul>);
    } else{
      AuthButtons = (
      <li>
        <button type="button" onClick={logoutSubmit} className="linkbtn btn-secondary btn btn-sm">LOGOUT</button>
      </li>
    )}

  const [toggle, setToggle] = useState(false);
  const toggleIcon = toggle ? (
    <Icon icon={x} size={26} />
  ) : (
    <Icon icon={menu} size={26} />
    );

  const handleToggle = () => {
    setToggle(!toggle);

  };

  return (
    <nav className={toggle ? "navbar expanded" : "navbar"}>
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
      

        <Link to="/Calendar" className="link">
          <li>BOOK A CLASS</li>
        </Link>

        <Link to="/Tips" className="link">
          <li>TIPS ON HOW TO PRACTICE</li>
        </Link>
        <Link to="/Exams" className="link">
          <li>EXAMS</li>
        </Link>
        <Link to="/About" className="link">
          <li>ABOUT</li>
        </Link>
        <Link to="/Contact" className="link">
          <li>CONTACT</li>
        </Link>
        {AuthButtons}
      </ul>
    </nav>
  );
};

export default Navbar;

