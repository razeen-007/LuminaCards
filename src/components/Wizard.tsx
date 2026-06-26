import React, { useState } from 'react';
import { ArrowRight, ArrowLeft, Check, Sparkles, AlertCircle } from 'lucide-react';
import { useStore } from '../store/useStore';
import { UserData } from '../types';

const CATEGORY_OPTIONS = [
  { id: 'cashback', label: 'Cashback on Everything' },
  { id: 'travel', label: 'Flights & Lounge Access' },
  { id: 'rewards', label: 'Collecting Reward Points' },
  { id: 'fuel', label: 'Daily Commute & Fuel' },
  { id: 'shopping', label: 'Retail Therapy' },
  { id: 'premium', label: 'Premium Lifestyle Benefits' },
  { id: 'online', label: 'Online Shopping & Food Delivery' },
  { id: 'utility', label: 'Paying Utility Bills' }
];

const Wizard: React.FC = () => {
  const fetchRecommendations = useStore(state => state.fetchRecommendations);
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    employmentType: 'salaried',
    monthlyIncome: '',
    cibilScore: '',
    categories: []
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleCategoryToggle = (categoryId) => {
    setFormData(prev => {
      const isSelected = prev.categories.includes(categoryId);
      if (isSelected) {
        return { ...prev, categories: prev.categories.filter(id => id !== categoryId) };
      } else {
        return { ...prev, categories: [...prev.categories, categoryId] };
      }
    });
  };

  const isValidStep1 = formData.name.trim() !== '' && formData.age >= 18 && formData.age <= 120;
  const isValidStep2 = formData.monthlyIncome !== '' && formData.monthlyIncome >= 0 && 
    (formData.cibilScore === '' || formData.cibilScore == 0 || (formData.cibilScore >= 300 && formData.cibilScore <= 900));

  const nextStep = () => {
    if (step === 1 && !isValidStep1) return;
    if (step === 2 && !isValidStep2) return;
    setStep(prev => prev + 1);
  };
  const prevStep = () => setStep(prev => prev - 1);

  const handleSubmit = () => {
    const data: UserData = {
      ...formData,
      age: parseInt(formData.age as any) || 0,
      monthlyIncome: parseInt(formData.monthlyIncome as any) || 0,
      cibilScore: parseInt(formData.cibilScore as any) || 0
    };
    fetchRecommendations(data);
  };

  return (
    <div className="soft-panel animate-fade-up" style={{ padding: '3rem 2.5rem', maxWidth: '600px', margin: '0 auto', width: '100%' }}>
      
      {/* Friendly Progress Indicator */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '3rem' }}>
        <div style={{ fontSize: '0.875rem', fontWeight: 600, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
          Step {step} of 3
        </div>
        <div style={{ display: 'flex', gap: '0.5rem' }}>
          {[1, 2, 3].map((num) => (
            <div key={num} style={{ 
              width: step === num ? '24px' : '8px', 
              height: '8px', 
              borderRadius: '4px', 
              background: step >= num ? 'var(--primary-color)' : 'var(--card-border)',
              transition: 'all 0.3s ease'
            }} />
          ))}
        </div>
      </div>

      <div style={{ minHeight: '320px' }}>
        {step === 1 && (
          <div className="animate-fade-up">
            <h2 style={{ fontSize: '2.5rem', marginBottom: '2rem', fontWeight: 800, letterSpacing: '-0.03em' }}>Nice to meet you! What should we call you?</h2>
            
            <div style={{ marginBottom: '1.5rem' }}>
              <label htmlFor="name-input" style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 500, color: 'var(--text-muted)' }}>My name is...</label>
              <input 
                id="name-input"
                type="text" 
                name="name" 
                value={formData.name} 
                onChange={handleChange} 
                className="input-field" 
                placeholder="e.g. Rahul Sharma"
              />
            </div>
            
            <div style={{ marginBottom: '1.5rem' }}>
              <label htmlFor="age-input" style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 500, color: 'var(--text-muted)' }}>And I am...</label>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <input 
                  id="age-input"
                  type="number" 
                  name="age" 
                  value={formData.age} 
                  onChange={handleChange} 
                  className="input-field" 
                  placeholder="e.g. 28"
                  style={{ width: '120px', borderColor: (formData.age && (formData.age < 18 || formData.age > 120)) ? '#ef4444' : 'var(--input-border)' }}
                />
                <span style={{ color: 'var(--text-color)', fontWeight: 500 }}>years old.</span>
              </div>
              {formData.age && (formData.age < 18 || formData.age > 120) && (
                <div style={{ color: '#ef4444', fontSize: '0.85rem', marginTop: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                  <AlertCircle size={14} /> You must be between 18 and 120 years old.
                </div>
              )}
            </div>
          </div>
        )}

        {step === 2 && (
          <div className="animate-fade-up">
            <h2 style={{ fontSize: '2.5rem', marginBottom: '2rem', fontWeight: 800, letterSpacing: '-0.03em' }}>Let's talk about your finances.</h2>
            
            <div style={{ marginBottom: '1.5rem' }}>
              <label htmlFor="employment-input" style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 500, color: 'var(--text-muted)' }}>What do you do for a living?</label>
              <select id="employment-input" name="employmentType" value={formData.employmentType} onChange={handleChange} className="input-field">
                <option value="salaried">I'm salaried</option>
                <option value="self-employed">I'm self-employed / run a business</option>
              </select>
            </div>
            
            <div style={{ marginBottom: '1.5rem' }}>
              <label htmlFor="income-input" style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 500, color: 'var(--text-muted)' }}>Roughly, what's your monthly take-home pay?</label>
              <div style={{ position: 'relative' }}>
                <span style={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)', fontWeight: 500 }}>₹</span>
                <input 
                  id="income-input"
                  type="number" 
                  name="monthlyIncome" 
                  value={formData.monthlyIncome} 
                  onChange={handleChange} 
                  className="input-field" 
                  placeholder="50000"
                  style={{ paddingLeft: '2.5rem' }}
                />
              </div>
            </div>
            
            <div style={{ marginBottom: '1.5rem' }}>
              <label htmlFor="cibil-input" style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 500, color: 'var(--text-muted)' }}>Do you know your CIBIL score?</label>
              <input 
                id="cibil-input"
                type="number" 
                name="cibilScore" 
                value={formData.cibilScore} 
                onChange={handleChange} 
                className="input-field" 
                placeholder="e.g. 750 (Leave as 0 if you're new to credit)"
                style={{ borderColor: (formData.cibilScore && formData.cibilScore != 0 && (formData.cibilScore < 300 || formData.cibilScore > 900)) ? '#ef4444' : 'var(--input-border)' }}
              />
              {formData.cibilScore && formData.cibilScore != 0 && (formData.cibilScore < 300 || formData.cibilScore > 900) && (
                <div style={{ color: '#ef4444', fontSize: '0.85rem', marginTop: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                  <AlertCircle size={14} /> CIBIL score must be between 300 and 900 (or 0).
                </div>
              )}
            </div>
          </div>
        )}

        {step === 3 && (
          <div className="animate-fade-up">
            <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem', fontWeight: 800, letterSpacing: '-0.03em' }}>What do you love spending on?</h2>
            <p style={{ color: 'var(--text-muted)', marginBottom: '2rem', fontSize: '1.1rem' }}>Pick a few categories so we can find cards that reward your actual lifestyle.</p>
            
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
              {CATEGORY_OPTIONS.map(option => {
                const isSelected = formData.categories.includes(option.id);
                return (
                  <button
                    key={option.id}
                    onClick={() => handleCategoryToggle(option.id)}
                    className={`category-btn ${isSelected ? 'selected' : ''}`}
                  >
                    {isSelected && <Check size={16} />}
                    {option.label}
                  </button>
                )
              })}
            </div>
          </div>
        )}
      </div>

      <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '1rem' }}>
        <button 
          onClick={prevStep} 
          className="btn btn-outline"
          style={{ opacity: step === 1 ? 0 : 1, pointerEvents: step === 1 ? 'none' : 'auto' }}
        >
          <ArrowLeft size={18} /> Back
        </button>
        
        {step < 3 ? (
          <button 
            onClick={nextStep} 
            className="btn btn-primary" 
            disabled={(step === 1 && !isValidStep1) || (step === 2 && !isValidStep2)}
            style={{ opacity: ((step === 1 && !isValidStep1) || (step === 2 && !isValidStep2)) ? 0.5 : 1 }}
          >
            Next <ArrowRight size={18} />
          </button>
        ) : (
          <button onClick={handleSubmit} className="btn btn-primary">
            Find My Cards <Sparkles size={18} />
          </button>
        )}
      </div>
    </div>
  );
};

export default Wizard;
