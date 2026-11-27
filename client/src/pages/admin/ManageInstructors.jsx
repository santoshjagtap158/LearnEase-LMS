import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './ManageInstructors.css';
import './AdminDashboard.css';

function ManageInstructors() {

    const [instructors, setInstructors] = useState([
        { id: 1, name: 'Amit Sharma', email: 'amit@example.com', courses: 4, status: 'Active' },
        { id: 2, name: 'Priya Verma', email: 'priya@example.com', courses: 3, status: 'Active' },
        { id: 3, name: 'Rahul Patel', email: 'rahul@example.com', courses: 2, status: 'Inactive' },
        { id: 4, name: 'Neha Singh', email: 'neha@example.com', courses: 5, status: 'Active' }
    ]);

    const handleRemove = (id) => {
        if (window.confirm('Remove this instructor?')) {
            setInstructors(prev =>
                prev.filter(instructor => instructor.id !== id)
            );
        }
    };

    return (
        <div className="admin-dashboard">

            {/* Sidebar */}
            <aside className="admin-sidebar">

                <div className="admin-logo">
                    <span>LE</span>
                    LearnEase
                </div>

                <p className="admin-sidebar-heading">MAIN MENU</p>

                <nav>
                    <Link to="/admin">🏠 Dashboard</Link>
                    <Link to="/admin/students">👨‍🎓 Manage Students</Link>
                    <Link to="/admin/instructors">👨‍🏫 Manage Instructors</Link>
                    <Link to="/admin/courses">📚 Manage Courses</Link>
                </nav>

                <div className="admin-sidebar-bottom">
                    <Link to="/">🚪 Logout</Link>
                </div>

            </aside>

            {/* Main Content */}
            <main className="admin-main">

                <div className="manage-instructors-header">
                    <div>
                        <h1>Manage Instructors</h1>
                        <p>View and manage all registered instructors.</p>
                    </div>

                    <span className="instructor-count">
                        {instructors.length} Instructors
                    </span>
                </div>

                {/* Summary Cards */}
                <div className="instructor-summary">

                    <div className="instructor-summary-card">
                        <span>👨‍🏫</span>
                        <div>
                            <p>Total Instructors</p>
                            <h2>{instructors.length}</h2>
                        </div>
                    </div>

                    <div className="instructor-summary-card">
                        <span>✅</span>
                        <div>
                            <p>Active Instructors</p>
                            <h2>
                                {instructors.filter(i => i.status === 'Active').length}
                            </h2>
                        </div>
                    </div>

                    <div className="instructor-summary-card">
                        <span>📚</span>
                        <div>
                            <p>Total Courses</p>
                            <h2>
                                {instructors.reduce((total, i) => total + i.courses, 0)}
                            </h2>
                        </div>
                    </div>

                </div>

                {/* Instructor Table */}
                <div className="instructors-table-card">

                    <div className="instructors-table-heading">
                        <h2>Instructor List</h2>
                        <p>All instructors registered on LearnEase.</p>
                    </div>

                    <div className="instructors-table-wrapper">

                        <table className="instructors-table">

                            <thead>
                                <tr>
                                    <th>Instructor</th>
                                    <th>Email</th>
                                    <th>Total Courses</th>
                                    <th>Status</th>
                                    <th>Action</th>
                                </tr>
                            </thead>

                            <tbody>
                                {instructors.map(instructor => (
                                    <tr key={instructor.id}>

                                        <td>
                                            <div className="managed-instructor-name">
                                                <span>
                                                    {instructor.name.charAt(0)}
                                                </span>
                                                <strong>{instructor.name}</strong>
                                            </div>
                                        </td>

                                        <td>{instructor.email}</td>
                                        <td>{instructor.courses}</td>

                                        <td>
                                            <span className={`instructor-status ${instructor.status.toLowerCase()}`}>
                                                {instructor.status}
                                            </span>
                                        </td>

                                        <td>
                                            <button
                                                className="remove-instructor-btn"
                                                onClick={() => handleRemove(instructor.id)}
                                            >
                                                Remove
                                            </button>
                                        </td>

                                    </tr>
                                ))}
                            </tbody>

                        </table>

                        {instructors.length === 0 && (
                            <p className="no-instructors">
                                No instructors available.
                            </p>
                        )}

                    </div>
                </div>

            </main>

        </div>
    );
}

export default ManageInstructors;