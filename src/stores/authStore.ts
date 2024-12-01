import { create } from 'zustand';
import { AuthState } from '../types/auth';

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  isAuthenticated: false,
  login: async (email: string, password: string) => {
    // In a real app, this would make an API call
    if (email === 'demo@example.com' && password === 'demo') {
      set({
        user: {
          id: '1',
          email,
          name: 'Demo User',
          role: 'analyst',
        },
        isAuthenticated: true,
      });
    } else {
      throw new Error('Invalid credentials');
    }
  },
  logout: () => {
    set({ user: null, isAuthenticated: false });
  },
}));