import React from 'react';
import { Wifi, Check, Landmark } from 'lucide-react';
import { Card } from '../types';

const getCardGradient = (bank) => {
  const gradients = {
    'HDFC Bank': 'linear-gradient(135deg, #0b1c3c, #1a365d)',
    'SBI Card': 'linear-gradient(135deg, #00529b, #0076c0)',
    'ICICI Bank': 'linear-gradient(135deg, #991b1b, #dc2626)',
    'Axis Bank': 'linear-gradient(135deg, #6b21a8, #9333ea)',
    'American Express': 'linear-gradient(135deg, #374151, #9ca3af)',
    'Kotak Bank': 'linear-gradient(135deg, #7f1d1d, #ef4444)',
    'IndusInd Bank': 'linear-gradient(135deg, #78350f, #d97706)',
    'IDFC FIRST': 'linear-gradient(135deg, #4c1d95, #7c3aed)',
    'Standard Chartered': 'linear-gradient(135deg, #064e3b, #10b981)',
    'AU Small Finance': 'linear-gradient(135deg, #1e3a8a, #3b82f6)',
    'Yes Bank': 'linear-gradient(135deg, #0f766e, #14b8a6)',
    'RBL Bank': 'linear-gradient(135deg, #0284c7, #38bdf8)'
  };
  return gradients[bank] || 'linear-gradient(135deg, #1f2937, #4b5563)';
};

interface Props {
  card: Card;
}

const CreditCardItem: React.FC<Props> = ({ card }) => {
  return (
    <div 
      className="soft-panel" 
      style={{ 
        position: 'relative', 
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        padding: 0
      }}
    >
      {/* Physical Card Representation */}
      <div 
        style={{ 
          background: getCardGradient(card.bank),
          padding: '1.5rem',
          color: 'white',
          position: 'relative',
          minHeight: '200px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          borderBottom: '1px solid var(--card-border)'
        }}
      >
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
               <div style={{ 
                 width: '28px', height: '28px', 
                 background: 'rgba(255,255,255,0.15)', 
                 borderRadius: '6px', 
                 display: 'flex', alignItems: 'center', justifyContent: 'center',
                 border: '1px solid rgba(255,255,255,0.3)',
                 backdropFilter: 'blur(4px)'
               }}>
                 <Landmark size={14} color="#fff" />
               </div>
               <div style={{ fontSize: '1.1rem', fontWeight: '700', textShadow: '0 2px 4px rgba(0,0,0,0.3)', letterSpacing: '0.02em' }}>
                 {card.bank.toUpperCase()}
               </div>
            </div>
          </div>
          <Wifi size={24} style={{ transform: 'rotate(90deg)', opacity: 0.8 }} />
        </div>
        
        <div>
          {/* Chip */}
          <div style={{ 
            width: '40px', height: '30px', 
            background: 'linear-gradient(135deg, #ffd700, #b8860b)', 
            borderRadius: '4px', marginBottom: '1rem',
            position: 'relative', overflow: 'hidden'
          }}>
             <div style={{ position: 'absolute', top: '50%', left: 0, right: 0, height: '1px', background: 'rgba(0,0,0,0.2)' }}></div>
             <div style={{ position: 'absolute', left: '50%', top: 0, bottom: 0, width: '1px', background: 'rgba(0,0,0,0.2)' }}></div>
          </div>
          
          <div style={{ fontSize: '1.1rem', letterSpacing: '2px', textShadow: '0 2px 4px rgba(0,0,0,0.3)', marginBottom: '0.25rem' }}>
            **** **** **** 1234
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
            <div style={{ fontSize: '1.2rem', fontWeight: 600, textShadow: '0 2px 4px rgba(0,0,0,0.3)' }}>
              {card.name}
            </div>
            <div style={{ fontSize: '0.75rem', textTransform: 'uppercase', opacity: 0.8 }}>Valid Thru<br/>12/28</div>
          </div>
        </div>
      </div>

      {/* Card Details & Benefits */}
      <div style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
        <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '1rem' }}>
          {(card.categories || []).map(cat => (
             <span key={cat} style={{ 
               fontSize: '0.75rem', 
               padding: '0.25rem 0.75rem', 
               background: 'rgba(59, 130, 246, 0.1)', 
               color: 'var(--primary-color)', 
               borderRadius: '1rem',
               fontWeight: 600,
               textTransform: 'capitalize'
             }}>
               {cat}
             </span>
          ))}
        </div>

        <ul style={{ listStyle: 'none', padding: 0, margin: 0, flexGrow: 1 }}>
          {(card.features || []).map((benefit, idx) => (
            <li key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem', marginBottom: '0.75rem', fontSize: '0.9rem' }}>
              <Check size={16} style={{ color: 'var(--primary-color)', flexShrink: 0, marginTop: '0.1rem' }} />
              <span style={{ color: 'var(--text-color)' }}>{benefit}</span>
            </li>
          ))}
        </ul>

        <div style={{ marginTop: '1.5rem', paddingTop: '1.5rem', borderTop: '1px solid var(--card-border)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
           <div>
             <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Joining Fee</div>
             <div style={{ fontWeight: 600 }}>₹{card.joiningFee}</div>
           </div>
           <div>
             <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Annual Fee</div>
             <div style={{ fontWeight: 600 }}>₹{card.annualFee}</div>
           </div>
           <button className="btn btn-primary" style={{ padding: '0.5rem 1rem', fontSize: '0.9rem' }}>
             Apply
           </button>
        </div>
      </div>
    </div>
  );
};

export default CreditCardItem;
