import React from 'react';
import { useForm } from 'react-hook-form';
import '../index.css';



    const Login = () => {

        const { register, handleSubmit, formState: { errors } } = useForm();
        const onSubmit = data => console.log(data);
        console.log(errors);

    return <div>
        
        <h1 className='h1-register'>LOGIN</h1>
        <form onSubmit={handleSubmit(onSubmit)}className='form-react'>    
            <div className='form-control'>
                <label>Email *</label>
                <input type="text"placeholder="emailExample@example.com" {...register('email', {
                    required: true ,
                    pattern:/^[^\s@]+@[^\s@]+\.[^\s@]+$/i
                })} />
                {errors.email?.type === 'pattern' && <p>This is not a valid email</p>}
            </div>
    
            <div className='form-control'>
                <label>Password *</label>
                <input type="password"placeholder="..............." {...register('password',{
                    required: true, 
                    maxLength: 8
                })} />
                {errors.password?.type === 'required' && <p>Password is required</p>}
                {errors.password?.type === 'maxLength' && 
    <p>Password cannot have less than 8 characters</p>}
            </div>
            <div className="buttons">
            <button type='submit'>CANCEL</button>
            <button type='submit'>ENTER</button>
            </div>
        </form>
    </div>

    }


export default Login