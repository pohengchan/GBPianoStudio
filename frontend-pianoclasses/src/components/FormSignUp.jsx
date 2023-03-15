// import { edadValidator } from "./validators";
import React from 'react';
import { useForm } from 'react-hook-form';
import '../index.css';

    const Form = () => {

        const { register, handleSubmit, formState: { errors } } = useForm();
        const onSubmit = data => console.log(data);
        console.log(errors);

    return <div>
        
        <h1 className='h1-register'>REGISTER</h1>
        <form onSubmit={handleSubmit(onSubmit)}className='form-react'>
        <div className='form-control'>
                <label>Contact's name/ Parent's name *</label>
                <input type="text" placeholder="Contact's name/ Parent's name" {...register('nombre', {
                    required: true,
                    maxLength: 10,
                    pattern: /^[A-Za-z]+$/i 

                })} />
                {errors.nombre?.type === 'required' && <p>The name field is required</p>}
                {errors.nombre?.type === 'maxLength' && <p>The name field must be less than 10 characters</p>}
            </div>  
        <div className='form-control'>
                <label> Student’s name *</label>
                <input type="text" placeholder=" Student’s name" {...register(' Student’s name', {
                    required: true,
                    maxLength: 10
                })} />
                {errors.nombre?.type === 'required' && <p>The name field is required</p>}
                {errors.nombre?.type === 'maxLength' && <p>The name field must be less than 10 characters</p>}
            </div>
            <div className='form-control'>
                <label>Student’s date of birth *</label>
                <input type="text"placeholder="Student’s date of birth" {...register('text')} />
                {errors.text?.type ==='required' && <p></p>}
            </div>
            <div className='form-control'>
                <label>Email *</label>
                <input type="text"placeholder="emailExample@example.com" {...register('email', {
                    required: true ,
                    pattern:/^[^\s@]+@[^\s@]+\.[^\s@]+$/i
                })} />
                {errors.email?.type === 'pattern' && <p>This is not a valid email</p>}
            </div>
            <div className = 'form-control'>
                <label>Phone number *</label>
                <input type = "tel" placeholder = "Phone number" {...register('Phone number',{
                    required: true,
                //    pattern:/^[0-9]+$/i
                })} />
                {errors.password?.type === 'required' && <p>Phone number is required</p>}
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
            <div className = 'form-control'>
                <label>Confirm password *</label>
                <input type = "password"placeholder = ".............." {...register('comfirm password', {
                    required: true,
                      
                })} />
                
                {errors.confirmpwd?.type === 'required' && <p>Confirm password</p>}
            </div>
            <div className="buttons">
            <button type='submit'>CANCEL</button>
            <button type='submit'>SAVE</button>
            </div>
        </form>
    </div>
}


export default Form;
