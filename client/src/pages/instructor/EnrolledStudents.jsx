import React, { useState } from 'react';
import './EnrolledStudents.css';

function EnrolledStudents() {

    const [students, setStudents] = useState([
        {
            id: 1,
            name: 'Rahul Sharma',
            email: 'rahul@example.com',
            course: 'Web Development',
            date: '2026-11-10',
            status: 'Active'
        },
        {
            id: 2,
            name: 'Priya Verma',
            email: 'priya@example.com',
            course: 'Python Programming',
            date: '2026-11-12',
            status: 'Active'
        },
        {
            id: 3,
            name: 'Aman Patel',
            email: 'aman@example.com',
            course: 'Database Management',
            date: '2026-11-15',
            status: 'Active'
        },
        {
            id: 4,
            name: 'Neha Singh',
            email: 'neha@example.com',
            course: 'Web Development',
            date: '2026-11-18',
            status: 'Active'
        }
    ]);

    const handleRemove = (id) => {
        if (window.confirm('Remove this student from the list?')) {
            setStudents(
                students.filter(student => student.id !== id)
            );
        }
    };

    return (
        <div className="enrolled-page">

            <div className="enrolled-header">
                <div>
                    <h1>Enrolled Students</h1>
                    <p>View and manage students enrolled in your courses.</p>
                </div>
            </div>

            <div className="enrolled-stats">

                <div className="enrolled-stat-card">
                    <div className="enrolled-stat-icon purple">👨‍🎓</div>
                    <div>
                        <p>Total Students</p>
                        <h2>{students.length}</h2>
                    </div>
                </div>

                <div className="enrolled-stat-card">
                    <div className="enrolled-stat-icon green">📚</div>
                    <div>
                        <p>Active Enrollments</p>
                        <h2>{students.filter(s => s.status === 'Active').length}</h2>
                    </div>
                </div>

                <div className="enrolled-stat-card">
                    <div className="enrolled-stat-icon blue">📖</div>
                    <div>
                        <p>Available Courses</p>
                        <h2>03</h2>
                    </div>
                </div>

            </div>

            <div className="enrolled-list-card">

                <div className="enrolled-list-heading">
                    <div>
                        <h2>Student List</h2>
                        <p>All students enrolled in your courses.</p>
                    </div>

                    <span>{students.length} Students</span>
                </div>

                <div className="enrolled-table-wrapper">

                    <table className="enrolled-table">

                        <thead>
                            <tr>
                                <th>Student</th>
                                <th>Email</th>
                                <th>Course</th>
                                <th>Enrolled Date</th>
                                <th>Status</th>
                                <th>Action</th>
                            </tr>
                        </thead>

                        <tbody>
                            {students.map((student) => (
                                <tr key={student.id}>

                                    <td>
                                        <div className="student-name-cell">
                                            <div className="student-avatar">
                                                {student.name.charAt(0)}
                                            </div>
                                            <strong>{student.name}</strong>
                                        </div>
                                    </td>

                                    <td>{student.email}</td>
                                    <td>{student.course}</td>
                                    <td>{student.date}</td>

                                    <td>
                                        <span className="student-status">
                                            {student.status}
                                        </span>
                                    </td>

                                    <td>
                                        <button
                                            className="remove-student-btn"
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
                        <p className="no-students">
                            No students enrolled yet.
                        </p>
                    )}

                </div>
            </div>

        </div>
    );
}

export default EnrolledStudents;