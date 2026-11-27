import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../../App.css';
import './Assignments.css';

function Assignments() {

    const [assignments, setAssignments] = useState([
        {
            id: 1,
            title: 'HTML and CSS Website',
            course: 'Web Development',
            instructor: 'Amit Sharma',
            dueDate: '2026-12-05',
            status: 'Pending'
        },
        {
            id: 2,
            title: 'Python Calculator Program',
            course: 'Python Programming',
            instructor: 'Neha Verma',
            dueDate: '2026-12-08',
            status: 'Submitted'
        },
        {
            id: 3,
            title: 'SQL Queries Practice',
            course: 'Database Management',
            instructor: 'Rahul Patel',
            dueDate: '2026-12-12',
            status: 'Pending'
        }
    ]);

    const handleSubmit = (id) => {
        setAssignments((previous) =>
            previous.map((assignment) =>
                assignment.id === id
                    ? { ...assignment, status: 'Submitted' }
                    : assignment
            )
        );
    };

    return (
        <div className="dashboard">

            <aside className="sidebar">
                <h2 className="logo">LearnEase</h2>
                <p className="menu-title">MENU</p>

                <nav>
                    <Link to="/student">Dashboard</Link>
                    <Link to="/student/browse-courses">Browse Courses</Link>
                    <Link to="/student/my-courses">My Courses</Link>
                    <Link className="active" to="/student/assignments">Assignments</Link>
                    <a href="#">Quizzes</a>
                    <a href="#">My Progress</a>
                    <a href="#">Profile</a>
                </nav>

                <div className="sidebar-bottom">
                    <Link to="/">Logout</Link>
                </div>
            </aside>

            <main className="main-content">

                <header className="navbar">
                    <h3>My Assignments</h3>

                    <div className="profile">
                        <span>Student</span>
                        <div className="avatar">S</div>
                    </div>
                </header>

                <section className="assignment-welcome">
                    <h1>My Assignments 📝</h1>
                    <p>Manage your tasks and keep track of submissions.</p>
                </section>

                <section className="assignment-summary">

                    <div className="assignment-summary-card">
                        <h3>Total Assignments</h3>
                        <h2>{assignments.length}</h2>
                    </div>

                    <div className="assignment-summary-card">
                        <h3>Submitted</h3>
                        <h2>
                            {assignments.filter(a => a.status === 'Submitted').length}
                        </h2>
                    </div>

                    <div className="assignment-summary-card">
                        <h3>Pending</h3>
                        <h2>
                            {assignments.filter(a => a.status === 'Pending').length}
                        </h2>
                    </div>

                </section>

                <section className="assignment-list-section">

                    <h2>Assignment List</h2>

                    <div className="assignment-list">

                        {assignments.map((assignment) => (

                            <div className="assignment-card" key={assignment.id}>

                                <div className="assignment-card-top">
                                    <div>
                                        <h3>{assignment.title}</h3>
                                        <p>{assignment.course}</p>
                                    </div>

                                    <span className={
                                        assignment.status === 'Submitted'
                                            ? 'assignment-status submitted'
                                            : 'assignment-status pending'
                                    }>
                                        {assignment.status}
                                    </span>
                                </div>

                                <div className="assignment-details">
                                    <p>
                                        <strong>Instructor:</strong> {assignment.instructor}
                                    </p>

                                    <p>
                                        <strong>Due Date:</strong> {assignment.dueDate}
                                    </p>
                                </div>

                                <button
                                    className="assignment-submit-btn"
                                    disabled={assignment.status === 'Submitted'}
                                    onClick={() => handleSubmit(assignment.id)}
                                >
                                    {assignment.status === 'Submitted'
                                        ? 'Submitted'
                                        : 'Submit Assignment'}
                                </button>

                            </div>

                        ))}

                    </div>

                </section>

            </main>
        </div>
    );
}

export default Assignments;