import React from 'react';
import { Activity, Shield, Database } from 'lucide-react';

export default function Dashboard() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-white">Security Dashboard</h1>
        <div className="flex space-x-4">
          <button className="px-4 py-2 bg-[#8B5CF6] text-white rounded-md hover:bg-[#7C3AED]">
            New Scan
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-gray-900 p-6 rounded-lg border border-gray-800">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-medium text-white">Reconnaissance</h3>
            <Database className="h-6 w-6 text-[#8B5CF6]" />
          </div>
          <p className="mt-2 text-3xl font-bold text-white">128</p>
          <p className="text-sm text-gray-400">Active targets</p>
        </div>

        <div className="bg-gray-900 p-6 rounded-lg border border-gray-800">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-medium text-white">Security Events</h3>
            <Activity className="h-6 w-6 text-[#3B82F6]" />
          </div>
          <p className="mt-2 text-3xl font-bold text-white">2,847</p>
          <p className="text-sm text-gray-400">Last 24 hours</p>
        </div>

        <div className="bg-gray-900 p-6 rounded-lg border border-gray-800">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-medium text-white">Success Rate</h3>
            <Shield className="h-6 w-6 text-green-500" />
          </div>
          <p className="mt-2 text-3xl font-bold text-white">94.2%</p>
          <p className="text-sm text-gray-400">Brute force attempts</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-gray-900 p-6 rounded-lg border border-gray-800">
          <h3 className="text-lg font-medium text-white mb-4">Recent Activity</h3>
          <div className="space-y-4">
            {[1, 2, 3].map((i) => (
              <div key={i} className="flex items-center space-x-4">
                <div className="h-2 w-2 rounded-full bg-[#8B5CF6]"></div>
                <div className="flex-1">
                  <p className="text-sm text-white">Port scan completed on target-{i}.example.com</p>
                  <p className="text-xs text-gray-400">2 minutes ago</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-gray-900 p-6 rounded-lg border border-gray-800">
          <h3 className="text-lg font-medium text-white mb-4">Quick Actions</h3>
          <div className="grid grid-cols-2 gap-4">
            <button className="p-4 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors">
              <Database className="h-6 w-6 text-[#8B5CF6] mb-2" />
              <span className="text-sm text-white">New Scan</span>
            </button>
            <button className="p-4 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors">
              <Shield className="h-6 w-6 text-[#3B82F6] mb-2" />
              <span className="text-sm text-white">Security Check</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}