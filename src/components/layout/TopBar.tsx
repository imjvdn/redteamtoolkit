import React from 'react';
import { Bell, Search, User } from 'lucide-react';
import { useAuthStore } from '../../stores/authStore';

export function TopBar() {
  const { user, logout } = useAuthStore();

  return (
    <div className="h-16 bg-[#181818] border-b border-gray-800">
      <div className="h-full px-4 flex items-center justify-between">
        <div className="flex items-center flex-1">
          <div className="max-w-lg w-full lg:max-w-xs relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-gray-400" aria-hidden="true" />
            </div>
            <input
              type="text"
              className="block w-full pl-10 pr-3 py-2 border border-gray-700 rounded-md leading-5 bg-gray-900 text-gray-300 placeholder-gray-400 focus:outline-none focus:bg-gray-800 focus:border-[#8B5CF6] focus:ring-1 focus:ring-[#8B5CF6] sm:text-sm"
              placeholder="Search..."
            />
          </div>
        </div>
        
        <div className="ml-4 flex items-center space-x-4">
          <button className="p-1 rounded-full text-gray-400 hover:text-white focus:outline-none">
            <Bell className="h-6 w-6" />
          </button>
          
          <div className="relative">
            <button className="flex items-center space-x-2 text-sm text-gray-300 hover:text-white">
              <User className="h-8 w-8 rounded-full p-1 border border-gray-700" />
              <span>{user?.name || 'User'}</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}