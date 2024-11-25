import React, { useState } from 'react';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import './styles.css';

function App() {
  const [tasks, setTasks] = useState([]); // Main to-do tasks
  const [doneTasks, setDoneTasks] = useState([]); // Tasks marked as done

  const addTask = (taskDescription) => {
    setTasks([...tasks, { id: Date.now(), description: taskDescription }]);
  };

  const markTaskAsDone = (taskId) => {
    const taskToMove = tasks.find((task) => task.id === taskId);
    if (taskToMove) {
      setTasks(tasks.filter((task) => task.id !== taskId));
      setDoneTasks([...doneTasks, taskToMove]);
    }
  };

  const deleteTask = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  return (
    <div className="app">
      <h1>To-Do List</h1>
      <TaskForm addTask={addTask} />
      
      <h2>Tasks</h2>
      <TaskList
        tasks={tasks}
        markTaskAsDone={markTaskAsDone}
        deleteTask={deleteTask} // Include delete for the main list
      />
      
      <h2>Done List</h2>
      <TaskList
        tasks={doneTasks}
        markTaskAsDone={null} // No "Done" button for completed tasks
        deleteTask={null} // No "Delete" button for the done list
      />
    </div>
  );
}

export default App;
