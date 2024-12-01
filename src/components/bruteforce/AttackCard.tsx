import React from 'react';
import { BruteForceTarget } from '../../types/bruteforce';
import { formatDistanceToNow } from 'date-fns';
import { Activity, AlertTriangle, CheckCircle, XCircle, Lock } from 'lucide-react';
import clsx from 'clsx';

interface Props {
  target: BruteForceTarget;
  onRemove: (id: string) => void;
}

export function AttackCard({ target, onRemove }: Props) {
  const getStatusIcon = () => {
    switch (target.status) {
      case 'running':
        return <Activity className="h-5 w-5 text-[#3B82F6] animate-pulse" />;
      case 'completed':
        return <CheckCircle className="h-5 w-5 text-green-500" />;
      case 'failed':
        return <XCircle className="h-5 w-5 text-red-500" />;
      default:
        return <AlertTriangle className="h-5 w-5 text-yellow-500" />;
    }
  };

  return (
    <div className="bg-gray-900 rounded-lg border border-gray-800 p-4">
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center space-x-2">
          {getStatusIcon()}
          <div>
            <h3 className="text-white font-medium">{target.host}</h3>
            <p className="text-sm text-gray-400">
              {target.service} - Port {target.port}
            </p>
          </div>
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
              target.status === 'running' && 'text-[#3B82F6]',
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

        <div className="flex justify-between text-sm">
          <span className="text-gray-400">Success Rate</span>
          <span className="text-white">
            {((target.successCount / Math.max(target.attempts, 1)) * 100).toFixed(1)}%
          </span>
        </div>

        {target.successCount > 0 && (
          <div className="mt-3 flex items-center justify-between text-sm">
            <span className="text-green-500">Credentials Found</span>
            <span className="text-green-500 font-medium">{target.successCount}</span>
          </div>
        )}
      </div>
    </div>
  );
}