export const SEVERITY_COLORS = {
  critical: 'text-red-500',
  high: 'text-orange-500',
  medium: 'text-yellow-500',
  low: 'text-green-500',
} as const;

export const STATUS_COLORS = {
  new: 'text-yellow-500',
  investigating: 'text-[#3B82F6]',
  resolved: 'text-green-500',
  failed: 'text-red-500',
} as const;

export const API_ENDPOINTS = {
  auth: '/api/auth',
  recon: '/api/recon',
  bruteforce: '/api/bruteforce',
  monitoring: '/api/monitoring',
  reports: '/api/reports',
} as const;