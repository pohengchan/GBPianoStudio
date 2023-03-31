import React from 'react';


const UserDetails = ({ user, closeModal, handleEdit, deleteUser }) => {
  const { contact_name, email, student_name, candidate_number, phone_number, date_of_birth,  } = user;

  
  
  return (
    
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={closeModal}>&times;</span>
        <div>
          <h2>User Details</h2>
          <p>Name parent's: {contact_name}</p>
          <p>Email: {email}</p>
          <p>Student: {student_name}</p>
          <p>Candidate number: {candidate_number}</p>
          <p>Phone: {phone_number}</p>
          <p>Date of birth: {date_of_birth}</p>
           </div>
        <div className='btnmodel'>
          <button className='btnNav' onClick={handleEdit}>Edit</button>
          <button className='btnNav' onClick={deleteUser}>Delete</button>
        </div>
      </div>
    </div>
  );
};

export default UserDetails;