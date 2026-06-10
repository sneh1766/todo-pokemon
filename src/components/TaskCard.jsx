import React, { useState } from 'react';

function TaskCard({ task, toggleComplete, deleteTask, editTask }) {
  // Bonus Task State: Tracks if this specific card is currently being edited
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(task.text);

  const handleSave = () => {
    if (editText.trim() === '') return;
    editTask(task.id, editText);
    setIsEditing(false); // Exit editing mode
  };

  return (
    <div style={{
      border: '1px solid #3f3f46',
      borderRadius: '8px',
      padding: '12px 15px',
      margin: '10px 0',
      background: '#1a1a1e',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      // Task 5 Requirement: Custom styling flag indicating complete/incomplete states
      borderLeft: task.completed ? '5px solid #10b981' : '5px solid #646cff',
      opacity: task.completed ? 0.7 : 1
    }}>
      
      {isEditing ? (
        <div style={{ display: 'flex', gap: '10px', flexGrow: 1 }}>
          <input 
            type="text" 
            value={editText} 
            onChange={(e) => setEditText(e.target.value)}
            style={{ padding: '6px', borderRadius: '4px', border: '1px solid #3f3f46', background: '#27272a', color: '#fff', flexGrow: 1 }}
          />
          <button onClick={handleSave} style={{ background: '#10b981', color: 'white', border: 'none', padding: '5px 10px', borderRadius: '4px', cursor: 'pointer' }}>Save</button>
        </div>
      ) : (
        <span 
          onClick={() => toggleComplete(task.id)}
          style={{ 
            cursor: 'pointer', 
            // Task 5 Requirement: Display completed tasks with a line-through strikeout
            textDecoration: task.completed ? 'line-through' : 'none',
            color: task.completed ? '#a1a1aa' : '#fff',
            flexGrow: 1
          }}
        >
          {task.text}
        </span>
      )}

      {/* Action Buttons */}
      <div style={{ display: 'flex', gap: '10px', marginLeft: '10px' }}>
        {!isEditing && (
          <button 
            onClick={() => setIsEditing(true)} 
            style={{ background: 'none', border: 'none', cursor: 'pointer', fontSize: '1.1rem' }}
          >
            ✏️
          </button>
        )}
        <button 
          onClick={() => deleteTask(task.id)} 
          style={{ background: 'none', border: 'none', cursor: 'pointer', fontSize: '1.1rem' }}
        >
          ❌
        </button>
      </div>
    </div>
  );
}

export default TaskCard;