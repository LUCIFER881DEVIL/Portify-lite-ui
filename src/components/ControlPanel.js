import React, { useState } from 'react';

const ControlPanel = () => {
  const [domain, setDomain] = useState('');
  const [team, setTeam] = useState([
    { name: 'Yash Vashishth', role: 'Admin' },
    { name: 'Kritika Chauhan', role: 'Editor' }
  ]);

  return (
    <div style={{ padding: '60px 30px', maxWidth: '800px', margin: '0 auto' }}>
      <h2 style={{ fontSize: '2rem', marginBottom: '30px' }}>⚙️ Control Panel</h2>

      <div style={{ marginBottom: '40px' }}>
        <label style={{ display: 'block', marginBottom: '10px' }}>🌐 Custom Domain</label>
        <input
          type="text"
          value={domain}
          onChange={(e) => setDomain(e.target.value)}
          placeholder="Enter your domain..."
          style={{ padding: '10px', width: '100%', borderRadius: '6px', border: '1px solid #ccc' }}
        />
      </div>

      <div>
        <h4 style={{ marginBottom: '10px' }}>👥 Team Members</h4>
        <ul>
          {team.map((t, i) => (
            <li key={i} style={{ fontSize: '1.1rem' }}>🧑‍💼 {t.name} - {t.role}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ControlPanel;
