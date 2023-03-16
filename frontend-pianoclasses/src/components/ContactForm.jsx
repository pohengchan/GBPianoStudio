import React from 'react';
import { useForm } from 'react-hook-form';
import '../index.css';



    const ContactForm = () => {

        const { register, handleSubmit, formState: { errors } } = useForm();
        const onSubmit = data => console.log(data);
        console.log(errors);

    return <div>
        
        <h1 className='h1-register'>CONTACT ME</h1>
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
                <label>Email *</label>
                <input type="text"placeholder="emailExample@example.com" {...register('email', {
                    required: true ,
                    pattern:/^[^\s@]+@[^\s@]+\.[^\s@]+$/i
                })} />
                {errors.email?.type === 'pattern' && <p>This is not a valid email</p>}
            </div>

            <div className='form-control'>
                <label>Message *</label>
                <textarea rows="9" placeholder="Type your message here..." {...register('message', {
                    required: true ,
                    pattern:/^[^\s@]+@[^\s@]+\.[^\s@]+$/i
                })} />
                {errors.message?.type === 'pattern' && <p>Please type your message</p>}
            </div>
    
            <div className="buttons">
            <button type='submit'> CANCEL</button>
            <button type='submit'>SEND</button>
            </div>
        </form>
    </div>

    }


export default ContactForm