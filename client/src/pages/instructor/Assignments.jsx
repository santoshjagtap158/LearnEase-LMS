import React, { useState } from 'react';
import './Assignments.css';

function Assignments() {

    const [assignments, setAssignments] = useState([
        {
            id: 1,
            title: 'HTML Portfolio Website',
            course: 'Web Development',
            dueDate: '2026-12-05',
            status: 'Active'
        },
        {
            id: 2,
            title: 'Python Basic Programs',
            course: 'Python Programming',
            dueDate: '2026-12-10',
            status: 'Active'
        },
        {
            id: 3,
            title: 'Database Design',
            course: 'Database Management',
            dueDate: '2026-12-15',
            status: 'Active'
        }
    ]);

    const [form, setForm] = useState({
        title: '',
        course: '',
        description: '',
        dueDate: ''
    });

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const newAssignment = {
            id: Date.now(),
            title: form.title,
            course: form.course,
            dueDate: form.dueDate,
            status: 'Active'
        };

        setAssignments([...assignments, newAssignment]);

        setForm({
            title: '',
            course: '',
            description: '',
            dueDate: ''
        });

        alert('Assignment created successfully! (Demo)');
    };

    const handleDelete = (id) => {
        if (window.confirm('Delete this assignment?')) {
            setAssignments(
                assignments.filter(item => item.id !== id)
            );
        }
    };

    return (
        <div className="assignments-page">

            <div className="assignments-header">
                <h1>Assignments</h1>
                <p>Create and manage assignments for your students.</p>
            </div>

            <div className="assignment-form-card">
                <h2>➕ Create New Assignment</h2>
                <p>Add assignment details and set a submission deadline.</p>

                <form onSubmit={handleSubmit}>

                    <div className="assignment-form-grid">

                        <div className="assignment-field">
                            <label>Assignment Title</label>
                            <input
                                type="text"
                                name="title"
                                placeholder="Enter assignment title"
                                value={form.title}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className="assignment-field">
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

                        <div className="assignment-field">
                            <label>Due Date</label>
                            <input
                                type="date"
                                name="dueDate"
                                value={form.dueDate}
                                onChange={handleChange}
                                required
                            />
                        </div>

                    </div>

                    <div className="assignment-field">
                        <label>Assignment Description</label>
                        <textarea
                            name="description"
                            placeholder="Write assignment instructions..."
                            value={form.description}
                            onChange={handleChange}
                            rows="4"
                            required
                        />
                    </div>

                    <button type="submit" className="create-assignment-btn">
                        + Create Assignment
                    </button>

                </form>
            </div>

            <div className="assignment-list-card">

                <div className="assignment-list-heading">
                    <div>
                        <h2>All Assignments</h2>
                        <p>View and manage your created assignments.</p>
                    </div>

                    <span>{assignments.length} Assignments</span>
                </div>

                <div className="assignment-table-wrapper">
                    <table className="assignment-table">

                        <thead>
                            <tr>
                                <th>Assignment</th>
                                <th>Course</th>
                                <th>Due Date</th>
                                <th>Status</th>
                                <th>Action</th>
                            </tr>
                        </thead>

                        <tbody>
                            {assignments.map((item) => (
                                <tr key={item.id}>
                                    <td>{item.title}</td>
                                    <td>{item.course}</td>
                                    <td>{item.dueDate}</td>
                                    <td>
                                        <span className="assignment-status">
                                            {item.status}
                                        </span>
                                    </td>
                                    <td>
                                        <button
                                            className="assignment-delete-btn"
                                            onClick={() => handleDelete(item.id)}
                                        >
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>

                    </table>

                    {assignments.length === 0 && (
                        <p className="no-assignments">
                            No assignments created yet.
                        </p>
                    )}

                </div>
            </div>

        </div>
    );
}

export default Assignments;