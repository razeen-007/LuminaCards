import { create } from 'zustand';
import { Card, UserData } from '../types';
import { fetchRecommendationsAPI } from '../api/cardsApi';

interface AppState {
  // User Data
  userData: UserData | null;
  setUserData: (data: UserData) => void;
  
  // Recommendations
  recommendations: Card[];
  
  // Async UI State
  isLoading: boolean;
  error: string | null;
  
  // Actions
  fetchRecommendations: (userData: UserData) => Promise<void>;
  resetApp: () => void;
}

export const useStore = create<AppState>((set) => ({
  userData: null,
  setUserData: (data) => set({ userData: data }),
  
  recommendations: [],
  
  isLoading: false,
  error: null,
  
  fetchRecommendations: async (userData: UserData) => {
    set({ isLoading: true, error: null, userData });
    try {
      const cards = await fetchRecommendationsAPI(userData);
      set({ recommendations: cards, isLoading: false });
    } catch (err: any) {
      set({ error: err.message || 'Failed to fetch recommendations', isLoading: false });
    }
  },
  
  resetApp: () => set({ userData: null, recommendations: [], error: null, isLoading: false })
}));
