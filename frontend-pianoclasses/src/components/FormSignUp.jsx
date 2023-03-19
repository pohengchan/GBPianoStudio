import React, {useState} from 'react';
import '../index.css';
import axios from 'axios';
import swal from 'sweetalert';
import {useNavigate} from 'react-router-dom';



    function Form() {

   const navigate = useNavigate()
   const [registerInput,setRegisterInput] = useState({
    contact_name: '',
    student_name: '', 
    date_of_birth: '', 
    email: '',
    phone_number: '', 
    password: '', 
    error_list: [],
   

   });

   const handleInput = (e) => {
    e.persist();
    setRegisterInput({...registerInput, [e.target.name]: e.target.value });
   }
   const registerSubmit = (e) => {
    e.preventDefault();

        const data = {
            
            contact: registerInput.contact_name,
            name: registerInput.student_name, 
            date: registerInput.date_of_birth, 
            email: registerInput.email,
            phone: registerInput.phone_number, 
            password: registerInput.password, 
           

        }
        axios.get('/sanctum/csrf-cookie').then(response => {
        axios.post('/api/register', data).then(res => {
            if(res.data.status === 200)
            {
                localStorage.setItem('auth_token', res.data.token);
                localStorage.setItem('auth_name', res.data.username);
                swal("Success",res.data.message,"success");
                navigate('/');
            }
            else
            {
                setRegisterInput({...registerInput, error_list: res.data.validation_errors});
            }
        });
    });
}


    return <div>
        
        <h1 className='h1-register'>REGISTER</h1>
        <form onSubmit={registerSubmit} className='form-react'>
        <div className='form-control'>
                <label>Contact's name/ Parent's name *</label>
                <input type="text" name="contact_name" onChange={handleInput} value={registerInput.contact_name} placeholder="Contact's name/ Parent's name"/>
                <span>{registerInput.error_list.contact_name}</span>
            </div>  
        <div className='form-control'>
                <label> Student’s name *</label>
                <input type="text" name="student_name" onChange={handleInput} value={registerInput.student_name} placeholder=" Student’s name"/>
                <span>{registerInput.error_list.student_name}</span>
            </div>
            <div className='form-control'>
                <label>Student’s date of birth *</label>
                <input type="date" name="date_of_birth" onChange={handleInput} value={registerInput.date_of_birth} placeholder="Student’s date of birth"/>
                <span>{registerInput.error_list.date_of_birth}</span>
            </div>
            <div className='form-control'>
                <label>Email *</label>
                <input type="text" name="email" onChange={handleInput} value={registerInput.email} placeholder="emailExample@example.com"/>
                <span>{registerInput.error_list.email}</span>
            </div>
            <div className = 'form-control'>
                <label>Phone number *</label>
                <input type = "tel" name="phone_number" onChange={handleInput} value={registerInput.phone_number} placeholder = "Phone number" />
                <span>{registerInput.error_list.phone_number}</span>
            </div>
            <div className='form-control'>
                <label>Password *</label>
                <input type="password" name="password" onChange={handleInput} value={registerInput.password} placeholder="..............." />
                <span>{registerInput.error_list.student_name}</span>
               
            </div>
            {/* <div className = 'form-control'>
                <label>Confirm password *</label>
                <input type = "password" name="password2" onChange={handleInput} value={registerInput.password2} placeholder = ".............." />
                
            </div> */}
            <div className="buttons">
            <button type=''>CANCEL</button>
            <button type='submit'>SAVE</button>
            </div>
        </form>
    </div>
}


export default Form;
