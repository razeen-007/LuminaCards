export interface Card {
  id: string;
  name: string;
  bank: string;
  type: string;
  color?: string;
  rating: number;
  minIncome: number;
  minCibil: number;
  joiningFee: number;
  annualFee: number;
  categories: string[];
  features: string[];
  matchScore?: number;
}

export interface UserData {
  name: string;
  age: number;
  employmentType: 'salaried' | 'self-employed';
  monthlyIncome: number;
  cibilScore: number;
  categories: string[];
}
