import React, { useState } from 'react';
import { Activity, AlertTriangle, Shield, Search } from 'lucide-react';
import { useMonitoringStore } from '../stores/monitoringStore';
import { SecurityEvent } from '../types/monitoring';
import { formatDistanceToNow } from 'date-fns';
import clsx from 'clsx';

export default function Monitoring() {
  const { events, updateEventStatus } = useMonitoringStore();
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState<SecurityEvent['status'] | 'all'>('all');

  const filteredEvents = events.filter((event) => {
    const matchesSearch = event.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         event.source.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === 'all' || event.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  const getSeverityColor = (severity: SecurityEvent['severity']) => {
    switch (severity) {
      case 'critical': return 'text-red-500';
      case 'high': return 'text-orange-500';
      case 'medium': return 'text-yellow-500';
      case 'low': return 'text-green-500';
      default: return 'text-gray-500';
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-white">Security Monitoring</h1>
          <p className="text-gray-400 mt-1">
            Monitor and respond to security events in real-time
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-gray-900 p-6 rounded-lg border border-gray-800">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-medium text-white">Active Alerts</h3>
            <AlertTriangle className="h-6 w-6 text-[#8B5CF6]" />
          </div>
          <p className="mt-2 text-3xl font-bold text-white">
            {events.filter(e => e.status === 'new').length}
          </p>
          <p className="text-sm text-gray-400">Requiring attention</p>
        </div>

        <div className="bg-gray-900 p-6 rounded-lg border border-gray-800">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-medium text-white">Under Investigation</h3>
            <Activity className="h-6 w-6 text-[#3B82F6]" />
          </div>
          <p className="mt-2 text-3xl font-bold text-white">
            {events.filter(e => e.status === 'investigating').length}
          </p>
          <p className="text-sm text-gray-400">Being analyzed</p>
        </div>

        <div className="bg-gray-900 p-6 rounded-lg border border-gray-800">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-medium text-white">Resolved</h3>
            <Shield className="h-6 w-6 text-green-500" />
          </div>
          <p className="mt-2 text-3xl font-bold text-white">
            {events.filter(e => e.status === 'resolved').length}
          </p>
          <p className="text-sm text-gray-400">Successfully handled</p>
        </div>
      </div>

      <div className="bg-gray-900 rounded-lg border border-gray-800">
        <div className="p-4 border-b border-gray-800">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex-1 relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="block w-full pl-10 pr-3 py-2 border border-gray-700 rounded-md leading-5 bg-gray-800 text-gray-300 placeholder-gray-400 focus:outline-none focus:bg-gray-700 focus:border-[#8B5CF6] focus:ring-1 focus:ring-[#8B5CF6] sm:text-sm"
                placeholder="Search events..."
              />
            </div>
            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value as SecurityEvent['status'] | 'all')}
              className="block w-full sm:w-48 px-3 py-2 border border-gray-700 rounded-md leading-5 bg-gray-800 text-gray-300 focus:outline-none focus:bg-gray-700 focus:border-[#8B5CF6] focus:ring-1 focus:ring-[#8B5CF6] sm:text-sm"
            >
              <option value="all">All Status</option>
              <option value="new">New</option>
              <option value="investigating">Investigating</option>
              <option value="resolved">Resolved</option>
            </select>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-800">
            <thead>
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                  Event
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                  Source
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                  Severity
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                  Time
                </th>
                <th className="px-6 py-3 text-right text-xs font-medium text-gray-400 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-800">
              {filteredEvents.map((event) => (
                <tr key={event.id}>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="text-white">{event.description}</span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="text-gray-300">{event.source}</span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={clsx('capitalize', getSeverityColor(event.severity))}>
                      {event.severity}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <select
                      value={event.status}
                      onChange={(e) => updateEventStatus(event.id, e.target.value as SecurityEvent['status'])}
                      className="block w-full px-2 py-1 text-sm border border-gray-700 rounded-md bg-gray-800 text-gray-300 focus:outline-none focus:ring-1 focus:ring-[#8B5CF6]"
                    >
                      <option value="new">New</option>
                      <option value="investigating">Investigating</option>
                      <option value="resolved">Resolved</option>
                    </select>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-gray-300">
                    {formatDistanceToNow(new Date(event.timestamp), { addSuffix: true })}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right">
                    <button
                      className="text-[#8B5CF6] hover:text-[#7C3AED] text-sm"
                      onClick={() => {/* Implement view details */}}
                    >
                      View Details
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {filteredEvents.length === 0 && (
            <div className="text-center py-6">
              <p className="text-gray-400">No security events found</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}