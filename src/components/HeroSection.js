import React from 'react';

const HeroSection = () => {
  return (
    <section style={{
      padding: '100px 20px',
      background: 'linear-gradient(to right, #007bff, #0056b3)',
      color: 'white',
      textAlign: 'center'
    }}>
      <h1 style={{ fontSize: '3rem', marginBottom: '20px' }}>Launch Your Website with Portify</h1>
      <p style={{ fontSize: '1.2rem', maxWidth: '700px', margin: '0 auto' }}>
        No coding. No hassle. Just powerful tools to build your dream website in minutes.
      </p>
      <button style={{
        marginTop: '30px',
        padding: '12px 28px',
        fontSize: '1rem',
        backgroundColor: '#fff',
        color: '#007bff',
        border: 'none',
        borderRadius: '8px',
        cursor: 'pointer',
        fontWeight: 'bold',
        boxShadow: '0 2px 6px rgba(0,0,0,0.2)'
      }}>
        🚀 Get Started Free
      </button>
    </section>
  );
};

export default HeroSection;
