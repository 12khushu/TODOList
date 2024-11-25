import React from 'react';
import Task from './Task';

function TaskList({ tasks, markTaskAsDone, deleteTask }) {
  return (
    <ul className="task-list">
      {tasks.map((task) => (
        <Task
          key={task.id}
          task={task}
          markTaskAsDone={markTaskAsDone}
          deleteTask={deleteTask}
        />
      ))}
    </ul>
  );
}

export default TaskList;
