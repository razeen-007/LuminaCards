import React from 'react';
import { CreditCard, Sparkles } from 'lucide-react';

const Header = () => {
  return (
    <header style={{ padding: '3rem 1rem 1rem', maxWidth: '800px', margin: '0 auto', width: '100%' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <Sparkles size={24} style={{ color: 'var(--primary-color)' }} />
          <span style={{ fontSize: '1.25rem', fontWeight: 700, letterSpacing: '-0.02em', color: 'var(--text-color)' }}>
            LuminaCards
          </span>
        </div>
      </div>
      
      <h1 style={{ fontSize: '4rem', marginBottom: '1rem', color: 'var(--text-color)', fontWeight: 800, lineHeight: 1.1 }}>
        Find your perfect <br/><span className="gradient-text">card match.</span>
      </h1>
      
      <p style={{ color: 'var(--text-muted)', fontSize: '1.25rem', maxWidth: '600px', lineHeight: 1.6, fontWeight: 500 }}>
        Tell us a bit about yourself, and we'll do the heavy lifting to find the credit cards that actually reward your lifestyle. No jargon, just great recommendations.
      </p>
    </header>
  );
};

export default Header;
