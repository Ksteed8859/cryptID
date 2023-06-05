import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { Link } from 'react-router-dom';
import { ADD_USER } from '../utils/mutations';
import Auth from '../utils/auth';

function Signup(props) {
    const [formState, setFormState] = useState({ email: '', password: '' });
    const [addUser, { error }] = useMutation(ADD_USER);

    const handleFormSubmit = async (event) => {
        event.preventDefault();
        const mutationResponse = await addUser({
            variables: {
                email: formState.email,
                password: formState.password,
                username: formState.username,
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
        <div>
            <h2>Create a New Account</h2>
            <form onSubmit={handleFormSubmit}>
                <div className="flex-row space-between my-2">
                    <label htmlFor="email">Email:</label>
                    <input
                    placeholder='cryptID@example.com'
                    name="email"
                    type="email"
                    id="email"
                    onChange={handleChange}
                    />
                </div>
                <div className="flex-row space-between my-2">
                    <label htmlFor="username">Username:</label>
                    <input
                    placeholder='Username'
                    name="username"
                    type="username"
                    id="username"
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
                    <   p className='error-text'>Email is already in use. Please log in or use a different email.</p>
                    </div>
                ) : null}
                <div className='submitBtn'>
                    <button type='submit'>Sign Up</button>
                </div>
            </form>
            <Link to="/Login">Already have an account? Login in here!</Link>
        </div>
    );
}

export default Signup;