import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './ManageStudents.css';
import './AdminDashboard.css';

function ManageStudents() {

    const [students, setStudents] = useState([
        { id: 1, name: 'Rahul Sharma', email: 'rahul@example.com', course: 'Web Development', status: 'Active' },
        { id: 2, name: 'Priya Verma', email: 'priya@example.com', course: 'Python Programming', status: 'Active' },
        { id: 3, name: 'Aman Patel', email: 'aman@example.com', course: 'Database Management', status: 'Active' },
        { id: 4, name: 'Neha Singh', email: 'neha@example.com', course: 'Web Development', status: 'Inactive' },
        { id: 5, name: 'Rohit Jain', email: 'rohit@example.com', course: 'Python Programming', status: 'Active' }
    ]);

    const handleRemove = (id) => {
        if (window.confirm('Are you sure you want to remove this student?')) {
            setStudents(prevStudents =>
                prevStudents.filter(student => student.id !== id)
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

                    <Link to="/admin/students">
                        👨‍🎓 Manage Students
                    </Link>

                    <Link to="/admin/instructors">
                        👨‍🏫 Manage Instructors
                    </Link>

                    <Link to="/admin/courses">
                        📚 Manage Courses
                    </Link>
                </nav>

                <div className="admin-sidebar-bottom">
                    <Link to="/">🚪 Logout</Link>
                </div>

            </aside>

            {/* Main Content */}
            <main className="admin-main">

                <div className="manage-students-header">
                    <div>
                        <h1>Manage Students</h1>
                        <p>View and manage all registered students.</p>
                    </div>

                    <span className="total-student-badge">
                        {students.length} Students
                    </span>
                </div>

                {/* Summary Cards */}
                <div className="student-summary">

                    <div className="student-summary-card">
                        <span>👨‍🎓</span>
                        <div>
                            <p>Total Students</p>
                            <h2>{students.length}</h2>
                        </div>
                    </div>

                    <div className="student-summary-card">
                        <span>✅</span>
                        <div>
                            <p>Active Students</p>
                            <h2>
                                {students.filter(s => s.status === 'Active').length}
                            </h2>
                        </div>
                    </div>

                    <div className="student-summary-card">
                        <span>⏸️</span>
                        <div>
                            <p>Inactive Students</p>
                            <h2>
                                {students.filter(s => s.status === 'Inactive').length}
                            </h2>
                        </div>
                    </div>

                </div>

                {/* Student Table */}
                <div className="students-table-card">

                    <div className="students-table-heading">
                        <h2>Student List</h2>
                        <p>Registered students on LearnEase.</p>
                    </div>

                    <div className="students-table-wrapper">

                        <table className="students-table">

                            <thead>
                                <tr>
                                    <th>Student</th>
                                    <th>Email</th>
                                    <th>Enrolled Course</th>
                                    <th>Status</th>
                                    <th>Action</th>
                                </tr>
                            </thead>

                            <tbody>

                                {students.map(student => (
                                    <tr key={student.id}>

                                        <td>
                                            <div className="managed-student-name">
                                                <span>
                                                    {student.name.charAt(0)}
                                                </span>

                                                <strong>{student.name}</strong>
                                            </div>
                                        </td>

                                        <td>{student.email}</td>

                                        <td>{student.course}</td>

                                        <td>
                                            <span className={`managed-status ${student.status.toLowerCase()}`}>
                                                {student.status}
                                            </span>
                                        </td>

                                        <td>
                                            <button
                                                className="student-remove-btn"
                                                onClick={() => handleRemove(student.id)}
                                            >
                                                Remove
                                            </button>
                                        </td>

                                    </tr>
                                ))}

                            </tbody>

                        </table>

                        {students.length === 0 && (
                            <p className="empty-student-message">
                                No students available.
                            </p>
                        )}

                    </div>
                </div>

            </main>

        </div>
    );
}

export default ManageStudents;