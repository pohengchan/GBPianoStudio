import React from 'react';
import {useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { updateUser, getUser, } from '../services/Api';
import Swal from 'sweetalert2';
import '../index.css';

function EditUser() {
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState('');
  const [user, setUser] = useState([{
    id:0,
    contact_name: '',
    email: '',
    student_name: '',
    candidate_number: null,
    phone_number: '',
    date_of_birth: '',
  }]);
  let {id} = useParams();
  console.log(id)
  useEffect(() => {
    const fetchUser = async () => {
      setLoading(true);
      try {
        const userData = await getUser(id);
        console.log(userData);
        console.log(id);
        setUser(userData);
      } catch (error) {
        console.error(error);
        Swal.fire({
          title: 'Error!',
          text: 'Failed to load user data.',
          icon: 'error',
          confirmButtonText: 'OK',
          position: 'center',
          color: 'white', 
          background: '#676060', 
          confirmButtonColor: 'black', 
          customClass: {
          confirmButton: 'custom-button-class confirm-button'
          },
          buttonsStyling: false,
        });
      }
      setLoading(false);
    };
    if (id) {
      fetchUser();
    }
  }, [id]);
  const handleUpdateUser = async () => {
  const { id, contact_name, email, student_name, candidate_number, phone_number, date_of_birth } = user;
  console.log(user);
  const userData = { contact_name, email, student_name, candidate_number, phone_number, date_of_birth };
  console.log(userData);
  Swal.fire({
    title: 'Success!',
    text: 'User has been updated.',
    icon: 'success',
    confirmButtonText: 'OK',
    color: 'white',
    background: '#676060',
    position: 'center',
    confirmButtonColor: 'black', 
    customClass: {
    confirmButton: 'custom-button-class confirm-button'
    },
    buttonsStyling: false,
  });
    const response = await updateUser(id, userData);
    if (response.errors) {
      setErrors(response.errors);
    } else {
      setErrors('');
    }
  };
return (
    <div>
      {id && <h2>Update User: {user.contact_name}</h2>}
      {!id && <h1 className='users'>New User</h1>}
        {loading && (
          <div className="text-center">
            Loading...
          </div>
        )}
        {errors && (
          <div className="alert">
            {Object.keys(errors).map(key => (
              <p key={id}>{errors[key][0]}</p>
            ))}
          </div>
        )}
        {!loading && (
          <form className='form-react'>
            <div className='form-control'>
              <input value={user.contact_name} onChange={ev => setUser({...user, contact_name: ev.target.value})} placeholder="Name"/>
            </div>
            <div className='form-control'>
              <input value={user.email} onChange={ev => setUser({...user, email: ev.target.value})} placeholder="Email"/>
            </div>
            <div className='form-control'>
              <input value={user.student_name} onChange={ev => setUser({...user, student_name: ev.target.value})} placeholder="Student's name"/>
            </div>
            <div className='form-control'>
              <input  onChange={ev => setUser({...user, candidate_number: ev.target.value})} placeholder="Candidate's number"/>
            </div>
            <div className='form-control'>
              <input value={user.phone_number} onChange={ev => setUser({...user, phone_number: ev.target.value})} placeholder="Phone number"/>
            </div>
            <div className='form-control'>
              <input value={user.date_of_birth} onChange={ev => setUser({...user, date_of_birth: ev.target.value})} placeholder="Date of birth"/>
            </div>
          
            <div className='set-buttons'>
              
              <button className="contact-form-button" type="button" onClick={handleUpdateUser}>SAVE</button>
              <button className="contact-form-button btn-cancel" type="button" onClick={() => window.history.back()}>CANCEL</button>

            </div>
          </form>
      
        )}

    </div>
  );
};
export default EditUser;







