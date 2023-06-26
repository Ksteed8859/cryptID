import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import Auth from '../utils/auth';
import { ADD_USER } from '../utils/mutations';

function Signup(props) {
    const [formState, setFormState] = useState({ username: '', password: '' });
    const [addUser, { error }] = useMutation(ADD_USER);

    const handleFormSubmit = async (event) => {
        event.preventDefault();
        const mutationResponse = await addUser({
            variables: {
                firstName: formState.firstName,
                lastName: formState.lastName,
                username: formState.username,
                password: formState.password,
            },
        });
        const token = mutationResponse.data.addUser.token;
        Auth.login(token);
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
            <h2>Already have an account?<Link to='/login'>Log In Here!</Link></h2>

            <h2>Create a New Account</h2>
            <form onSubmit={handleFormSubmit}>
                <div className="flex-row space-between my-2">
                    <label htmlFor="firstName">First Name: </label>
                    <input 
                        placeholder='Jane'
                        name='firstName'
                        type='firstName'
                        id='firstName'
                        onChange={handleChange}
                    />
                </div>
                <div className="flex-row space-between my-2">
                    <label htmlFor="lastName">Last Name: </label>
                    <input 
                        placeholder='Doe'
                        name='lastName'
                        type='lastName'
                        id='lastName'
                        onChange={handleChange}
                    />
                </div>
                <div className="flex-row space-between my-2">
                    <label htmlFor="username">Username: </label>
                    <input 
                        placeholder='username'
                        name='username'
                        type='username'
                        id='username'
                        onChange={handleChange}
                    />
                </div>
                <div className="flex-row space-between my-2">
                    <label htmlFor="password">Password: </label>
                    <h2>Password must be at least 8 characters</h2>
                    <input 
                        placeholder='********'
                        name='password'
                        type='password'
                        id='password'
                        onChange={handleChange}
                    />
                </div>
                {error ? (
                    <div>
                        <p className='error-text'>Something's not right! Check your credentials and try again!</p>
                        <p className='error-text'>That username may already be taken, or that password may be too short!</p>
                    </div>
                ) : null}
                <div className='flex-row flex-end'>
                    <button type="submit">Submit</button>
                </div>
            </form>
        </div>
    );
}

export default Signup;