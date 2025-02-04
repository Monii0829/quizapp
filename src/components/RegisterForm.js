import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './RegisterForm.css';
function RegisterForm() {
    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');
    const [mobilenumber, setMobilenumber] = useState('');
    const [email, setEmail] = useState('');
    const [newpassword, setNewpassword] = useState('');
    const [confirmpassword, setConfirmpassword] = useState('');
    const nav=useNavigate()
    const handleSubmit = async (e) => {
        e.preventDefault();
        

        if (newpassword !== confirmpassword) {
            alert("Passwords do not match!");
            return;
        }

        const userData = {
            firstname,
            lastname,
            mobilenumber,
            email,
            password: newpassword
        };

        try {
            const response = await axios.post('http://localhost:8080/api/users/register', userData);
            console.log('User registered:', response.data);
            alert('User Registered Successfully!');
            nav("/login")
        } catch (error) {
            console.error('There was an error!', error);
            alert('Error occurred while registering!');
        }
    };

    return (
        <div className='signin'>
            <h2>Sign up</h2>
            <form onSubmit={handleSubmit}>
                <label>First Name</label>
                <input
                    type="text"
                    value={firstname}
                    onChange={(e) => setFirstname(e.target.value)}
                    required
                />
                <br />
                <label>Last Name</label>
                <input
                    type="text"
                    value={lastname}
                    onChange={(e) => setLastname(e.target.value)}
                    required
                />
                <br />
                <label>Mobile Number</label>
                <input
                    type="text"
                    value={mobilenumber}
                    onChange={(e) => setMobilenumber(e.target.value)}
                    required
                />
                <br />
                <label>Email</label>
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <br />
                <label>New Password</label>
                <input
                    type="password"
                    value={newpassword}
                    onChange={(e) => setNewpassword(e.target.value)}
                    required
                />
                <br />
                <label>Confirm Password</label>
                <input
                    type="password"
                    value={confirmpassword}
                    onChange={(e) => setConfirmpassword(e.target.value)}
                    required
                />
                <br />
                <button type="submit">Register</button>
            </form>
        </div>
    );
}

export default RegisterForm;
