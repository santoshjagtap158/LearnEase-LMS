import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../../App.css';

function StudentDashboard() {
    const [apiMessage, setApiMessage] = useState('Connecting...');

    useEffect(() => {
        fetch('http://localhost:5000/api/health')
            .then((response) => response.json())
            .then((data) => setApiMessage(data.message))
            .catch(() => setApiMessage('Backend connection failed'));
    }, []);

    return (
        <div className="dashboard">

            <aside className="sidebar">
                <h2 className="logo">LearnEase</h2>
                <p className="menu-title">MENU</p>

                <nav>
                    <Link className="active" to="/student">Dashboard</Link>
                    <Link to="/student/browse-courses">Browse Courses</Link>
                    <Link to="/student/my-courses">My Courses</Link>
                    <Link to="/student/assignments">Assignments</Link>
                    <Link to="/student/quizzes">Quizzes</Link>
                    <Link to="/student/progress">My Progress</Link>
                    <Link to="/student/profile">Profile</Link>
                </nav>

                <div className="sidebar-bottom">
                    <Link to="/">Logout</Link>
                </div>
            </aside>

            <main className="main-content">

                <header className="navbar">
                    <h3>Student Dashboard</h3>
                    <div className="profile">
                        <span>Student</span>
                        <div className="avatar">S</div>
                    </div>
                </header>

                <section className="welcome">
                    <h1>Welcome Back, Student! 👋</h1>
                    <p>Continue your learning journey with LearnEase.</p>
                </section>

                <section className="stats">

                    <div className="stat-card">
                        <h3>Enrolled Courses</h3>
                        <h2>04</h2>
                        <p>Your active courses</p>
                    </div>

                    <div className="stat-card">
                        <h3>Available Courses</h3>
                        <h2>12</h2>
                        <p>Explore new courses</p>
                    </div>

                    <div className="stat-card">
                        <h3>Completed Lessons</h3>
                        <h2>18</h2>
                        <p>Keep learning</p>
                    </div>

                    <div className="stat-card">
                        <h3>Overall Progress</h3>
                        <h2>65%</h2>
                        <p>Your learning progress</p>
                    </div>

                </section>

                <section className="courses-section">

                    <div className="section-heading">
                        <h2>My Courses</h2>
                        <Link to="/student/my-courses">View All</Link>
                    </div>

                    <div className="course-grid">

                        <div className="course-card">
                            <div className="course-image">💻</div>
                            <h3>Web Development</h3>
                            <p>Learn HTML, CSS and JavaScript</p>
                            <div className="progress-bar">
                                <div style={{ width: '70%' }}></div>
                            </div>
                            <p>70% Completed</p>
                            <Link to="/student/my-courses">
                                <button>Continue Learning</button>
                            </Link>
                        </div>

                        <div className="course-card">
                            <div className="course-image">🐍</div>
                            <h3>Python Programming</h3>
                            <p>Learn Python from basics</p>
                            <div className="progress-bar">
                                <div style={{ width: '45%' }}></div>
                            </div>
                            <p>45% Completed</p>
                            <Link to="/student/my-courses">
                                <button>Continue Learning</button>
                            </Link>
                        </div>

                        <div className="course-card">
                            <div className="course-image">🗄️</div>
                            <h3>Database Management</h3>
                            <p>Learn SQL and databases</p>
                            <div className="progress-bar">
                                <div style={{ width: '30%' }}></div>
                            </div>
                            <p>30% Completed</p>
                            <Link to="/student/my-courses">
                                <button>Continue Learning</button>
                            </Link>
                        </div>

                    </div>
                </section>

                <footer className="backend-status">
                    Backend Status: {apiMessage}
                </footer>

            </main>
        </div>
    );
}

export default StudentDashboard;