import React, { useState } from 'react';

function TaskForm({ addTask }) {
  const [taskDescription, setTaskDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (taskDescription.trim()) {
      addTask(taskDescription.trim());
      setTaskDescription('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="task-form">
      <input
        type="text"
        placeholder="Add a new task..."
        value={taskDescription}
        onChange={(e) => setTaskDescription(e.target.value)}
      />
      <button type="submit">Add Task</button>
    </form>
  );
}

export default TaskForm;
