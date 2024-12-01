export interface BruteForceTarget {
  id: string;
  host: string;
  port: number;
  service: 'SSH' | 'FTP' | 'HTTP';
  status: 'pending' | 'running' | 'completed' | 'failed';
  createdAt: string;
  completedAt?: string;
  attempts: number;
  successCount: number;
  credentials: Credential[];
}

export interface Credential {
  id: string;
  username: string;
  password: string;
  timestamp: string;
  successful: boolean;
}

export interface BruteForceState {
  targets: BruteForceTarget[];
  activeAttacks: number;
  addTarget: (host: string, port: number, service: BruteForceTarget['service']) => void;
  removeTarget: (id: string) => void;
  updateTarget: (id: string, updates: Partial<BruteForceTarget>) => void;
}