import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
//import './UserDetails.css'; // Add styles if needed

const UserDetails = () => {
    const [user, setUser] = useState({ name: '', email: '' });
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUser({ ...user, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (user.name && user.email) {
            // Save the user details in localStorage to access later
            localStorage.setItem('userDetails', JSON.stringify(user));
            navigate('/quiz');
        } else {
            alert('Please fill in both fields!');
        }
    };

    return (
        <div className="user-details-container">
            <h1>Enter Your Details</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Name:</label>
                    <input
                        type="text"
                        name="name"
                        value={user.name}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label>Email:</label>
                    <input
                        type="email"
                        name="email"
                        value={user.email}
                        onChange={handleChange}
                        required
                    />
                </div>
                <button type="submit">Proceed to Quiz</button>
            </form>
        </div>
    );
};

export default UserDetails;
