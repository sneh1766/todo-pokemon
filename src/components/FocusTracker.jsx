import React, { useRef, useEffect } from 'react';

function FocusTracker() {
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <div style={{ background: '#1a1a1e', border: '2px solid #10b981', borderRadius: '12px', padding: '20px', margin: '20px 0', textAlign: 'center' }}>
      <h3 style={{ color: '#10b981', margin: '0 0 15px 0' }}>Task 5: useRef Autofocus Engine</h3>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', alignItems: 'center' }}>
        <input 
          ref={inputRef}
          type="text"
          placeholder="Type something here..."
          style={{ padding: '10px 14px', borderRadius: '6px', border: '1px solid #3f3f46', background: '#242427', color: 'white', width: '80%', maxWidth: '300px', fontSize: '1rem' }}
        />
        <button onClick={() => inputRef.current.focus()} style={{ padding: '8px 16px', background: '#27272a', color: '#10b981', border: '1px solid #10b981', borderRadius: '6px', fontWeight: '600', cursor: 'pointer' }}>
          ⚡ Force Focus Manually
        </button>
      </div>
    </div>
  );
}

export default FocusTracker;