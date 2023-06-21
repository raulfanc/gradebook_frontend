import React, { useState } from 'react';
import axios from 'axios';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async (e) => {
        e.preventDefault();

        try {
            let response;
            if (username === 'admin') {
                // Admin login
                response = await axios.post('http://localhost:8000/auth/', {
                    username,
                    password,
                });
            } else if (username === 'lecturer') {
                // Lecturer login
                response = await axios.post('http://localhost:8000/api/auth/lecturer/', {
                    username,
                    password,
                });
            } else {
                // Student login
                response = await axios.post('http://localhost:8000/api/auth/student/', {
                    username,
                    password,
                });
            }

            if (response.status === 200) {
                const token = response.data.token;
                // Save the token to local storage or state
                localStorage.setItem('token', token); // Save to local storage
                // OR
                // setToken(token); // Save to state

                // Perform any necessary actions after successful login
                // For example, redirect to a different page
                // window.location.href = '/dashboard';
            } else {
                console.error('Login failed');
            }
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div>
            <h1>Login</h1>
            <form onSubmit={handleLogin}>
                <input
                    type="text"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button type="submit">Login</button>
            </form>
        </div>
    );
};

export default Login;
