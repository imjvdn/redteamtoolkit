import { create } from 'zustand';
import { ReconState, Target } from '../types/recon';

export const useReconStore = create<ReconState>((set) => ({
  targets: [],
  activeScans: 0,
  addTarget: (domain: string) => {
    const newTarget: Target = {
      id: crypto.randomUUID(),
      domain,
      status: 'pending',
      createdAt: new Date().toISOString(),
      findings: [],
    };
    set((state) => ({
      targets: [newTarget, ...state.targets],
      activeScans: state.activeScans + 1,
    }));
  },
  removeTarget: (id: string) => {
    set((state) => ({
      targets: state.targets.filter((target) => target.id !== id),
    }));
  },
  updateTarget: (id: string, updates: Partial<Target>) => {
    set((state) => ({
      targets: state.targets.map((target) =>
        target.id === id ? { ...target, ...updates } : target
      ),
    }));
  },
}));