import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');
  const [apiUrl, setApiUrl] = useState('http://localhost:5000');

  useEffect(() => {
    // Fetch runtime config
    const loadConfig = async () => {
      try {
        const response = await fetch('/config.json');
        if (response.ok) {
          const config = await response.json();
          setApiUrl(config.apiUrl);
        }
      } catch (error) {
        console.log('Using default API URL');
      }
      fetchTasks();
    };
    loadConfig();
  }, []);

  const fetchTasks = async () => {
    try {
      const response = await axios.get(`${apiUrl}/api/tasks`);
      setTasks(response.data);
    } catch (error) {
      console.error('Error fetching tasks:', error);
    }
  };

  const addTask = async () => {
    if (!newTask.trim()) return;
    try {
      await axios.post(`${apiUrl}/api/tasks`, { title: newTask });
      setNewTask('');
      fetchTasks();
    } catch (error) {
      console.error('Error adding task:', error);
    }
  };

  const deleteTask = async (id) => {
    try {
      await axios.delete(`${apiUrl}/api/tasks/${id}`);
      fetchTasks();
    } catch (error) {
      console.error('Error deleting task:', error);
    }
  };

  return (
    <div style={{ padding: '20px', maxWidth: '600px', margin: '0 auto' }}>
      <h1>Task Manager</h1>
      <p>API: {apiUrl}</p>
      <div style={{ marginBottom: '20px' }}>
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="Enter new task"
          style={{ padding: '10px', marginRight: '10px', width: '300px' }}
        />
        <button onClick={addTask} style={{ padding: '10px 20px' }}>
          Add Task
        </button>
      </div>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {tasks.map((task) => (
          <li key={task.id} style={{ 
            display: 'flex', 
            justifyContent: 'space-between', 
            alignItems: 'center',
            padding: '10px',
            border: '1px solid #ddd',
            marginBottom: '5px'
          }}>
            <span>{task.title}</span>
            <button 
              onClick={() => deleteTask(task.id)}
              style={{ padding: '5px 10px', backgroundColor: '#ff4444', color: 'white', border: 'none' }}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;