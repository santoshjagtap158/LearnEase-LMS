import React from 'react';
import './MyProgress.css';
import { Link } from 'react-router-dom';

function MyProgress() {

    const courses = [
        {
            id: 1,
            title: 'Web Development',
            instructor: 'Amit Sharma',
            completed: 18,
            total: 24,
            progress: 75
        },
        {
            id: 2,
            title: 'Python Programming',
            instructor: 'Neha Verma',
            completed: 12,
            total: 20,
            progress: 60
        },
        {
            id: 3,
            title: 'Database Management',
            instructor: 'Rahul Jain',
            completed: 15,
            total: 15,
            progress: 100
        }
    ];

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
                    <Link to="/student/progress" className="active">My Progress</Link>
                    <Link to="/">Logout</Link>
                </nav>
            </aside>

            <main className="main-content">

                <div className="navbar">
                    <h2>My Learning Progress</h2>
                </div>

                <section className="progress-summary">

                    <div className="progress-summary-card">
                        <h3>03</h3>
                        <p>Enrolled Courses</p>
                    </div>

                    <div className="progress-summary-card">
                        <h3>01</h3>
                        <p>Completed Courses</p>
                    </div>

                    <div className="progress-summary-card">
                        <h3>45</h3>
                        <p>Completed Lessons</p>
                    </div>

                    <div className="progress-summary-card">
                        <h3>78%</h3>
                        <p>Overall Progress</p>
                    </div>

                </section>

                <section className="course-progress-section">

                    <h2>Course-wise Progress</h2>

                    {courses.map((course) => (

                        <div className="course-progress-card" key={course.id}>

                            <div className="course-progress-info">
                                <div>
                                    <h3>{course.title}</h3>
                                    <p>Instructor: {course.instructor}</p>
                                </div>

                                <strong>{course.progress}%</strong>
                            </div>

                            <div className="progress-bar">
                                <div
                                    className="progress-fill"
                                    style={{ width: `${course.progress}%` }}
                                ></div>
                            </div>

                            <p className="lesson-count">
                                {course.completed} of {course.total} lessons completed
                            </p>

                        </div>

                    ))}

                </section>

            </main>

        </div>
    );
}

export default MyProgress;