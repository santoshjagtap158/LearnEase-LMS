import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../../App.css';
import './Quizzes.css';

function Quizzes() {

    const quizzes = [
        {
            id: 1,
            title: 'HTML Basics Quiz',
            course: 'Web Development',
            duration: '15 Minutes',
            questions: [
                {
                    question: 'What does HTML stand for?',
                    options: [
                        'Hyper Text Markup Language',
                        'High Text Machine Language',
                        'Hyper Transfer Markup Language',
                        'Home Tool Markup Language'
                    ],
                    answer: 0
                },
                {
                    question: 'Which tag is used for the largest heading?',
                    options: ['<h6>', '<head>', '<h1>', '<p>'],
                    answer: 2
                }
            ]
        },
        {
            id: 2,
            title: 'Python Basics Quiz',
            course: 'Python Programming',
            duration: '20 Minutes',
            questions: [
                {
                    question: 'Which keyword is used to define a function?',
                    options: ['function', 'def', 'fun', 'define'],
                    answer: 1
                },
                {
                    question: 'Which symbol is used for comments in Python?',
                    options: ['//', '/*', '#', '<!--'],
                    answer: 2
                }
            ]
        },
        {
            id: 3,
            title: 'SQL Fundamentals Quiz',
            course: 'Database Management',
            duration: '15 Minutes',
            questions: [
                {
                    question: 'Which command is used to retrieve data?',
                    options: ['INSERT', 'UPDATE', 'SELECT', 'DELETE'],
                    answer: 2
                },
                {
                    question: 'Which SQL clause is used to filter records?',
                    options: ['ORDER BY', 'WHERE', 'GROUP BY', 'JOIN'],
                    answer: 1
                }
            ]
        }
    ];

    const [activeQuiz, setActiveQuiz] = useState(null);
    const [answers, setAnswers] = useState({});
    const [result, setResult] = useState(null);

    const startQuiz = (quiz) => {
        setActiveQuiz(quiz);
        setAnswers({});
        setResult(null);
    };

    const submitQuiz = () => {
        let score = 0;

        activeQuiz.questions.forEach((question, index) => {
            if (answers[index] === question.answer) {
                score++;
            }
        });

        setResult(score);
    };

    return (
        <div className="dashboard">

            <aside className="sidebar">
                <h2 className="logo">LearnEase</h2>
                <p className="menu-title">MENU</p>

                <nav>
                    <Link to="/student">Dashboard</Link>
                    <Link to="/student/browse-courses">Browse Courses</Link>
                    <Link to="/student/my-courses">My Courses</Link>
                    <Link to="/student/assignments">Assignments</Link>
                    <Link className="active" to="/student/quizzes">Quizzes</Link>
                    <a href="#">My Progress</a>
                    <a href="#">Profile</a>
                </nav>

                <div className="sidebar-bottom">
                    <Link to="/">Logout</Link>
                </div>
            </aside>

            <main className="main-content">

                <header className="navbar">
                    <h3>My Quizzes</h3>

                    <div className="profile">
                        <span>Student</span>
                        <div className="avatar">S</div>
                    </div>
                </header>

                <section className="quiz-welcome">
                    <h1>Test Your Knowledge 📝</h1>
                    <p>Attempt quizzes and check your learning progress.</p>
                </section>

                {!activeQuiz ? (

                    <section className="quiz-list-section">

                        <h2>Available Quizzes</h2>

                        <div className="quiz-grid">

                            {quizzes.map((quiz) => (

                                <div className="student-quiz-card" key={quiz.id}>

                                    <div className="student-quiz-icon">🧠</div>

                                    <h3>{quiz.title}</h3>

                                    <p>{quiz.course}</p>

                                    <div className="student-quiz-details">
                                        <span>❓ {quiz.questions.length} Questions</span>
                                        <span>⏱️ {quiz.duration}</span>
                                    </div>

                                    <button
                                        className="start-quiz-btn"
                                        onClick={() => startQuiz(quiz)}
                                    >
                                        Start Quiz
                                    </button>

                                </div>

                            ))}

                        </div>

                    </section>

                ) : (

                    <section className="quiz-attempt-section">

                        <div className="quiz-attempt-heading">
                            <h2>{activeQuiz.title}</h2>
                            <button onClick={() => setActiveQuiz(null)}>
                                Back to Quizzes
                            </button>
                        </div>

                        {activeQuiz.questions.map((question, index) => (

                            <div className="quiz-question-card" key={index}>

                                <h3>
                                    {index + 1}. {question.question}
                                </h3>

                                {question.options.map((option, optionIndex) => (

                                    <label className="quiz-option" key={optionIndex}>

                                        <input
                                            type="radio"
                                            name={`question-${index}`}
                                            checked={answers[index] === optionIndex}
                                            disabled={result !== null}
                                            onChange={() => setAnswers({
                                                ...answers,
                                                [index]: optionIndex
                                            })}
                                        />

                                        {option}

                                    </label>

                                ))}

                            </div>

                        ))}

                        {result === null ? (

                            <button
                                className="submit-quiz-btn"
                                disabled={Object.keys(answers).length !== activeQuiz.questions.length}
                                onClick={submitQuiz}
                            >
                                Submit Quiz
                            </button>

                        ) : (

                            <div className="quiz-result">
                                <h2>Quiz Completed! 🎉</h2>
                                <p>
                                    Your Score: {result} / {activeQuiz.questions.length}
                                </p>
                                <button onClick={() => setActiveQuiz(null)}>
                                    Back to Quizzes
                                </button>
                            </div>

                        )}

                    </section>

                )}

            </main>
        </div>
    );
}

export default Quizzes;