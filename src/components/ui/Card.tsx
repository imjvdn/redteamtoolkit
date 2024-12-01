import React from 'react';
import { LucideIcon } from 'lucide-react';
import clsx from 'clsx';

interface CardProps {
  title: string;
  value: string | number;
  subtitle: string;
  icon: LucideIcon;
  iconColor?: string;
  className?: string;
}

export function Card({ title, value, subtitle, icon: Icon, iconColor = 'text-[#8B5CF6]', className }: CardProps) {
  return (
    <div className={clsx("bg-gray-900 p-6 rounded-lg border border-gray-800", className)}>
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-medium text-white">{title}</h3>
        <Icon className={clsx("h-6 w-6", iconColor)} />
      </div>
      <p className="mt-2 text-3xl font-bold text-white">{value}</p>
      <p className="text-sm text-gray-400">{subtitle}</p>
    </div>
  );
}