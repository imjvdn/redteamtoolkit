import React from 'react';
import { LucideIcon } from 'lucide-react';
import clsx from 'clsx';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost';
  icon?: LucideIcon;
  children: React.ReactNode;
}

export function Button({ 
  variant = 'primary', 
  icon: Icon, 
  children, 
  className, 
  ...props 
}: ButtonProps) {
  return (
    <button
      className={clsx(
        'flex items-center space-x-2 px-4 py-2 rounded-md transition-colors',
        variant === 'primary' && 'bg-[#8B5CF6] text-white hover:bg-[#7C3AED]',
        variant === 'secondary' && 'bg-gray-800 text-gray-300 hover:bg-gray-700',
        variant === 'ghost' && 'text-gray-400 hover:text-white',
        className
      )}
      {...props}
    >
      {Icon && <Icon className="h-5 w-5" />}
      <span>{children}</span>
    </button>
  );
}