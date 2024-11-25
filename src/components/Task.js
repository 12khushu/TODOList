import React from 'react';

function Task({ task, markTaskAsDone, deleteTask }) {
  return (
    <li className="task">
      <span>{task.description}</span>
      <div>
        {markTaskAsDone && (
          <button
            className="done-button"
            onClick={() => markTaskAsDone(task.id)}
          >
            Done
          </button>
        )}
        {deleteTask && (
          <button
            className="delete-button"
            onClick={() => deleteTask(task.id)}
          >
            Delete
          </button>
        )}
      </div>
    </li>
  );
}

export default Task;
