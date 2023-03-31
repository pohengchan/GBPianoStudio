// import React from 'react';
// import '../styles/authorizerUsers.css'
// import { useState } from "react";
// import DayHour from './DayHour/DayHour';
// import { getAxiosInstance } from '../services/functions';
// var instance = getAxiosInstance();

// function Authorizer({ user }) {
//     const [isChecked, setIsChecked] = useState(false);
  
//     const handleCheckboxChange = (event) => {
//     handleAuthorise(user);    
//     setIsChecked(event.target.checked);
//     }
//     const handleAuthorise = async (id) => {
//         try {
//             // const result = await axios.post(`YOUR_URL`, {<Your JSON payload>});
//             const result = await instance.put(`http://localhost:8000/api/users/${user}/authorize`, {
//                 });
//             console.log(result);
//             console.log(instance);
//           } catch (error) {
//             console.error(error);
//           }

//     };

// if (!user) {
//     return null; 
// }

// return (
//     <div>
//     <input 
//         type="checkbox" 
//         className="Checkbox" 
//         id={`user-${user.id}`} 
//         checked={isChecked}
//         onChange={handleCheckboxChange} 
//     />
//     {showLogin && <p></p>}
//     </div>
// );
// }

// export default Authorizer;
  
   