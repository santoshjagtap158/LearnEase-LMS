import React from 'react';
import { Link } from 'react-router-dom';
import '../../App.css';
import './MyCourses.css';

function MyCourses() {

    const courses = [
        {
            id: 1,
            title: 'Web Development',
            instructor: 'Amit Sharma',
            lessons: 24,
            completed: 17,
            progress: 70,
            status: 'In Progress',
            icon: '💻'
        },
        {
            id: 2,
            title: 'Python Programming',
            instructor: 'Neha Verma',
            lessons: 20,
            completed: 9,
            progress: 45,
            status: 'In Progress',
            icon: '🐍'
        },
        {
            id: 3,
            title: 'Database Management',
            instructor: 'Rahul Patel',
            lessons: 18,
            completed: 18,
            progress: 100,
            status: 'Completed',
            icon: '🗄️'
        }
    ];

    return (
        <div className="dashboard">

            <aside className="sidebar">
                <h2 className="logo">LearnEase</h2>
                <p className="menu-title">MENU</p>

                <nav>
                    <Link to="/student">Dashboard</Link>
                    <Link to="/student/browse-courses">Browse Courses</Link>
                    <Link className="active" to="/student/my-courses">My Courses</Link>
                    <a href="#">Assignments</a>
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
                    <h3>My Courses</h3>
                    <div className="profile">
                        <span>Student</span>
                        <div className="avatar">S</div>
                    </div>
                </header>

                <section className="my-courses-welcome">
                    <h1>My Learning 📚</h1>
                    <p>Track your enrolled courses and continue learning.</p>
                </section>

                <section className="my-courses-summary">

                    <div className="my-summary-card">
                        <h3>Total Enrolled</h3>
                        <h2>03</h2>
                    </div>

                    <div className="my-summary-card">
                        <h3>In Progress</h3>
                        <h2>02</h2>
                    </div>

                    <div className="my-summary-card">
                        <h3>Completed</h3>
                        <h2>01</h2>
                    </div>

                </section>

                <section className="my-courses-section">

                    <h2>Enrolled Courses</h2>

                    <div className="my-courses-grid">

                        {courses.map((course) => (

                            <div className="my-course-card" key={course.id}>

                                <div className="my-course-icon">
                                    {course.icon}
                                </div>

                                <span className={
                                    course.status === 'Completed'
                                        ? 'my-status completed'
                                        : 'my-status progress'
                                }>
                                    {course.status}
                                </span>

                                <h3>{course.title}</h3>

                                <p className="my-instructor">
                                    Instructor: {course.instructor}
                                </p>

                                <div className="my-course-info">
                                    <span>Total Lessons</span>
                                    <strong>{course.lessons}</strong>
                                </div>

                                <div className="my-course-info">
                                    <span>Completed Lessons</span>
                                    <strong>{course.completed}</strong>
                                </div>

                                <div className="my-progress-heading">
                                    <span>Course Progress</span>
                                    <strong>{course.progress}%</strong>
                                </div>

                                <div className="my-progress-bar">
                                    <div style={{
                                        width: `${course.progress}%`
                                    }}></div>
                                </div>

                                <button
                                    className="my-continue-button"
                                    onClick={() => alert('Course lessons will be connected later.')}
                                >
                                    {course.status === 'Completed'
                                        ? 'Review Course'
                                        : 'Continue Learning'}
                                </button>

                            </div>

                        ))}

                    </div>

                </section>

            </main>
        </div>
    );
}

export default MyCourses;