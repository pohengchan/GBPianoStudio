import React from 'react';


const UserDetails = ({ user, showModal, closeModal, handleEdit, deleteUser }) => {
  const { contact_name, student_name, email, phone_number, date_of_birth, candidate_number } = user;
  
  return showModal && (
    
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={closeModal}>&times;</span>
        <div>
          <h2>User Details</h2>
          <p>Name parent's: {contact_name}</p>
          <p>Student: {student_name}</p>
          <p>Email: {email}</p>
          <p>Phone: {phone_number}</p>
          <p>Date of birth: {date_of_birth}</p>
          <p>Candidate number: {candidate_number}</p>
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

