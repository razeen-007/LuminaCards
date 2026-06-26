import { describe, it, expect } from 'vitest';
import { getRecommendations } from './recommendationEngine';
import { UserData } from '../types';

describe('recommendationEngine', () => {
  it('should filter out cards if CIBIL score is too low', () => {
    const userData: UserData = {
      name: 'Test User',
      age: 25,
      employmentType: 'salaried',
      monthlyIncome: 100000,
      cibilScore: 300, // Very low
      categories: [],
    };

    const recommendations = getRecommendations(userData);
    
    // Most premium cards require 700+, so we should expect mostly entry level cards
    const highCibilCards = recommendations.filter(card => card.minCibil > 300);
    expect(highCibilCards.length).toBe(0);
  });

  it('should filter out cards if income is too low', () => {
    const userData: UserData = {
      name: 'Test User',
      age: 25,
      employmentType: 'salaried',
      monthlyIncome: 10000, // Very low income
      cibilScore: 800,
      categories: [],
    };

    const recommendations = getRecommendations(userData);
    
    const highIncomeCards = recommendations.filter(card => card.minIncome > 10000);
    expect(highIncomeCards.length).toBe(0);
  });

  it('should score cards higher if categories match', () => {
    const userData: UserData = {
      name: 'Test User',
      age: 25,
      employmentType: 'salaried',
      monthlyIncome: 500000,
      cibilScore: 800,
      categories: ['travel'], // User wants travel cards
    };

    const recommendations = getRecommendations(userData);
    
    // Top recommendation should likely be a travel card because of the +10 point boost
    const topCard = recommendations[0];
    expect(topCard.categories.includes('travel')).toBe(true);
  });

  it('should not crash if user categories are undefined', () => {
    const userData = {
      name: 'Test User',
      age: 25,
      employmentType: 'salaried' as const,
      monthlyIncome: 50000,
      cibilScore: 750,
      categories: undefined as any,
    };

    // Should not throw
    const recommendations = getRecommendations(userData);
    expect(Array.isArray(recommendations)).toBe(true);
  });
});
