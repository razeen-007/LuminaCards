import React from 'react';
import CreditCardItem from './CreditCardItem';
import { RotateCcw, Award } from 'lucide-react';
import { useStore } from '../store/useStore';

const CardRecommendations: React.FC = () => {
  const cards = useStore(state => state.recommendations);
  const resetApp = useStore(state => state.resetApp);
  const userData = useStore(state => state.userData);
  const userName = userData?.name || '';

  return (
    <div className="animate-fade-in" style={{ padding: '2rem', maxWidth: '1400px', margin: '0 auto', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
        <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.75rem', fontWeight: 800, letterSpacing: '-0.03em' }}>
          <Award size={32} style={{ color: 'var(--primary-color)' }} />
          Here's what we found for you{userName ? `, ${userName}` : ''}
        </h2>
        <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem' }}>Found {cards.length} matching cards.</p>
      </div>

      {cards.length > 0 ? (
        <div style={{ 
          width: '100%', 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', 
          gap: '2rem',
          padding: '0 1rem',
          marginBottom: '3rem'
        }}>
          {cards.map(card => (
            <div key={card.id} style={{ width: '100%', height: '100%' }}>
              <CreditCardItem card={card} />
            </div>
          ))}
        </div>
      ) : (
        <div style={{ textAlign: 'center', padding: '4rem', background: 'var(--card-bg)', borderRadius: '1rem', border: '1px solid var(--card-border)', marginBottom: '3rem', width: '100%', maxWidth: '600px' }}>
          <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>No Perfect Matches Found</h3>
          <p style={{ color: 'var(--text-muted)' }}>Try adjusting your preferences or income criteria to see more options.</p>
        </div>
      )}

      <div style={{ textAlign: 'center', marginTop: '2rem' }}>
        <button onClick={resetApp} className="btn btn-outline">
          <RotateCcw size={18} /> Start Over
        </button>
      </div>
    </div>
  );
};

export default CardRecommendations;
