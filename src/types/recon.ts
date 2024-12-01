export interface Target {
  id: string;
  domain: string;
  status: 'pending' | 'scanning' | 'completed' | 'failed';
  createdAt: string;
  completedAt?: string;
  findings: Finding[];
}

export interface Finding {
  id: string;
  type: 'subdomain' | 'port' | 'service';
  value: string;
  severity: 'low' | 'medium' | 'high' | 'critical';
  details: string;
  timestamp: string;
}

export interface ReconState {
  targets: Target[];
  activeScans: number;
  addTarget: (domain: string) => void;
  removeTarget: (id: string) => void;
  updateTarget: (id: string, updates: Partial<Target>) => void;
}