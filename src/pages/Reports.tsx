import React, { useState } from 'react';
import { FileText, Download, Trash2, Plus } from 'lucide-react';
import { useReportStore } from '../stores/reportStore';
import { formatDistanceToNow } from 'date-fns';
import clsx from 'clsx';

export default function Reports() {
  const { reports, generateReport, removeReport } = useReportStore();

  const handleGenerateReport = () => {
    generateReport(
      `Security Report - ${new Date().toLocaleDateString()}`,
      'combined',
      []
    );
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-white">Reports</h1>
          <p className="text-gray-400 mt-1">
            Generate and manage security assessment reports
          </p>
        </div>
        <button
          onClick={handleGenerateReport}
          className="flex items-center space-x-2 px-4 py-2 bg-[#8B5CF6] text-white rounded-md hover:bg-[#7C3AED]"
        >
          <Plus className="h-5 w-5" />
          <span>Generate Report</span>
        </button>
      </div>

      <div className="bg-gray-900 rounded-lg border border-gray-800">
        <div className="p-4">
          <table className="min-w-full divide-y divide-gray-800">
            <thead>
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                  Report
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                  Type
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                  Created
                </th>
                <th className="px-6 py-3 text-right text-xs font-medium text-gray-400 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-800">
              {reports.map((report) => (
                <tr key={report.id}>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <FileText className="h-5 w-5 text-[#8B5CF6] mr-2" />
                      <span className="text-white">{report.title}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="capitalize text-gray-300">{report.type}</span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span
                      className={clsx(
                        'px-2 py-1 text-xs font-medium rounded-full',
                        report.status === 'completed' && 'bg-green-500/10 text-green-500',
                        report.status === 'generating' && 'bg-blue-500/10 text-blue-500',
                        report.status === 'failed' && 'bg-red-500/10 text-red-500'
                      )}
                    >
                      {report.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-gray-300">
                    {formatDistanceToNow(new Date(report.createdAt), { addSuffix: true })}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right">
                    <div className="flex items-center justify-end space-x-2">
                      <button
                        className="p-1 text-gray-400 hover:text-white"
                        title="Download Report"
                      >
                        <Download className="h-5 w-5" />
                      </button>
                      <button
                        onClick={() => removeReport(report.id)}
                        className="p-1 text-gray-400 hover:text-red-500"
                        title="Delete Report"
                      >
                        <Trash2 className="h-5 w-5" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {reports.length === 0 && (
            <div className="text-center py-6">
              <p className="text-gray-400">No reports generated yet</p>
              <button
                onClick={handleGenerateReport}
                className="mt-4 text-[#8B5CF6] hover:text-[#7C3AED]"
              >
                Generate your first report
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}