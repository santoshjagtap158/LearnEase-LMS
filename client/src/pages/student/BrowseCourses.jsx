import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../../App.css';
import './BrowseCourses.css';

function BrowseCourses() {
    const [search, setSearch] = useState('');
    const [category, setCategory] = useState('All');

    const courses = [
        {
            id: 1,
            title: 'Web Development',
            category: 'Development',
            instructor: 'Amit Sharma',
            duration: '8 Weeks',
            lessons: 24,
            icon: '💻',
            description: 'Learn HTML, CSS, JavaScript and build websites.'
        },
        {
            id: 2,
            title: 'Python Programming',
            category: 'Programming',
            instructor: 'Neha Verma',
            duration: '6 Weeks',
            lessons: 20,
            icon: '🐍',
            description: 'Learn Python programming from basic to advanced.'
        },
        {
            id: 3,
            title: 'Database Management',
            category: 'Database',
            instructor: 'Rahul Patel',
            duration: '5 Weeks',
            lessons: 18,
            icon: '🗄️',
            description: 'Understand SQL, database concepts and queries.'
        },
        {
            id: 4,
            title: 'React JS',
            category: 'Development',
            instructor: 'Priya Singh',
            duration: '7 Weeks',
            lessons: 22,
            icon: '⚛️',
            description: 'Build interactive user interfaces using React.'
        },
        {
            id: 5,
            title: 'Java Programming',
            category: 'Programming',
            instructor: 'Ankit Jain',
            duration: '6 Weeks',
            lessons: 20,
            icon: '☕',
            description: 'Understand Java concepts and object-oriented programming.'
        },
        {
            id: 6,
            title: 'Data Science',
            category: 'Data Science',
            instructor: 'Riya Gupta',
            duration: '8 Weeks',
            lessons: 25,
            icon: '📊',
            description: 'Explore data analysis and basic data science concepts.'
        }
    ];

    const filteredCourses = courses.filter((course) => {
        const matchesSearch = course.title.toLowerCase().includes(search.toLowerCase());
        const matchesCategory = category === 'All' || course.category === category;

        return matchesSearch && matchesCategory;
    });

    return (
        <div className="dashboard">

            <aside className="sidebar">
                <h2 className="logo">LearnEase</h2>
                <p className="menu-title">MENU</p>

                <nav>
                    <Link to="/student">Dashboard</Link>
                    <Link className="active" to="/student/browse-courses">Browse Courses</Link>
                    <a href="#">My Courses</a>
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
                    <h3>Browse Courses</h3>
                    <div className="profile">
                        <span>Student</span>
                        <div className="avatar">S</div>
                    </div>
                </header>

                <section className="browse-welcome">
                    <h1>Explore Courses 📚</h1>
                    <p>Discover new skills and continue your learning journey.</p>
                </section>

                <section className="browse-controls">

                    <input
                        type="text"
                        placeholder="Search courses..."
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                    />

                    <select
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                    >
                        <option value="All">All Categories</option>
                        <option value="Development">Development</option>
                        <option value="Programming">Programming</option>
                        <option value="Database">Database</option>
                        <option value="Data Science">Data Science</option>
                    </select>

                </section>

                <section className="browse-courses-section">

                    <div className="browse-section-heading">
                        <h2>Available Courses</h2>
                        <span>{filteredCourses.length} Courses Found</span>
                    </div>

                    <div className="browse-course-grid">

                        {filteredCourses.length > 0 ? (
                            filteredCourses.map((course) => (
                                <div className="browse-course-card" key={course.id}>

                                    <div className="browse-course-icon">
                                        {course.icon}
                                    </div>

                                    <span className="course-category">
                                        {course.category}
                                    </span>

                                    <h3>{course.title}</h3>

                                    <p>{course.description}</p>

                                    <div className="course-details">
                                        <span>👨‍🏫 {course.instructor}</span>
                                        <span>📖 {course.lessons} Lessons</span>
                                        <span>⏱️ {course.duration}</span>
                                    </div>

                                    <button
                                        className="enroll-button"
                                        onClick={() => alert('Enrollment feature will be connected with backend later.')}
                                    >
                                        Enroll Now
                                    </button>

                                </div>
                            ))
                        ) : (
                            <div className="no-courses">
                                <h3>No courses found</h3>
                                <p>Try searching with another course name or category.</p>
                            </div>
                        )}

                    </div>

                </section>

            </main>
        </div>
    );
}

export default BrowseCourses;