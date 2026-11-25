import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [apiMessage, setApiMessage] = useState('Connecting...')

  useEffect(() => {
    fetch('http://localhost:5000/api/health')
      .then((response) => response.json())
      .then((data) => setApiMessage(data.message))
      .catch(() => setApiMessage('Backend connection failed'))
  }, [])

  return (
    <div className="dashboard">

      {/* Sidebar */}
      <aside className="sidebar">
        <h2 className="logo">LearnEase</h2>

        <p className="menu-title">MENU</p>

        <nav>
          <a className="active" href="#">Dashboard</a>
          <a href="#">Browse Courses</a>
          <a href="#">My Courses</a>
          <a href="#">Assignments</a>
          <a href="#">Quizzes</a>
          <a href="#">My Progress</a>
          <a href="#">Profile</a>
        </nav>

        <div className="sidebar-bottom">
          <a href="#">Logout</a>
        </div>
      </aside>

      {/* Main Content */}
      <main className="main-content">

        {/* Navbar */}
        <header className="navbar">
          <h3>Student Dashboard</h3>
          <div className="profile">
            <span>Student</span>
            <div className="avatar">S</div>
          </div>
        </header>

        {/* Welcome Section */}
        <section className="welcome">
          <h1>Welcome Back, Student! 👋</h1>
          <p>Continue your learning journey with LearnEase.</p>
        </section>

        {/* Statistics Cards */}
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

        {/* Courses */}
        <section className="courses-section">
          <div className="section-heading">
            <h2>My Courses</h2>
            <a href="#">View All</a>
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
              <button>Continue Learning</button>
            </div>

            <div className="course-card">
              <div className="course-image">🐍</div>
              <h3>Python Programming</h3>
              <p>Learn Python from basics</p>
              <div className="progress-bar">
                <div style={{ width: '45%' }}></div>
              </div>
              <p>45% Completed</p>
              <button>Continue Learning</button>
            </div>

            <div className="course-card">
              <div className="course-image">🗄️</div>
              <h3>Database Management</h3>
              <p>Learn SQL and databases</p>
              <div className="progress-bar">
                <div style={{ width: '30%' }}></div>
              </div>
              <p>30% Completed</p>
              <button>Continue Learning</button>
            </div>

          </div>
        </section>

        {/* Backend Status */}
        <footer className="backend-status">
          Backend Status: {apiMessage}
        </footer>

      </main>
    </div>
  )
}

export default App