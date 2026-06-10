import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import TaskCard from './components/TaskCard';
import Counter from './components/Counter';

function App() {
  // --- STATE ENGINES ---
  
  // Task 5 & Bonus: Check if tasks exist in localStorage, otherwise use defaults
  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem('todo_app_tasks');
    return savedTasks ? JSON.parse(savedTasks) : [
      { id: 1, text: "Configure router interfaces in Packet Tracer", completed: true },
      { id: 2, text: "Review Java Swing JDBC connections", completed: false },
      { id: 3, text: "Analyze Nmap network scanning flags", completed: false },
      { id: 4, text: "Prepare security audit presentation", completed: false },
      { id: 5, text: "Complete lean bulk gym routine", completed: true }
    ];
  });

  const [input, setInput] = useState('');
  const [filter, setFilter] = useState('All'); // 'All' | 'Pending' | 'Completed'


  // --- LIFE CYCLE SYNCHRONIZATION (useEffect) ---
  
  // Task 5 & Bonus: Keep localStorage synced whenever the 'tasks' state modifies
  useEffect(() => {
    localStorage.setItem('todo_app_tasks', JSON.stringify(tasks));
    console.log("💾 LocalStorage Cache Engine updated successfully.");
  }, [tasks]);


  // --- APP FUNCTION HANDLERS ---
  
  const addTask = (e) => {
    e.preventDefault();
    if (input.trim() === '') return;

    const newTask = {
      id: Date.now(), // Generates an unrepeatable timestamp millisecond ID
      text: input,
      completed: false
    };

    setTasks([...tasks, newTask]);
    setInput(''); // Clear input box
  };

  const toggleComplete = (id) => {
    setTasks(tasks.map(t => t.id === id ? { ...t, completed: !t.completed } : t));
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(t => t.id !== id));
  };

  const editTask = (id, updatedText) => {
    setTasks(tasks.map(t => t.id === id ? { ...t, text: updatedText } : t));
  };


  // --- DATA COMPUTATION MATRIX ---
  
  const totalCount = tasks.length;
  const completedCount = tasks.filter(t => t.completed).length;

  const filteredTasks = tasks.filter(t => {
    if (filter === 'Completed') return t.completed;
    if (filter === 'Pending') return !t.completed;
    return true; // 'All'
  });

  return (
    <div style={{ maxWidth: '600px', margin: '0 auto', padding: '20px', fontFamily: 'system-ui, sans-serif' }}>
      <Header />
      
      {/* Task 5 Metrics Dashboard Panel */}
      <div style={{ 
        display: 'flex', 
        justifyContent: 'space-around', 
        background: '#1a1a1e', 
        padding: '15px', 
        borderRadius: '8px', 
        margin: '20px 0', 
        border: '1px solid #27272a',
        flexWrap: 'wrap',
        gap: '10px'
      }}>
        <p style={{ margin: 0 }}>Total Milestones: <strong style={{ color: '#646cff' }}>{totalCount}</strong></p>
        <p style={{ margin: 0 }}>Completed: <strong style={{ color: '#10b981' }}>{completedCount} / {totalCount}</strong></p>
      </div>

      {/* Task Creation Form */}
      <form onSubmit={addTask} style={{ display: 'flex', gap: '10px', marginBottom: '20px' }}>
        <input 
          type="text" 
          placeholder="Enter a new milestone objective..." 
          value={input} 
          onChange={(e) => setInput(e.target.value)} 
          style={{ flexGrow: 1, padding: '12px', borderRadius: '6px', border: '1px solid #3f3f46', background: '#1a1a1e', color: '#fff' }}
        />
        <button type="submit" style={{ background: '#646cff', color: 'white', border: 'none', padding: '0 20px', borderRadius: '6px', fontWeight: 'bold', cursor: 'pointer' }}>
          Add Task
        </button>
      </form>

      {/* Bonus Task: View Category Toggles */}
      <div style={{ display: 'flex', gap: '10px', justifyContent: 'center', marginBottom: '25px' }}>
        {['All', 'Pending', 'Completed'].map((type) => (
          <button
            key={type}
            onClick={() => setFilter(type)}
            style={{
              padding: '6px 14px',
              borderRadius: '20px',
              border: '1px solid #3f3f46',
              background: filter === type ? '#646cff' : '#1a1a1e',
              color: 'white',
              cursor: 'pointer',
              fontWeight: '500'
            }}
          >
            {type}
          </button>
        ))}
      </div>

      {/* Render Node for Task Dashboard Cards */}
      <div style={{ minHeight: '150px' }}>
        {filteredTasks.length === 0 ? (
          <p style={{ textAlign: 'center', color: '#a1a1aa', marginTop: '20px' }}>No items found in this view category.</p>
        ) : (
          filteredTasks.map(task => (
            <TaskCard 
              key={task.id} 
              task={task} 
              toggleComplete={toggleComplete} 
              deleteTask={deleteTask} 
              editTask={editTask}
            />
          ))
        )}
      </div>

      {/* Task 3 & 4 Counter Component Module */}
      <div style={{ marginTop: '30px' }}>
        <Counter />
      </div>

      <Footer />
    </div>
  );
}

export default App;