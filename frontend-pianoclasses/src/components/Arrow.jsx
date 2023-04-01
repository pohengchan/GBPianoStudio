// import React, { useEffect } from "react";
// import { Power3, gsap } from "gsap";
// import { Link } from "react-router-dom";
// import Play from "../components/Play";

// function SmoothScroll() {
//   useEffect(() => {
//     const smoothScroll = (e) => {
//       e.preventDefault();
//       ------------------------------------------------
//     //   const target = e.target.getAttribute("href");
//     //   const $target = document.querySelector(target);
//     //   const offsetTop = $target ? $target.offsetTop : 0;

//     //   gsap.to(window, {
//     //     duration: 0.8,
//     //     scrollTo: { y: offsetTop },
//     //     ease: Power3.easeOut,
//     //   });

//     -----------------------------------------------------
//     };

//     const headings = document.querySelectorAll(".heading");
//     gsap.from(headings, { opacity: 0, y: 20, delay: 0.2, stagger: 0.4 });

//     const links = document.querySelectorAll(".smoothscroll");
//     links.forEach((link) => {
//       link.addEventListener("click", smoothScroll);
//     });

//     return () => {
//       links.forEach((link) => {
//         link.removeEventListener("click", smoothScroll);
//       });
//     };
//   }, []);

//   return (
//     <>
//       <div className="smoothscroll">
//         <div className="mouse">
//           <div className="wheel"></div>
//         </div>
//       </div>
//       <div className="smoothscroll">
//         <div className="scroll-down"></div>
//       </div>
//       <div id="offsetTop"></div>
//     </>
//   );
// }

// export default SmoothScroll;


import React, { useState, useEffect } from 'react';
import { FaArrowDown } from 'react-icons/fa';

function ScrollToBottom() {
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', checkScrollTop);
    return function cleanup() {
      window.removeEventListener('scroll', checkScrollTop);
    };
  });

  const checkScrollTop = () => {
    if (!showScroll && window.pageYOffset > 150) {
      setShowScroll(true);
    } else if (showScroll && window.pageYOffset <= 150) {
      setShowScroll(false);
    }
  };

  const scrollTop = () => {
    window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
  };

  return (
    <>
    <FaArrowDown className="scrollTop fa-10x" onClick={scrollTop}/>
    </>
  );
}

export default ScrollToBottom;
