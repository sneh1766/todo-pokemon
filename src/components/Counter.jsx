// 1. Notice we added 'useEffect' to our imports at the top
import React, { useState, useEffect } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  // Hook 1: Run once when the component first loads (Mounting)
  // The empty array [] at the end tells React: "Run this once and never again."
  useEffect(() => {
    console.log("🚀 Welcome! The Counter component has loaded successfully.");
  }, []);

  // Hook 2: Run every time the 'count' state changes (Updating)
  // The [count] at the end tells React: "Run this code whenever 'count' updates."
  useEffect(() => {
    console.log(`📊 State changed: The counter value is now ${count}`);
  }, [count]);

  return (
    <div style={{
      background: '#1a1a1e',
      border: '2px dashed #646cff',
      borderRadius: '12px',
      padding: '20px',
      margin: '20px 0',
      textAlign: 'center'
    }}>
      <h3 style={{ color: '#646cff', margin: '0 0 10px 0' }}>Task 4: Hooks Console Tracker</h3>
      
      <div style={{ fontSize: '2.5rem', fontWeight: 'bold', margin: '10px 0' }}>
        {count}
      </div>

      <div style={{ display: 'flex', gap: '10px', justifyContent: 'center' }}>
        <button 
          onClick={() => setCount(count + 1)}
          style={{ padding: '8px 16px', cursor: 'pointer', background: '#10b981', color: 'white', border: 'none', borderRadius: '4px' }}
        >
          Increment
        </button>

        <button 
          onClick={() => setCount(count - 1)}
          style={{ padding: '8px 16px', cursor: 'pointer', background: '#ef4444', color: 'white', border: 'none', borderRadius: '4px' }}
        >
          Decrement
        </button>

        <button 
          onClick={() => setCount(0)}
          style={{ padding: '8px 16px', cursor: 'pointer', background: '#3f3f46', color: 'white', border: 'none', borderRadius: '4px' }}
        >
          Reset
        </button>
      </div>
      <p style={{ fontSize: '0.85rem', color: '#a1a1aa', marginTop: '10px' }}>
        (Open your browser console to see the hooks working!)
      </p>
    </div>
  );
}

export default Counter;