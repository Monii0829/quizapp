// src/components/LoginForm.js
import React, { useState } from 'react';
import axios from 'axios';
import { useLocation, useNavigate } from 'react-router-dom';
import './LoginForm.css';

function LoginForm() {
    const [identifier, setIdentifier] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    
    const location = useLocation();
    const nav=useNavigate()

    // Display a success message if redirected from Register page
    const successMessage = location.state?.successMessage;

    const handleLogin = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('http://localhost:8080/api/users/login', null, {
                params: {
                    identifier: identifier,
                    password: password
                }
            });
            
            
            if(response.data=== "Login successful!"){
                alert(response.data);
            nav("/")
            }
            else{
                alert(response.data);
               
            }

        } catch (error) {
            setMessage("Error occurred during login. Please try again.");
            console.error(error);
        }
    };

    return (
        <div className='login'>
            <h2>Login</h2>
            {successMessage && <p style={{ color: 'green' }}>{successMessage}</p>}
            <form onSubmit={handleLogin}>
                <label>Email or Mobile Number</label>
                <input
                    type="text"
                    value={identifier}
                    onChange={(e) => setIdentifier(e.target.value)}
                    required
                />
                <br />
                <label>Password</label>
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                <br />
                <button type="submit">Login</button>
            </form>
            <p>{message}</p>
        </div>
    );
}

export default LoginForm;
