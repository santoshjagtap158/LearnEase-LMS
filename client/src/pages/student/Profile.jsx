import React from 'react';
import './Profile.css';
import { Link } from 'react-router-dom';

function Profile() {
    const student = {
        name: 'Rahul Sharma',
        email: 'rahul@example.com',
        role: 'Student',
        course: 'BCA',
        joined: 'November 2026'
    };

    return (
        <div className="dashboard">

            <aside className="sidebar">
                <h2>LearnEase</h2>

                <nav>
                    <Link to="/student">Dashboard</Link>
                    <Link to="/student/browse-courses">Browse Courses</Link>
                    <Link to="/student/my-courses">My Courses</Link>
                    <Link to="/student/assignments">Assignments</Link>
                    <Link to="/student/quizzes">Quizzes</Link>
                    <Link to="/student/progress">My Progress</Link>
                    <Link to="/student/profile" className="active">My Profile</Link>
                    <Link to="/">Logout</Link>
                </nav>
            </aside>

            <main className="main-content">

                <div className="navbar">
                    <h2>My Profile</h2>
                </div>

                <section className="profile-container">

                    <div className="profile-header">
                        <div className="profile-avatar">
                            {student.name.charAt(0)}
                        </div>

                        <h2>{student.name}</h2>
                        <p>{student.role}</p>
                    </div>

                    <div className="profile-details">
                        <h3>Personal Information</h3>

                        <div className="profile-info">
                            <span>Full Name</span>
                            <strong>{student.name}</strong>
                        </div>

                        <div className="profile-info">
                            <span>Email Address</span>
                            <strong>{student.email}</strong>
                        </div>

                        <div className="profile-info">
                            <span>Role</span>
                            <strong>{student.role}</strong>
                        </div>

                        <div className="profile-info">
                            <span>Course</span>
                            <strong>{student.course}</strong>
                        </div>

                        <div className="profile-info">
                            <span>Joined On</span>
                            <strong>{student.joined}</strong>
                        </div>
                    </div>

                </section>

            </main>
        </div>
    );
}

export default Profile;