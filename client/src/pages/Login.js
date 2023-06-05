import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { Link } from 'react-router-dom';
import { LOGIN } from '../utils/mutations';
import Auth from '../utils/auth';

function Login(props) {
    const [formState, setFormState] = useState({ email: '', password: '' });
    const [login, { error }] = useMutation(LOGIN);

    const handleFormSubmit = async (event) => {
        event.preventDefault();
        try {
            const mutationResponse = await login({
                variables: { email: formState.email, password: formState.password },
            });
            const token = mutationResponse.data.login.token;
            Auth.login(token);
        } catch (event) {
            console.log(event);
        }
    };

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormState({
            ...formState,
            [name]: value,
        });
    };

    return (
        <div className="container">
            <h2> Login to Your Account</h2>
            <form onSubmit={handleFormSubmit}>
                <div className='flex-row space-between my-2'>
                    <label htmlFor='email'>Email: </label>
                    <input
                        placeholder="cryptID@example.com"
                        name='email'
                        type='email'
                        id='email'
                        onChange={handleChange}
                    />
                </div>
                <div className='flex-row space-between my-2'>
                    <label htmlFor='pwd'>Password: </label>
                    <label>*Password must be at least 8 characters*</label>
                    <input
                        placeholder="********"
                        name='password'
                        type='password'
                        id='password'
                        onChange={handleChange}
                    />
                </div>
                {error ? (
                    <div>
                        <p className='errorText'>Email or password is incorrect</p>
                    </div> 
                ) : null}
                <div className='submitBtn'>
                    <button type='submit'>Log In</button>
                </div>
            </form>
            <Link to="/Signup">First Time? Sign up here!</Link>
        </div>
    );
}


export default Login;