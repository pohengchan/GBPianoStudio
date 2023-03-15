import React, { useState } from "react";
import "../styles/NavbarStyle.css";
import { Icon } from "react-icons-kit";
import { menu } from "react-icons-kit/feather/menu";
import { x } from "react-icons-kit/feather/x";
import logo from "../assets/images/Logo2.png";
import { Link } from "react-router-dom";



export const Navbar = () => {
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
        <h5 className="title"> GILLIAN BETCKWITH</h5>
        <h6 className="title1">PIANO STUDIO</h6>
      </div>
      </div>
      <div className="toggle-icon" onClick={handleToggle}>
        {toggleIcon} 
      </div>
      <ul className="links">
        <Link to="/Login" className="link">
          <li>LOGIN</li>
        </Link>
        <Link to="/" className="link">
          <li>BOOK A CLASS</li>
        </Link>

        <Link to="/Tips" className="link">
          <li>TIPS ON HOW TO PRACTICE</li>
        </Link>
        <Link to="/ExamsBooks" className="link">
          <li>EXAMS</li>
        </Link>
        <Link to="/About" className="link">
          <li>ABOUT</li>
        </Link>
        <Link to="/Contact" className="link">
          <li>CONTACT</li>
        </Link>
      </ul>
    </nav>
  );
};

export default Navbar;

