import React from 'react';
import './Login.css';
import { useNavigate } from 'react-router-dom';
function Login() {
    const navigate = useNavigate();
    return (
        <div className="login-page">
            <div className="login-card">

                <h1>LearnEase</h1>

                <p className="login-subtitle">
                    Login to continue your learning journey
                </p>

                <form>
                    <label>Email Address</label>
                    <input
                        type="email"
                        placeholder="Enter your email"
                    />

                    <label>Password</label>
                    <input
                        type="password"
                        placeholder="Enter your password"
                    />

                    <button className="login-button" type="submit">
                        Login
                    </button>
                </form>

               <p className="login-footer">
    Don't have an account?{' '}
    <span
        onClick={() => navigate('/register')}
        style={{ color: '#4f46e5', cursor: 'pointer', fontWeight: 'bold' }}
    >
        Register
    </span>
</p>

            </div>
        </div>
    );
}

export default Login;