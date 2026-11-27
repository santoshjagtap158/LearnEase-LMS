import React, { useState } from 'react';
import './LessonsMaterials.css';

function LessonsMaterials() {

    const [lessons, setLessons] = useState([
        {
            id: 1,
            title: 'Introduction to Web Development',
            course: 'Web Development',
            type: 'Video',
            duration: '15 min'
        },
        {
            id: 2,
            title: 'HTML Basics',
            course: 'Web Development',
            type: 'PDF',
            duration: '10 pages'
        },
        {
            id: 3,
            title: 'Python Introduction',
            course: 'Python Programming',
            type: 'Video',
            duration: '20 min'
        }
    ]);

    const [form, setForm] = useState({
        title: '',
        course: '',
        description: '',
        videoUrl: '',
        material: ''
    });

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const newLesson = {
            id: Date.now(),
            title: form.title,
            course: form.course,
            type: form.videoUrl ? 'Video' : 'PDF',
            duration: 'New Lesson'
        };

        setLessons([...lessons, newLesson]);

        setForm({
            title: '',
            course: '',
            description: '',
            videoUrl: '',
            material: ''
        });

        alert('Lesson added successfully! (Demo)');
    };

    const handleDelete = (id) => {
        if (window.confirm('Delete this lesson?')) {
            setLessons(lessons.filter(lesson => lesson.id !== id));
        }
    };

    return (
        <div className="lessons-page">

            <div className="lessons-header">
                <div>
                    <h1>Lessons & Materials</h1>
                    <p>Create lessons and share learning materials with students.</p>
                </div>
            </div>

            {/* Add Lesson Form */}

            <div className="lesson-form-card">

                <h2>➕ Add New Lesson</h2>
                <p className="lesson-form-subtitle">
                    Add video lectures, PDFs and course content.
                </p>

                <form onSubmit={handleSubmit}>

                    <div className="lesson-form-grid">

                        <div className="lesson-field">
                            <label>Lesson Title</label>
                            <input
                                type="text"
                                name="title"
                                placeholder="Enter lesson title"
                                value={form.title}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className="lesson-field">
                            <label>Select Course</label>
                            <select
                                name="course"
                                value={form.course}
                                onChange={handleChange}
                                required
                            >
                                <option value="">Choose Course</option>
                                <option value="Web Development">Web Development</option>
                                <option value="Python Programming">Python Programming</option>
                                <option value="Database Management">Database Management</option>
                            </select>
                        </div>

                    </div>

                    <div className="lesson-field">
                        <label>Lesson Description</label>
                        <textarea
                            name="description"
                            placeholder="Write lesson description..."
                            value={form.description}
                            onChange={handleChange}
                            rows="4"
                            required
                        />
                    </div>

                    <div className="lesson-field">
                        <label>Video Lecture URL</label>
                        <input
                            type="url"
                            name="videoUrl"
                            placeholder="Paste video lecture link"
                            value={form.videoUrl}
                            onChange={handleChange}
                        />
                    </div>

                    <div className="lesson-field">
                        <label>PDF / Document</label>
                        <input
                            type="file"
                            name="material"
                            accept=".pdf,.doc,.docx"
                            onChange={(e) => {
                                setForm({
                                    ...form,
                                    material: e.target.files[0]?.name || ''
                                });
                            }}
                        />
                    </div>

                    <button type="submit" className="add-lesson-btn">
                        + Add Lesson
                    </button>

                </form>

            </div>

            {/* Lessons List */}

            <div className="lessons-list-card">

                <div className="lessons-list-heading">
                    <div>
                        <h2>Course Lessons</h2>
                        <p>Manage your existing lessons and materials.</p>
                    </div>

                    <span>{lessons.length} Lessons</span>
                </div>

                <div className="lessons-list">

                    {lessons.map((lesson) => (

                        <div className="lesson-item" key={lesson.id}>

                            <div className="lesson-item-icon">
                                {lesson.type === 'Video' ? '🎥' : '📄'}
                            </div>

                            <div className="lesson-item-info">
                                <h3>{lesson.title}</h3>
                                <p>{lesson.course}</p>
                            </div>

                            <span className="lesson-type">
                                {lesson.type}
                            </span>

                            <span className="lesson-duration">
                                {lesson.duration}
                            </span>

                            <button
                                className="lesson-delete-btn"
                                onClick={() => handleDelete(lesson.id)}
                            >
                                Delete
                            </button>

                        </div>

                    ))}

                    {lessons.length === 0 && (
                        <p className="no-lessons">
                            No lessons added yet.
                        </p>
                    )}

                </div>

            </div>

        </div>
    );
}

export default LessonsMaterials;