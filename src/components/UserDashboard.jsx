import React, { useState, useEffect } from 'react';

function UserDashboard() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(data => { setUsers(data); setLoading(false); });
  }, []);

  const filteredUsers = users.filter(u => u.name.toLowerCase().includes(searchQuery.toLowerCase()));

  return (
    <div style={{ background: '#1a1a1e', padding: '20px', borderRadius: '12px', border: '1px solid #3f3f46' }}>
      <h3 style={{ color: '#10b981' }}>Tasks 2 & 3: Searchable User Directory</h3>
      <input type="text" placeholder="🔍 Search users by name..." value={searchQuery} onChange={e => setSearchQuery(e.target.value)} style={{ width: '100%', padding: '10px', marginBottom: '15px', background: '#242427', color: 'white', border: '1px solid #646cff', borderRadius: '6px' }} />
      {loading ? <p>⏳ Loading records...</p> : (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '10px' }}>
          {filteredUsers.map(u => (
            <div key={u.id} style={{ background: '#242427', padding: '10px', borderRadius: '6px', border: '1px solid #27272a' }}>
              <h4>{u.name}</h4>
              <p style={{ fontSize: '0.85rem', color: '#a1a1aa' }}>📧 {u.email}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default UserDashboard;