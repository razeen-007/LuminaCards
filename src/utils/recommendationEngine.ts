import { indianCreditCards } from '../data/cards';
import { Card, UserData } from '../types';

export const getRecommendations = (userData: UserData): Card[] => {
  const { monthlyIncome, cibilScore, categories } = userData;
  
  // 1. Filter out cards that the user is not eligible for
  const eligibleCards = indianCreditCards.filter(card => {
    const minCibilReq = card.minCibil || 0;
    const minIncomeReq = card.minIncome || 0;
    return cibilScore >= minCibilReq && monthlyIncome >= minIncomeReq;
  });

  // 2. Score cards based on user preferences
  const scoredCards: Card[] = eligibleCards.map(card => {
    let score = 0;
    
    const safeCategories = categories || [];
    
    // Add points for matching categories
    (card.categories || []).forEach(category => {
      if (safeCategories.includes(category)) {
        score += 10;
      }
    });

    // Bonus points for higher rating (as a tie-breaker mostly)
    score += card.rating;

    return { ...card, matchScore: score };
  });

  // 3. Sort by score descending, then by rating descending
  scoredCards.sort((a, b) => {
    const scoreA = a.matchScore || 0;
    const scoreB = b.matchScore || 0;
    if (scoreB !== scoreA) {
      return scoreB - scoreA;
    }
    return b.rating - a.rating;
  });

  // 4. Return ALL matching recommendations for list virtualization scaling
  return scoredCards;
};
