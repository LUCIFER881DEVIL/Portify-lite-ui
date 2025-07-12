import React, { useState } from 'react';
import HeroSection from './components/HeroSection.js';
import FeaturesSection from './components/FeaturesSection.js';
import Testimonials from './components/Testimonials.js';
import Footer from './components/Footer.js';
import Dashboard from './components/Dashboard.js';
import ControlPanel from './components/ControlPanel.js';

function App() {
  const [view, setView] = useState('home');

  return (
    <div>
      <nav style={{
  backgroundColor: '#ffffff',
  boxShadow: '0 2px 10px rgba(0, 0, 0, 0.05)',
  padding: '12px 24px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-start',
  gap: '12px',
  position: 'sticky',
  top: 0,
  zIndex: 100,
}}>
  {['home', 'dashboard', 'admin'].map((item) => (
    <button
      key={item}
      onClick={() => setView(item)}
      style={{
        padding: '10px 16px',
        fontWeight: 500,
        border: 'none',
        borderRadius: '8px',
        cursor: 'pointer',
        backgroundColor: view === item ? '#007bff' : '#f2f2f2',
        color: view === item ? '#ffffff' : '#333',
        transition: 'all 0.2s ease-in-out',
        boxShadow: view === item ? '0 2px 8px rgba(0,123,255,0.3)' : 'none'
      }}
    >
      {{
        home: '🏠 Home',
        dashboard: '📊 User Dashboard',
        admin: '🛠️ Control Panel'
      }[item]}
    </button>
  ))}
</nav>


      {view === 'home' && (
        <>
          <HeroSection />
          <FeaturesSection />
          <Testimonials />
          <Footer />
        </>
      )}
      {view === 'dashboard' && <Dashboard />}
      {view === 'admin' && <ControlPanel />}
    </div>
  );
}

export default App;

