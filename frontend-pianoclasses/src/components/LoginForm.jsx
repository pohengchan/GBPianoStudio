import React, {useState} from 'react';
import '../index.css';
// import axios from 'axios';
import { getAxiosInstance } from '../services/functions';
// // import { useNavigate } from "react-router-dom";
import swal from "sweetalert";


function Login() {
  const instance = getAxiosInstance();
  // const navigate = useNavigate();
  const [loginInput, setLoginInput] = useState({
    email: "",
    password: "",
    error_list: [],
  });

  const handleInput = (e) => {
    e.persist();
    setLoginInput({ ...loginInput, [e.target.name]: e.target.value });
  };

  const loginSubmit = (e) => {
    e.preventDefault();

    const data = {
      email: loginInput.email,
      password: loginInput.password,
    };

    instance.get('/sanctum/csrf-cookie').then((response) => {
      console.log("die");
      instance.post('http://localhost:8000/api/login', data).then((res) => {
        if (res.data.status === 200) {
          localStorage.setItem("auth_token", res.data.token);
          console.log("should work");
          localStorage.setItem("auth_name", res.data.username);
          swal("Success", res.data.message, "success");
          window.location = "/";
        } else if (res.data.status === 401) {
          console.log(res.data.status)
          swal("Warning", res.data.message, "warning");
        } else {
          console.log(res.data.status)
          swal("Warning", res.data.message, "something else");
          setLoginInput({
            ...loginInput,
            error_list: res.data.validation_errors,
          });
        }
      });
    }
    
    );
  };


    return ( 
    
    <div>
        
        <h1 className='h1-register'>LOGIN</h1>
        <form onSubmit={loginSubmit}className='form-react'>    
            <div className='form-control'>
                <label>Email *</label>
                <input type="email" name="email" onChange={handleInput} value={loginInput.email}placeholder="emailExample@example.com" />
                <span>{loginInput.error_list.email}</span>
            </div>
    
            <div className='form-control'>
                <label>Password *</label>
                <input type="password" name="password" onChange={handleInput} value={loginInput.password}placeholder="..............." />
                <span>{loginInput.error_list.password}</span>
            </div>
            <div className="buttons">
          
            <button type='submit' className='button-save'>ENTER</button>
            </div>
        </form>
    </div>
    );
}
    

export default Login;