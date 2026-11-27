import React, { useState } from 'react';
import './MyCourses.css';

function MyCourses() {

    const [courses, setCourses] = useState([
        {
            id: 1,
            title: 'Web Development',
            category: 'Development',
            students: 45,
            lessons: 18,
            level: 'Beginner',
            status: 'Published',
            icon: '💻'
        },
        {
            id: 2,
            title: 'Python Programming',
            category: 'Programming',
            students: 38,
            lessons: 15,
            level: 'Intermediate',
            status: 'Published',
            icon: '🐍'
        },
        {
            id: 3,
            title: 'Database Management',
            category: 'Database',
            students: 37,
            lessons: 12,
            level: 'Beginner',
            status: 'Draft',
            icon: '🗄️'
        }
    ]);

    const handleDelete = (id) => {
        const confirmDelete = window.confirm(
            'Are you sure you want to delete this course?'
        );

        if (confirmDelete) {
            setCourses(courses.filter(course => course.id !== id));
        }
    };

    return (
        <div className="my-courses-page">

            <div className="my-courses-header">
                <div>
                    <h1>My Courses</h1>
                    <p>Manage all your created courses in one place.</p>
                </div>

                <button
                    className="add-course-btn"
                    onClick={() => window.location.href = '/instructor/create-course'}
                >
                    + Create New Course
                </button>
            </div>

            <div className="course-summary">

                <div className="summary-card">
                    <span>📚</span>
                    <div>
                        <p>Total Courses</p>
                        <h2>{courses.length}</h2>
                    </div>
                </div>

                <div className="summary-card">
                    <span>👨‍🎓</span>
                    <div>
                        <p>Total Students</p>
                        <h2>
                            {courses.reduce(
                                (total, course) => total + course.students, 0
                            )}
                        </h2>
                    </div>
                </div>

                <div className="summary-card">
                    <span>✅</span>
                    <div>
                        <p>Published Courses</p>
                        <h2>
                            {courses.filter(
                                course => course.status === 'Published'
                            ).length}
                        </h2>
                    </div>
                </div>

            </div>

            <div className="courses-list-section">

                <div className="courses-list-heading">
                    <div>
                        <h2>All Courses</h2>
                        <p>View and manage your learning content.</p>
                    </div>
                </div>

                <div className="courses-grid">

                    {courses.map(course => (

                        <div className="my-course-card" key={course.id}>

                            <div className="my-course-top">
                                <div className="my-course-icon">
                                    {course.icon}
                                </div>

                                <span className={
                                    course.status === 'Published'
                                        ? 'status published'
                                        : 'status draft'
                                }>
                                    {course.status}
                                </span>
                            </div>

                            <span className="my-course-category">
                                {course.category}
                            </span>

                            <h3>{course.title}</h3>

                            <div className="my-course-details">
                                <span>👨‍🎓 {course.students} Students</span>
                                <span>📖 {course.lessons} Lessons</span>
                            </div>

                            <div className="course-level">
                                Level: <strong>{course.level}</strong>
                            </div>

                            <div className="my-course-actions">

                                <button className="edit-course-btn">
                                    Edit
                                </button>

                                <button
                                    className="delete-course-btn"
                                    onClick={() => handleDelete(course.id)}
                                >
                                    Delete
                                </button>

                            </div>

                        </div>

                    ))}

                </div>

                {courses.length === 0 && (
                    <div className="empty-courses">
                        <h3>No Courses Available</h3>
                        <p>Create your first course to get started.</p>
                    </div>
                )}

            </div>

        </div>
    );
}

export default MyCourses;