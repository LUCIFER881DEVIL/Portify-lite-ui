import React from 'react';

const features = [
  {
    title: '⚙️ Drag & Drop Builder',
    description: 'Design easily using our intuitive builder.',
  },
  {
    title: '📈 SEO Optimization',
    description: 'Rank higher on search engines instantly.',
  },
  {
    title: '🎨 Pre-made Templates',
    description: 'Pick from 100+ elegant designs.',
  },
  {
    title: '📱 Mobile Ready',
    description: 'Look great on every screen size.',
  },
  {
    title: '🌐 Custom Domains',
    description: 'Use your own brand domain easily.',
  },
  {
    title: '📝 Easy Content Editing',
    description: 'Edit pages on the go, anytime.',
  },
];

const FeaturesSection = () => {
  return (
    <section style={{ padding: '80px 20px', backgroundColor: '#fff' }}>
      <h2 style={{ textAlign: 'center', fontSize: '2.5rem', marginBottom: '40px' }}>
        ✨ Key Features
      </h2>
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
        gap: '30px',
        maxWidth: '1100px',
        margin: '0 auto'
      }}>
        {features.map((feature, index) => (
          <div key={index} style={{
            border: '1px solid #ddd',
            borderRadius: '12px',
            padding: '24px',
            backgroundColor: '#fefefe',
            boxShadow: '0 2px 10px rgba(0,0,0,0.05)',
            textAlign: 'center'
          }}>
            <h3 style={{ fontSize: '1.3rem', color: '#007bff' }}>{feature.title}</h3>
            <p style={{ fontSize: '1rem', color: '#555' }}>{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturesSection;
