import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { Link } from 'react-router-dom';
import { LOGIN } from '../utils/mutations';
import Auth from '../utils/auth';

function Login(props) {
    const [formState, setFormState] = useState ({ username: '', password: '' });
    const [login, { error }] = useMutation(LOGIN);

    const handleFormSubmit = async (event) => {
        event.preventDefault();
        try {
            const mutationResponse = await login({
                variables: { username: formState.username, password: formState.password },
            });
            const token = mutationResponse.data.login.token;
            Auth.login(token);
        } catch (e) {
            console.log('error: ' + e.message);
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
            <h2>Don't have an account? <Link to='/signup'>Sign Up Here!</Link> </h2>

            <h2>Login</h2>
            <form onSubmit={handleFormSubmit}>
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
                        <p className='error-text'>Username or Password is Incorrect</p>
                    </div>
                ) : null}
                <div className='flex-row flex-end'>
                    <button type="submit">Submit</button>
                </div>
            </form>
        </div>
    );
}

export default Login;