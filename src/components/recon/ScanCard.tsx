import React from 'react';
import { Target } from '../../types/recon';
import { formatDistanceToNow } from 'date-fns';
import { Activity, AlertTriangle, CheckCircle, XCircle } from 'lucide-react';
import clsx from 'clsx';

interface Props {
  target: Target;
  onRemove: (id: string) => void;
}

export function ScanCard({ target, onRemove }: Props) {
  const getStatusIcon = () => {
    switch (target.status) {
      case 'scanning':
        return <Activity className="h-5 w-5 text-[#3B82F6] animate-pulse" />;
      case 'completed':
        return <CheckCircle className="h-5 w-5 text-green-500" />;
      case 'failed':
        return <XCircle className="h-5 w-5 text-red-500" />;
      default:
        return <AlertTriangle className="h-5 w-5 text-yellow-500" />;
    }
  };

  const criticalFindings = target.findings.filter(
    (f) => f.severity === 'critical'
  ).length;

  return (
    <div className="bg-gray-900 rounded-lg border border-gray-800 p-4">
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center space-x-2">
          {getStatusIcon()}
          <h3 className="text-white font-medium">{target.domain}</h3>
        </div>
        <button
          onClick={() => onRemove(target.id)}
          className="text-gray-400 hover:text-white"
        >
          <XCircle className="h-5 w-5" />
        </button>
      </div>

      <div className="space-y-2">
        <div className="flex justify-between text-sm">
          <span className="text-gray-400">Status</span>
          <span
            className={clsx(
              'capitalize',
              target.status === 'scanning' && 'text-[#3B82F6]',
              target.status === 'completed' && 'text-green-500',
              target.status === 'failed' && 'text-red-500',
              target.status === 'pending' && 'text-yellow-500'
            )}
          >
            {target.status}
          </span>
        </div>

        <div className="flex justify-between text-sm">
          <span className="text-gray-400">Started</span>
          <span className="text-white">
            {formatDistanceToNow(new Date(target.createdAt), { addSuffix: true })}
          </span>
        </div>

        {criticalFindings > 0 && (
          <div className="mt-3 flex items-center justify-between text-sm">
            <span className="text-red-500">Critical Findings</span>
            <span className="text-red-500 font-medium">{criticalFindings}</span>
          </div>
        )}
      </div>
    </div>
  );
}