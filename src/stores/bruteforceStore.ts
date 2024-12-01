import { create } from 'zustand';
import { BruteForceState, BruteForceTarget } from '../types/bruteforce';

export const useBruteForceStore = create<BruteForceState>((set) => ({
  targets: [],
  activeAttacks: 0,
  addTarget: (host: string, port: number, service) => {
    const newTarget: BruteForceTarget = {
      id: crypto.randomUUID(),
      host,
      port,
      service,
      status: 'pending',
      createdAt: new Date().toISOString(),
      attempts: 0,
      successCount: 0,
      credentials: [],
    };
    set((state) => ({
      targets: [newTarget, ...state.targets],
      activeAttacks: state.activeAttacks + 1,
    }));
  },
  removeTarget: (id: string) => {
    set((state) => ({
      targets: state.targets.filter((target) => target.id !== id),
    }));
  },
  updateTarget: (id: string, updates: Partial<BruteForceTarget>) => {
    set((state) => ({
      targets: state.targets.map((target) =>
        target.id === id ? { ...target, ...updates } : target
      ),
    }));
  },
}));