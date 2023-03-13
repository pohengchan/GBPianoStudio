import React, { useState } from "react";
import "../styles/NavbarStyle.css";
import { Icon } from "react-icons-kit";
import { menu } from "react-icons-kit/feather/menu";
import { x } from "react-icons-kit/feather/x";
import logo from "../assets/images/Logo1.png";
import { Link } from "react-router-dom";


export const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const toggleIcon = toggle ? (
    <Icon icon={x} size={28} />
  ) : (
    <Icon icon={menu} size={28} />
  );

  const handleToggle = () => {
    setToggle(!toggle);
  };

  return (
    <nav className={toggle ? "navbar expanded" : "navbar"}>
      <Link className="logo" to="/">
        <img className="logo" src={logo} alt="tribe.fly" />
      </Link>
      <div className="toggle-icon" onClick={handleToggle}>
        {toggleIcon}
        
      </div>
      <ul className="links">
        <Link to="/" className="link">
          <li>LOGIN</li>
        </Link>
        <Link to="/" className="link">
          <li>BOOK A CLASS</li>
        </Link>

        <Link to="/" className="link">
          <li>TIPS ON HOW TO PRACTICE</li>
        </Link>
        <Link to="/" className="link">
          <li>EXAMS, BOOKS ETC. </li>
        </Link>
        <Link to="/" className="link">
          <li>ABOUT</li>
        </Link>
        <Link to="/" className="link">
          <li>CONTACT</li>
        </Link>
      </ul>
    </nav>
  );
};

export default Navbar;

// import { useState, Links, Toggle } from 'react';
// import { Link } from 'react-router-dom';
// import Logo from '../assets/images/Logo1.png'

// // import styled from 'styled-components';

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   const toggleNavbar = () => {
//     setIsOpen(!isOpen);
//   };

//   return (
//     <nav>

//       <Link className="logo" to="../App.js"><img className="logo" src={Logo} alt="Logo" /></Link>

//       <Toggle onClick={toggleNavbar}>
//         <span />
//         <span />
//         <span />
//       </Toggle>
//       <Links isOpen={isOpen}>
//         <li>
//           <Link to="/">Enlace 1</Link>
//         </li>
//         <li>
//           <Link to="/">Enlace 2</Link>
//         </li>
//         <li>
//           <Link to="/">Enlace 3</Link>
//         </li>
//         <li>
//         <Link to="/">Enlace 4</Link>
//         </li>
//         <li>
//           <Link to="/">Enlace 5</Link>
//         </li>
//         <li>
//           <Link to="/">Enlace 6</Link>
//         </li>
//       </Links>
//     </nav>
//   );
// };

// export default Navbar;
