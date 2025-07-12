import React, { useState } from 'react';

const Dashboard = () => {
  const [sections, setSections] = useState([
    'Hero Section',
    'About Us',
    'Features',
    'Testimonials',
    'Contact'
  ]);

  const addSection = () => {
    const name = prompt('Enter new section name:');
    if (name) setSections([...sections, name]);
  };

  return (
    <div style={{ padding: '60px 30px', maxWidth: '800px', margin: '0 auto' }}>
      <h2 style={{ fontSize: '2rem', marginBottom: '20px' }}>📋 User Dashboard</h2>
      <ul style={{ lineHeight: '2' }}>
        {sections.map((section, index) => (
          <li key={index} style={{ fontSize: '1.1rem' }}>✅ {section}</li>
        ))}
      </ul>
      <button
        onClick={addSection}
        style={{
          marginTop: '30px',
          padding: '10px 20px',
          backgroundColor: '#28a745',
          color: '#fff',
          border: 'none',
          borderRadius: '8px',
          cursor: 'pointer'
        }}>
        ➕ Add Section
      </button>
    </div>
  );
};

export default Dashboard;