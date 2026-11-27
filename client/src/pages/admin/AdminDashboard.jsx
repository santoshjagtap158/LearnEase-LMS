import React from 'react';
import './AdminDashboard.css';
import { Link } from 'react-router-dom';
function AdminDashboard() {

    const stats = [
        { icon: '👨‍🎓', title: 'Total Students', value: '250', color: 'purple' },
        { icon: '👨‍🏫', title: 'Total Instructors', value: '12', color: 'blue' },
        { icon: '📚', title: 'Total Courses', value: '35', color: 'orange' },
        { icon: '📝', title: 'Total Enrollments', value: '180', color: 'green' }
    ];

    return (
        <div className="admin-dashboard">

            <aside className="admin-sidebar">
                <div className="admin-logo">
                    <span>LE</span>
                    LearnEase
                </div>

                <p className="admin-sidebar-heading">MAIN MENU</p>

              <nav>
    <Link to="/admin">
        🏠 Dashboard
    </Link>

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
                    <a>⚙️ Settings</a>
                    <a>🚪 Logout</a>
                </div>
            </aside>

            <main className="admin-main">

                <header className="admin-header">
                    <div>
                        <h1>Admin Dashboard</h1>
                        <p>Manage your LearnEase platform from one place.</p>
                    </div>

                    <div className="admin-profile">
                        <div className="admin-avatar">A</div>
                        <div>
                            <h4>Administrator</h4>
                            <p>Admin Account</p>
                        </div>
                    </div>
                </header>

                <section className="admin-banner">
                    <div>
                        <h2>Welcome to LearnEase! 👋</h2>
                        <p>Here's an overview of your learning platform.</p>
                    </div>
                    <span>🎓</span>
                </section>

                <section className="admin-stats">
                    {stats.map((item, index) => (
                        <div className="admin-stat-card" key={index}>
                            <div className={`admin-stat-icon ${item.color}`}>
                                {item.icon}
                            </div>

                            <div>
                                <p>{item.title}</p>
                                <h2>{item.value}</h2>
                            </div>
                        </div>
                    ))}
                </section>

                <section className="admin-overview">
                    <h2>Platform Overview</h2>
                    <p>
                        Monitor students, instructors and courses from your
                        administration dashboard.
                    </p>
                </section>

            </main>
        </div>
    );
}

export default AdminDashboard;