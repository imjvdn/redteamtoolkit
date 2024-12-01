import React from 'react';
import { NavLink } from 'react-router-dom';
import { LayoutDashboard, Shield, Activity, FileText, Settings, Database, Lock } from 'lucide-react';
import clsx from 'clsx';

const navigation = [
  { name: 'Dashboard', href: '/', icon: LayoutDashboard },
  { name: 'Reconnaissance', href: '/recon', icon: Database },
  { name: 'Brute Force', href: '/bruteforce', icon: Lock },
  { name: 'Security Monitoring', href: '/monitoring', icon: Activity },
  { name: 'Reports', href: '/reports', icon: FileText },
  { name: 'Settings', href: '/settings', icon: Settings },
];

export function Sidebar() {
  return (
    <div className="flex h-full w-64 flex-col bg-[#181818] border-r border-gray-800">
      <div className="flex h-16 items-center px-4">
        <Shield className="h-8 w-8 text-[#8B5CF6]" />
        <span className="ml-2 text-xl font-bold text-white">Red Team Toolkit</span>
      </div>
      <nav className="flex-1 space-y-1 px-2 py-4">
        {navigation.map((item) => (
          <NavLink
            key={item.name}
            to={item.href}
            className={({ isActive }) =>
              clsx(
                'group flex items-center px-2 py-2 text-sm font-medium rounded-md transition-colors',
                isActive
                  ? 'bg-[#8B5CF6]/10 text-[#8B5CF6]'
                  : 'text-gray-300 hover:bg-gray-800 hover:text-white'
              )
            }
          >
            <item.icon
              className="mr-3 h-5 w-5 flex-shrink-0"
              aria-hidden="true"
            />
            {item.name}
          </NavLink>
        ))}
      </nav>
    </div>
  );
}