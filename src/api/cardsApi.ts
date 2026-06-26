import { Card, UserData } from '../types';
import { getRecommendations } from '../utils/recommendationEngine';

/**
 * Simulates a robust backend API call.
 * Includes synthetic network latency to test loading states.
 */
export const fetchRecommendationsAPI = async (userData: UserData): Promise<Card[]> => {
  return new Promise((resolve) => {
    // Simulate 1.5 seconds of network latency
    setTimeout(() => {
      const recommendations = getRecommendations(userData);
      resolve(recommendations);
    }, 1500);
  });
};
