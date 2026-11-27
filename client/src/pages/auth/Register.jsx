import React from 'react';
import './Register.css';
import { useNavigate } from 'react-router-dom';
function Register() {
   const navigate = useNavigate();
    return (
        <div className="register-page">
            <div className="register-card">

                <h1>LearnEase</h1>

                <p className="register-subtitle">
                    Create your account and start learning
                </p>

                <form>
                    <label>Full Name</label>
                    <input
                        type="text"
                        placeholder="Enter your full name"
                    />

                    <label>Email Address</label>
                    <input
                        type="email"
                        placeholder="Enter your email"
                    />

                    <label>Password</label>
                    <input
                        type="password"
                        placeholder="Create password"
                    />

                    <label>Confirm Password</label>
                    <input
                        type="password"
                        placeholder="Confirm password"
                    />

                    <label>Select Role</label>
                    <select defaultValue="student">
                        <option value="student">Student</option>
                        <option value="instructor">Instructor</option>
                    </select>

                    <button type="submit">
                        Create Account
                    </button>
                </form>

               <p className="register-footer">
    Already have an account?{' '}
    <span
        onClick={() => navigate('/')}
        style={{
            color: '#4f46e5',
            cursor: 'pointer',
            fontWeight: 'bold'
        }}
    >
        Login
    </span>
</p>

            </div>
        </div>
    );
}

export default Register;