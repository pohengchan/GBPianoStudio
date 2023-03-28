import React, { useState } from 'react';
import axios from 'axios';
import '../styles/authorizerUsers.css';

function Authorizer({ user }) {
const [isChecked, setIsChecked] = useState(user.authorized);
const [showLogin, setShowLogin] = useState(false);

const handleCheckboxChange = async (event) => {
    const authorized = event.target.checked;
    setIsChecked(authorized);
    setShowLogin(false);
    try {
    await updateAuthorization(user.id, authorized);
    } catch (error) {
    console.log(error);
    }
}

const updateAuthorization = async (userId, authorized) => {
    try {
    await axios.put(`/api/users/${userId}/authorization`, { authorized });
    } catch (error) {
    console.log(error);
    }
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
        checked={isChecked}
        onChange={handleCheckboxChange} 
    />
    {showLogin && <p></p>}
    </div>
);
}

export default Authorizer;
  
   