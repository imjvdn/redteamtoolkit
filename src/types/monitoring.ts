export interface SecurityEvent {
  id: string;
  type: 'intrusion' | 'anomaly' | 'vulnerability';
  severity: 'low' | 'medium' | 'high' | 'critical';
  source: string;
  timestamp: string;
  description: string;
  status: 'new' | 'investigating' | 'resolved';
}

export interface MonitoringState {
  events: SecurityEvent[];
  addEvent: (event: Omit<SecurityEvent, 'id' | 'timestamp'>) => void;
  updateEventStatus: (id: string, status: SecurityEvent['status']) => void;
  removeEvent: (id: string) => void;
}