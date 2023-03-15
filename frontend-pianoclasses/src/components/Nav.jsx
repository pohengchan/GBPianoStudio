// import React from 'react';
// import { getAxiosInstance } from "../../axios/axios";
// import { Link, NavLink} from 'react-router-dom';
// import swal from 'sweetalert';
// import GrootLogo from '../../assets/images/groot_logo.png'
// import '../../../src/styles/Styles.css';
// import Logout from '../Logout/Logout';


// const instance = getAxiosInstance();
// instance.interceptors.request.use(function(config){
//     const token =localStorage.getItem('auth_token');
//     config.headers.Authorization = token ? `Bearer ${token}` : "";
//     return config;
//   }) 

// function Navbar() {
//     const logoutSubmit = (e) => {
//         e.preventDefault();
        
//         instance.post(`/api/logout`).then(res => {
//             if(res.data.status === 200)
//             {
//                 localStorage.removeItem('auth_token');
//                 localStorage.removeItem('auth_name');
//                 swal("Success",res.data.message,"success");
//                 window.location = '/home';
//             }
//         });

//     }

//     var AuthButtons = '';
//     if(!localStorage.getItem('auth_token'))
//     {
//         AuthButtons = (
//             <ul className="navbar-nav">
//                 <li className="nav-item">
//                     <NavLink className='btn navbar-buttons mx-2' to="/login">Login</NavLink>
//                 </li>
//                 <li className="nav-item">
//                     <NavLink className='btn navbar-buttons ' to="/signin">Sign In</NavLink>
//                 </li>
//             </ul>
//         );
//     }
//     else
//     {
//         AuthButtons = (
//             <>
//                 <li className="nav-item">
//                     <Link className='btn navbar-buttons mb-2' to="/home">Home</Link>
//                 </li>
//                 <li className="nav-item">
//                     <Link className='btn navbar-buttons mx-2 mb-2' to="/admin">Admin</Link>
//                 </li>
//              <li className="nav-item">
//              <Link className='btn navbar-buttons  mb-2' to="/collections">Collections</Link>
//          </li>

//             <li className="nav-item">
//                 <Logout logoutSubmit={logoutSubmit}/>
//             </li>
//         </>
//         );
//     }
//   return (
//     <nav className="navbar navbar-expand-lg navbar-dark bg-primary shadow sticky-top header-container">
//     <div className="container">

//       <div className="groot-container">
//         <img src={GrootLogo} alt='Groot logo' className='groot'/>
//       </div>
//         <NavLink className="navbar-brand header-text" to="#">Groot's quotes</NavLink>

//         <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//             <span className="navbar-toggler-icon"></span>
//         </button>

//         <div className="collapse navbar-collapse" id="navbarSupportedContent">
//             <ul className="navbar-nav ms-auto mb-2 mb-lg-0">

//                 {AuthButtons}
//             </ul>
//         </div>
//     </div>
// </nav>
//   )
// }

// export default Navbar