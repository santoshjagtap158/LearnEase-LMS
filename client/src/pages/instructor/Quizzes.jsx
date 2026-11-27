import React, { useState } from 'react';
import './Quizzes.css';

function Quizzes() {

    const [quizzes, setQuizzes] = useState([
        {
            id: 1,
            title: 'HTML Basics Quiz',
            course: 'Web Development',
            questions: 10,
            duration: 15
        },
        {
            id: 2,
            title: 'Python Fundamentals',
            course: 'Python Programming',
            questions: 15,
            duration: 20
        }
    ]);

    const [form, setForm] = useState({
        title: '',
        course: '',
        duration: ''
    });

    const [questions, setQuestions] = useState([
        {
            question: '',
            options: ['', '', '', ''],
            correctAnswer: ''
        }
    ]);

    const handleFormChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
    };

    const handleQuestionChange = (index, value) => {
        const updated = [...questions];
        updated[index].question = value;
        setQuestions(updated);
    };

    const handleOptionChange = (qIndex, optionIndex, value) => {
        const updated = [...questions];
        updated[qIndex].options[optionIndex] = value;
        setQuestions(updated);
    };

    const handleAnswerChange = (index, value) => {
        const updated = [...questions];
        updated[index].correctAnswer = value;
        setQuestions(updated);
    };

    const addQuestion = () => {
        setQuestions([
            ...questions,
            {
                question: '',
                options: ['', '', '', ''],
                correctAnswer: ''
            }
        ]);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const newQuiz = {
            id: Date.now(),
            title: form.title,
            course: form.course,
            questions: questions.length,
            duration: Number(form.duration)
        };

        setQuizzes([...quizzes, newQuiz]);

        setForm({
            title: '',
            course: '',
            duration: ''
        });

        setQuestions([
            {
                question: '',
                options: ['', '', '', ''],
                correctAnswer: ''
            }
        ]);

        alert('Quiz created successfully! (Demo)');
    };

    const handleDelete = (id) => {
        if (window.confirm('Delete this quiz?')) {
            setQuizzes(quizzes.filter(quiz => quiz.id !== id));
        }
    };

    return (
        <div className="quizzes-page">

            <div className="quizzes-header">
                <h1>Quizzes</h1>
                <p>Create and manage MCQ quizzes for your students.</p>
            </div>

            <div className="quiz-form-card">
                <h2>➕ Create New Quiz</h2>
                <p>Add quiz details and multiple-choice questions.</p>

                <form onSubmit={handleSubmit}>

                    <div className="quiz-form-grid">

                        <div className="quiz-field">
                            <label>Quiz Title</label>
                            <input
                                type="text"
                                name="title"
                                placeholder="Enter quiz title"
                                value={form.title}
                                onChange={handleFormChange}
                                required
                            />
                        </div>

                        <div className="quiz-field">
                            <label>Select Course</label>
                            <select
                                name="course"
                                value={form.course}
                                onChange={handleFormChange}
                                required
                            >
                                <option value="">Choose Course</option>
                                <option value="Web Development">Web Development</option>
                                <option value="Python Programming">Python Programming</option>
                                <option value="Database Management">Database Management</option>
                            </select>
                        </div>

                        <div className="quiz-field">
                            <label>Duration (Minutes)</label>
                            <input
                                type="number"
                                name="duration"
                                min="1"
                                placeholder="Enter duration"
                                value={form.duration}
                                onChange={handleFormChange}
                                required
                            />
                        </div>

                    </div>

                    <div className="quiz-questions-heading">
                        <h3>Quiz Questions</h3>
                        <span>{questions.length} Questions</span>
                    </div>

                    {questions.map((item, qIndex) => (
                        <div className="question-card" key={qIndex}>

                            <h4>Question {qIndex + 1}</h4>

                            <div className="quiz-field">
                                <label>Question</label>
                                <input
                                    type="text"
                                    placeholder="Enter your question"
                                    value={item.question}
                                    onChange={(e) =>
                                        handleQuestionChange(qIndex, e.target.value)
                                    }
                                    required
                                />
                            </div>

                            <div className="quiz-options-grid">
                                {item.options.map((option, optionIndex) => (
                                    <div className="quiz-field" key={optionIndex}>
                                        <label>Option {optionIndex + 1}</label>
                                        <input
                                            type="text"
                                            placeholder={`Enter option ${optionIndex + 1}`}
                                            value={option}
                                            onChange={(e) =>
                                                handleOptionChange(
                                                    qIndex,
                                                    optionIndex,
                                                    e.target.value
                                                )
                                            }
                                            required
                                        />
                                    </div>
                                ))}
                            </div>

                            <div className="quiz-field">
                                <label>Correct Answer</label>
                                <select
                                    value={item.correctAnswer}
                                    onChange={(e) =>
                                        handleAnswerChange(qIndex, e.target.value)
                                    }
                                    required
                                >
                                    <option value="">Select Correct Option</option>
                                    {item.options.map((option, index) => (
                                        <option
                                            value={option}
                                            key={index}
                                            disabled={!option.trim()}
                                        >
                                            Option {index + 1}
                                        </option>
                                    ))}
                                </select>
                            </div>

                        </div>
                    ))}

                    <button
                        type="button"
                        className="add-question-btn"
                        onClick={addQuestion}
                    >
                        + Add Another Question
                    </button>

                    <button type="submit" className="create-quiz-btn">
                        Create Quiz
                    </button>

                </form>
            </div>

            <div className="quiz-list-card">

                <div className="quiz-list-heading">
                    <div>
                        <h2>All Quizzes</h2>
                        <p>Manage your existing quizzes.</p>
                    </div>
                    <span>{quizzes.length} Quizzes</span>
                </div>

                <div className="quiz-list">
                    {quizzes.map((quiz) => (
                        <div className="quiz-item" key={quiz.id}>

                            <div className="quiz-item-icon">📝</div>

                            <div className="quiz-item-info">
                                <h3>{quiz.title}</h3>
                                <p>{quiz.course}</p>
                            </div>

                            <span>{quiz.questions} Questions</span>
                            <span>{quiz.duration} Min</span>

                            <button
                                className="quiz-delete-btn"
                                onClick={() => handleDelete(quiz.id)}
                            >
                                Delete
                            </button>

                        </div>
                    ))}

                    {quizzes.length === 0 && (
                        <p className="no-quizzes">No quizzes created yet.</p>
                    )}
                </div>

            </div>

        </div>
    );
}

export default Quizzes;