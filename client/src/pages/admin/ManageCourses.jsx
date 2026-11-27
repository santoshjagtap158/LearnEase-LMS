import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './ManageCourses.css';
import './AdminDashboard.css';

function ManageCourses() {

    const [courses, setCourses] = useState([
        {
            id: 1,
            title: 'Web Development',
            category: 'Development',
            instructor: 'Amit Sharma',
            students: 45,
            status: 'Published'
        },
        {
            id: 2,
            title: 'Python Programming',
            category: 'Programming',
            instructor: 'Priya Verma',
            students: 38,
            status: 'Published'
        },
        {
            id: 3,
            title: 'Database Management',
            category: 'Database',
            instructor: 'Rahul Patel',
            students: 27,
            status: 'Draft'
        },
        {
            id: 4,
            title: 'Java Programming',
            category: 'Programming',
            instructor: 'Neha Singh',
            students: 32,
            status: 'Published'
        }
    ]);

    const handleRemove = (id) => {
        if (window.confirm('Are you sure you want to remove this course?')) {
            setCourses(prev =>
                prev.filter(course => course.id !== id)
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

                <div className="manage-courses-header">
                    <div>
                        <h1>Manage Courses</h1>
                        <p>View and manage all courses on LearnEase.</p>
                    </div>

                    <span className="course-count">
                        {courses.length} Courses
                    </span>
                </div>

                {/* Summary Cards */}
                <div className="course-summary">

                    <div className="course-summary-card">
                        <span>📚</span>
                        <div>
                            <p>Total Courses</p>
                            <h2>{courses.length}</h2>
                        </div>
                    </div>

                    <div className="course-summary-card">
                        <span>✅</span>
                        <div>
                            <p>Published Courses</p>
                            <h2>
                                {courses.filter(c => c.status === 'Published').length}
                            </h2>
                        </div>
                    </div>

                    <div className="course-summary-card">
                        <span>📝</span>
                        <div>
                            <p>Draft Courses</p>
                            <h2>
                                {courses.filter(c => c.status === 'Draft').length}
                            </h2>
                        </div>
                    </div>

                </div>

                {/* Course Table */}
                <div className="courses-table-card">

                    <div className="courses-table-heading">
                        <h2>Course List</h2>
                        <p>All courses available on the platform.</p>
                    </div>

                    <div className="courses-table-wrapper">

                        <table className="courses-table">

                            <thead>
                                <tr>
                                    <th>Course Name</th>
                                    <th>Category</th>
                                    <th>Instructor</th>
                                    <th>Students</th>
                                    <th>Status</th>
                                    <th>Action</th>
                                </tr>
                            </thead>

                            <tbody>
                                {courses.map(course => (
                                    <tr key={course.id}>

                                        <td>
                                            <strong>{course.title}</strong>
                                        </td>

                                        <td>{course.category}</td>
                                        <td>{course.instructor}</td>
                                        <td>{course.students}</td>

                                        <td>
                                            <span className={`course-status ${course.status.toLowerCase()}`}>
                                                {course.status}
                                            </span>
                                        </td>

                                        <td>
                                            <button
                                                className="remove-course-btn"
                                                onClick={() => handleRemove(course.id)}
                                            >
                                                Remove
                                            </button>
                                        </td>

                                    </tr>
                                ))}
                            </tbody>

                        </table>

                        {courses.length === 0 && (
                            <p className="no-courses">
                                No courses available.
                            </p>
                        )}

                    </div>
                </div>

            </main>

        </div>
    );
}

export default ManageCourses;