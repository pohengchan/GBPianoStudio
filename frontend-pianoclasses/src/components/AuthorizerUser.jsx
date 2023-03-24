import React from 'react';
import '../styles/authorizerUsers.css'
import { useState } from "react";
import DayHour from './DayHour/DayHour';

function Authorizer({ user }) {
    const [isChecked, setIsChecked] = useState(false);
  
    const handleCheckboxChange = (event) => {
    setIsChecked(event.target.checked);
    }

    if (!user) {
    return null; 
    }

    return (
    <div>
        <input 
        type="checkbox" 
        className="Checkbox" 
        id={`user-${user.id}`} 
        onChange={handleCheckboxChange} 
        />
        {isChecked && <AccessDayHour />}
    </div>
  );
}

function AccessDayHour() {
    const grantAccess = () => {
        return <DayHour />;
    }
return grantAccess;

}

export default Authorizer;
  
   {/* <label htmlFor={`user-${user.id}`}></label>
        {isChecked && <DayHour />} */}