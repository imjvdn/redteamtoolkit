export type ReportType = 'recon' | 'bruteforce' | 'combined';

export interface Report {
  id: string;
  title: string;
  type: ReportType;
  status: 'generating' | 'completed' | 'failed';
  createdAt: string;
  completedAt?: string;
  targetIds: string[];
  findings: ReportFinding[];
}

export interface ReportFinding {
  id: string;
  type: 'vulnerability' | 'credential' | 'service';
  severity: 'low' | 'medium' | 'high' | 'critical';
  title: string;
  description: string;
  recommendation: string;
}

export interface ReportState {
  reports: Report[];
  generateReport: (title: string, type: ReportType, targetIds: string[]) => void;
  removeReport: (id: string) => void;
}