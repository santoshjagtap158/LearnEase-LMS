import React, { useState } from 'react';
import './CreateCourse.css';

function CreateCourse() {

    const [course, setCourse] = useState({
        title: '',
        category: '',
        description: '',
        level: '',
        duration: '',
        thumbnail: ''
    });

    const handleChange = (e) => {
        setCourse({
            ...course,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        alert('Course created successfully! (Demo)');

        setCourse({
            title: '',
            category: '',
            description: '',
            level: '',
            duration: '',
            thumbnail: ''
        });
    };

    return (
        <div className="create-course-page">

            <div className="create-course-header">
                <div>
                    <h1>Create New Course</h1>
                    <p>Add course details and share your knowledge with students.</p>
                </div>
            </div>

            <form className="create-course-form" onSubmit={handleSubmit}>

                <div className="form-section">
                    <h2>Basic Information</h2>

                    <label>Course Title</label>
                    <input
                        type="text"
                        name="title"
                        placeholder="Enter course title"
                        value={course.title}
                        onChange={handleChange}
                        required
                    />

                    <label>Course Category</label>
                    <select
                        name="category"
                        value={course.category}
                        onChange={handleChange}
                        required
                    >
                        <option value="">Select Category</option>
                        <option value="Development">Development</option>
                        <option value="Programming">Programming</option>
                        <option value="Database">Database</option>
                        <option value="Design">Design</option>
                        <option value="Business">Business</option>
                    </select>

                    <label>Course Description</label>
                    <textarea
                        name="description"
                        placeholder="Describe what students will learn..."
                        value={course.description}
                        onChange={handleChange}
                        rows="5"
                        required
                    />
                </div>

                <div className="form-section">
                    <h2>Course Details</h2>

                    <label>Course Level</label>
                    <select
                        name="level"
                        value={course.level}
                        onChange={handleChange}
                        required
                    >
                        <option value="">Select Level</option>
                        <option value="Beginner">Beginner</option>
                        <option value="Intermediate">Intermediate</option>
                        <option value="Advanced">Advanced</option>
                    </select>

                    <label>Course Duration</label>
                    <input
                        type="text"
                        name="duration"
                        placeholder="Example: 6 Weeks"
                        value={course.duration}
                        onChange={handleChange}
                        required
                    />

                    <label>Course Thumbnail URL</label>
                    <input
                        type="url"
                        name="thumbnail"
                        placeholder="Paste image URL"
                        value={course.thumbnail}
                        onChange={handleChange}
                    />
                </div>

                <div className="form-actions">
                    <button type="reset" className="cancel-btn"
                        onClick={() => setCourse({
                            title: '',
                            category: '',
                            description: '',
                            level: '',
                            duration: '',
                            thumbnail: ''
                        })}
                    >
                        Clear Form
                    </button>

                    <button type="submit" className="submit-course-btn">
                        Create Course
                    </button>
                </div>

            </form>

        </div>
    );
}

export default CreateCourse;