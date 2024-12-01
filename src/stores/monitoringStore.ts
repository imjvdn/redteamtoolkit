import { create } from 'zustand';
import { MonitoringState, SecurityEvent } from '../types/monitoring';

export const useMonitoringStore = create<MonitoringState>((set) => ({
  events: [],
  addEvent: (eventData) => {
    const newEvent: SecurityEvent = {
      id: crypto.randomUUID(),
      timestamp: new Date().toISOString(),
      ...eventData,
    };
    set((state) => ({
      events: [newEvent, ...state.events],
    }));
  },
  updateEventStatus: (id, status) => {
    set((state) => ({
      events: state.events.map((event) =>
        event.id === id ? { ...event, status } : event
      ),
    }));
  },
  removeEvent: (id) => {
    set((state) => ({
      events: state.events.filter((event) => event.id !== id),
    }));
  },
}));