import { create } from 'zustand';
import { ReportState, Report, ReportType } from '../types/report';

export const useReportStore = create<ReportState>((set) => ({
  reports: [],
  generateReport: (title: string, type: ReportType, targetIds: string[]) => {
    const newReport: Report = {
      id: crypto.randomUUID(),
      title,
      type,
      status: 'generating',
      createdAt: new Date().toISOString(),
      targetIds,
      findings: [],
    };
    set((state) => ({
      reports: [newReport, ...state.reports],
    }));
  },
  removeReport: (id: string) => {
    set((state) => ({
      reports: state.reports.filter((report) => report.id !== id),
    }));
  },
}));