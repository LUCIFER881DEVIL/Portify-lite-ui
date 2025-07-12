import React from 'react';

const testimonials = [
  {
    name: 'Amit Sharma',
    feedback: 'Portify made launching my website effortless!'
  },
  {
    name: 'Priya Verma',
    feedback: 'Sleek templates and zero code — love it!'
  },
  {
    name: 'Rajeev Mehta',
    feedback: 'Connected my domain in minutes. Amazing experience.'
  }
];

const Testimonials = () => {
  return (
    <section style={{ padding: '80px 20px', backgroundColor: '#f9f9f9' }}>
      <h2 style={{ textAlign: 'center', fontSize: '2.5rem', marginBottom: '40px' }}>💬 Testimonials</h2>
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        flexWrap: 'wrap',
        gap: '30px',
        maxWidth: '1000px',
        margin: '0 auto'
      }}>
        {testimonials.map((user, i) => (
          <div key={i} style={{
            width: '300px',
            backgroundColor: '#fff',
            borderRadius: '12px',
            padding: '24px',
            boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
            textAlign: 'left'
          }}>
            <p style={{ fontSize: '1rem', color: '#444' }}>
              "{user.feedback}"
            </p>
            <p style={{ fontWeight: 'bold', marginTop: '15px', color: '#007BFF' }}>– {user.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;