import React from 'react';
import { Bell, Shield, Lock, Mail, User, Database } from 'lucide-react';

export default function Settings() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-white">Settings</h1>
        <p className="text-gray-400 mt-1">
          Manage your security toolkit preferences
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6">
        <div className="bg-gray-900 rounded-lg border border-gray-800">
          <div className="p-6">
            <h2 className="text-lg font-medium text-white mb-4">General Settings</h2>
            
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-300">
                  Default Scan Intensity
                </label>
                <select className="mt-1 block w-full pl-3 pr-10 py-2 text-base border border-gray-700 rounded-md bg-gray-800 text-white focus:outline-none focus:ring-[#8B5CF6] focus:border-[#8B5CF6] sm:text-sm">
                  <option>Low</option>
                  <option>Medium</option>
                  <option>High</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300">
                  Concurrent Scans Limit
                </label>
                <input
                  type="number"
                  className="mt-1 block w-full pl-3 pr-10 py-2 text-base border border-gray-700 rounded-md bg-gray-800 text-white focus:outline-none focus:ring-[#8B5CF6] focus:border-[#8B5CF6] sm:text-sm"
                  defaultValue={3}
                  min={1}
                  max={10}
                />
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <label className="block text-sm font-medium text-gray-300">
                    Automatic Scanning
                  </label>
                  <p className="text-sm text-gray-400">
                    Automatically scan new targets when added
                  </p>
                </div>
                <button
                  type="button"
                  className="relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-[#8B5CF6] focus:ring-offset-2 bg-[#8B5CF6]"
                  role="switch"
                  aria-checked="true"
                >
                  <span className="translate-x-5 inline-block h-5 w-5 transform rounded-full bg-white transition duration-200 ease-in-out"></span>
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gray-900 rounded-lg border border-gray-800">
          <div className="p-6">
            <h2 className="text-lg font-medium text-white mb-4">Notifications</h2>
            
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <Bell className="h-5 w-5 text-gray-400" />
                  <span className="text-gray-300">Security Alerts</span>
                </div>
                <button
                  type="button"
                  className="relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-[#8B5CF6] focus:ring-offset-2 bg-[#8B5CF6]"
                  role="switch"
                  aria-checked="true"
                >
                  <span className="translate-x-5 inline-block h-5 w-5 transform rounded-full bg-white transition duration-200 ease-in-out"></span>
                </button>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-gray-400" />
                  <span className="text-gray-300">Email Reports</span>
                </div>
                <button
                  type="button"
                  className="relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-[#8B5CF6] focus:ring-offset-2 bg-gray-700"
                  role="switch"
                  aria-checked="false"
                >
                  <span className="translate-x-0 inline-block h-5 w-5 transform rounded-full bg-white transition duration-200 ease-in-out"></span>
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gray-900 rounded-lg border border-gray-800">
          <div className="p-6">
            <h2 className="text-lg font-medium text-white mb-4">API Access</h2>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-300">
                  API Key
                </label>
                <div className="mt-1 flex rounded-md shadow-sm">
                  <input
                    type="text"
                    readOnly
                    value="sk_test_4eC39HqLyjWDarjtT1zdp7dc"
                    className="flex-1 block w-full pl-3 pr-10 py-2 text-base border border-gray-700 rounded-l-md bg-gray-800 text-white focus:outline-none focus:ring-[#8B5CF6] focus:border-[#8B5CF6] sm:text-sm"
                  />
                  <button className="inline-flex items-center px-4 py-2 border border-l-0 border-gray-700 rounded-r-md bg-gray-800 text-sm font-medium text-gray-300 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-[#8B5CF6]">
                    Copy
                  </button>
                </div>
              </div>

              <button className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-[#8B5CF6] hover:bg-[#7C3AED] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#8B5CF6]">
                Generate New API Key
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}