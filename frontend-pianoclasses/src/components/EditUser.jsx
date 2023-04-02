import React from 'react';
import {useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { updateUser, getUser, } from '../services/Api';
import Navbar from './Navbar';
import Footer from './Footer';
import Swal from 'sweetalert2';
import '../styles/editUser.css';

  const UpdateUser = () => {
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
          confirmButtonText: 'OK'
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
  iconColor:'white',
  color: 'white',
  background: '#676060',
  confirmButtonColor: '#01FDFD',
});
    const response = await updateUser(id, userData);
    if (response.errors) {
      setErrors(response.errors);
    } else {
      // setUser(response.user);
      setErrors('');
    }
  };
return (
    <>
    <Navbar/>
      {id && <h2 className='user'>Update User: {user.contact_name}</h2>}
      {!id && <h1 className='user'>New User</h1>}
      <div className="card animated fadeInDown">
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
            <input className='form-edit' value={user.contact_name} onChange={ev => setUser({...user, contact_name: ev.target.value})} placeholder="Name"/>
            <input className='form-edit' value={user.email} onChange={ev => setUser({...user, email: ev.target.value})} placeholder="Email"/>
            <input className='form-edit' value={user.student_name} onChange={ev => setUser({...user, student_name: ev.target.value})} placeholder="Student's name"/>
            <input  className='form-edit'onChange={ev => setUser({...user, candidate_number: ev.target.value})} placeholder="Candidate's number"/>
            <input className='form-edit' value={user.phone_number} onChange={ev => setUser({...user, phone_number: ev.target.value})} placeholder="Phone number"/>
            <input className='form-edit' value={user.date_of_birth} onChange={ev => setUser({...user, date_of_birth: ev.target.value})} placeholder="Date of birth"/>
            </div>
            <div className='set-buttons'>
            <button className="save" type="button" onClick={handleUpdateUser}>SAVE
              </button>
              <button className="cancel" type="button" onClick={() => window.history.back()}>
  CANCEL
</button>
</div>
   </form>
        )}
      </div>
      <Footer/>
    </>
  );
};
export default UpdateUser;







