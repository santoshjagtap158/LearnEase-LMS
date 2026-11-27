import React from 'react';
import './InstructorDashboard.css';

function InstructorDashboard() {

    const stats = [
        { icon: '📚', title: 'Total Courses', value: '08', color: 'purple' },
        { icon: '👨‍🎓', title: 'Total Students', value: '120', color: 'blue' },
        { icon: '📝', title: 'Assignments', value: '15', color: 'orange' },
        { icon: '📊', title: 'Active Quizzes', value: '06', color: 'green' }
    ];

    const courses = [
        {
            title: 'Web Development',
            category: 'Development',
            students: 45,
            lessons: 18,
            progress: 85,
            icon: '💻'
        },
        {
            title: 'Python Programming',
            category: 'Programming',
            students: 38,
            lessons: 15,
            progress: 65,
            icon: '🐍'
        },
        {
            title: 'Database Management',
            category: 'Database',
            students: 37,
            lessons: 12,
            progress: 75,
            icon: '🗄️'
        }
    ];

    return (
        <div className="instructor-dashboard">

            {/* Sidebar */}
            <aside className="instructor-sidebar">

                <div className="instructor-logo">
                    <span>LE</span>
                    LearnEase
                </div>

                <p className="sidebar-heading">MAIN MENU</p>

                <nav>
                    <a className="active">🏠 Dashboard</a>
                    <a>📚 My Courses</a>
                    <a>➕ Create Course</a>
                    <a>📖 Lessons & Materials</a>
                    <a>📝 Assignments</a>
                    <a>📊 Quizzes</a>
                    <a>👨‍🎓 Enrolled Students</a>
                </nav>

                <div className="sidebar-bottom">
                    <a>⚙️ Settings</a>
                    <a>🚪 Logout</a>
                </div>

            </aside>

            {/* Main Content */}
            <main className="instructor-main">

                {/* Header */}
                <header className="instructor-header">

                    <div>
                        <h1>Dashboard Overview</h1>
                        <p>Welcome back! Here's what's happening with your courses.</p>
                    </div>

                    <div className="instructor-profile">
                        <div className="profile-avatar">I</div>
                        <div>
                            <h4>Instructor</h4>
                            <p>Teacher Account</p>
                        </div>
                    </div>

                </header>

                {/* Welcome Banner */}
                <section className="instructor-banner">
                    <div>
                        <h2>Welcome to LearnEase! 👋</h2>
                        <p>Manage your courses and inspire students to learn.</p>
                    </div>
                    <span>🎓</span>
                </section>

                {/* Statistics */}
                <section className="instructor-stats">

                    {stats.map((item, index) => (
                        <div className="instructor-card" key={index}>

                            <div className={`stat-icon ${item.color}`}>
                                {item.icon}
                            </div>

                            <div>
                                <p>{item.title}</p>
                                <h2>{item.value}</h2>
                            </div>

                        </div>
                    ))}

                </section>

                {/* Courses */}
                <section className="instructor-content">

                    <div className="section-heading">
                        <div>
                            <h2>My Courses</h2>
                            <p>Manage and monitor your courses.</p>
                        </div>

                        <button className="create-course-btn">
                            + Create Course
                        </button>
                    </div>

                    <div className="course-grid">

                        {courses.map((course, index) => (
                            <div className="course-card" key={index}>

                                <div className="course-icon">
                                    {course.icon}
                                </div>

                                <span className="course-category">
                                    {course.category}
                                </span>

                                <h3>{course.title}</h3>

                                <div className="course-info">
                                    <span>👨‍🎓 {course.students} Students</span>
                                    <span>📖 {course.lessons} Lessons</span>
                                </div>

                                <div className="progress-info">
                                    <span>Course Progress</span>
                                    <strong>{course.progress}%</strong>
                                </div>

                                <div className="progress-bar">
                                    <div
                                        style={{ width: `${course.progress}%` }}
                                    ></div>
                                </div>

                                <button className="manage-course-btn">
                                    Manage Course →
                                </button>

                            </div>
                        ))}

                    </div>

                </section>

            </main>

        </div>
    );
}

export default InstructorDashboard;