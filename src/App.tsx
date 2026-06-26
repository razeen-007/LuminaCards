import React from 'react';
import Header from './components/Header';
import Wizard from './components/Wizard';
import CardRecommendations from './components/CardRecommendations';
import { useStore } from './store/useStore';
import { Loader2 } from 'lucide-react';

const App: React.FC = () => {
  const recommendations = useStore(state => state.recommendations);
  const isLoading = useStore(state => state.isLoading);
  const error = useStore(state => state.error);
  const userData = useStore(state => state.userData);

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', position: 'relative', overflow: 'hidden' }}>
      {/* Organic Background Blobs */}
      <div className="organic-blob"></div>
      <div className="organic-blob-2"></div>

      <Header />
      
      <main style={{ flexGrow: 1, padding: '2rem 1rem', display: 'flex', alignItems: 'flex-start', justifyContent: 'center' }}>
        <div style={{ width: '100%', zIndex: 1 }}>
          {isLoading ? (
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '5rem', gap: '1rem' }}>
              <Loader2 size={48} className="animate-spin" style={{ color: 'var(--primary-color)' }} />
              <h2 style={{ fontSize: '1.5rem', fontWeight: 600 }}>Analyzing your profile...</h2>
              <p style={{ color: 'var(--text-muted)' }}>Matching you with the perfect credit cards.</p>
            </div>
          ) : error ? (
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '5rem', gap: '1rem', background: 'rgba(239, 68, 68, 0.1)', borderRadius: '1rem', border: '1px solid rgba(239, 68, 68, 0.3)' }}>
              <h2 style={{ fontSize: '1.5rem', fontWeight: 600, color: '#ef4444' }}>Oops! Something went wrong</h2>
              <p style={{ color: 'var(--text-color)' }}>{error}</p>
              <button onClick={() => window.location.reload()} className="btn btn-outline" style={{ marginTop: '1rem' }}>Try Again</button>
            </div>
          ) : !userData ? (
            <Wizard />
          ) : (
            <CardRecommendations />
          )}
        </div>
      </main>

      <footer style={{ padding: '2rem', textAlign: 'center', color: 'var(--text-muted)', fontSize: '0.9rem', marginTop: 'auto' }}>
        <p>2026 LuminaCards.</p>
      </footer>
    </div>
  );
};

export default App;
