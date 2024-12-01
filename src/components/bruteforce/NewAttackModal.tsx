import React, { useState } from 'react';
import { Dialog } from '@headlessui/react';
import { X } from 'lucide-react';
import { useBruteForceStore } from '../../stores/bruteforceStore';
import { BruteForceTarget } from '../../types/bruteforce';

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

export function NewAttackModal({ isOpen, onClose }: Props) {
  const [host, setHost] = useState('');
  const [port, setPort] = useState('');
  const [service, setService] = useState<BruteForceTarget['service']>('SSH');
  const addTarget = useBruteForceStore((state) => state.addTarget);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (host.trim() && port) {
      addTarget(host.trim(), parseInt(port, 10), service);
      setHost('');
      setPort('');
      onClose();
    }
  };

  return (
    <Dialog open={isOpen} onClose={onClose} className="relative z-50">
      <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
      <div className="fixed inset-0 flex items-center justify-center p-4">
        <Dialog.Panel className="mx-auto max-w-md rounded-lg bg-gray-900 p-6 border border-gray-800">
          <div className="flex items-center justify-between mb-4">
            <Dialog.Title className="text-lg font-medium text-white">
              New Brute Force Attack
            </Dialog.Title>
            <button onClick={onClose} className="text-gray-400 hover:text-white">
              <X className="h-5 w-5" />
            </button>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="host" className="block text-sm font-medium text-gray-300">
                Target Host
              </label>
              <input
                type="text"
                id="host"
                value={host}
                onChange={(e) => setHost(e.target.value)}
                className="mt-1 block w-full rounded-md border border-gray-700 bg-gray-800 text-white px-3 py-2 text-sm focus:border-[#8B5CF6] focus:outline-none focus:ring-1 focus:ring-[#8B5CF6]"
                placeholder="example.com"
              />
            </div>

            <div>
              <label htmlFor="port" className="block text-sm font-medium text-gray-300">
                Port
              </label>
              <input
                type="number"
                id="port"
                value={port}
                onChange={(e) => setPort(e.target.value)}
                className="mt-1 block w-full rounded-md border border-gray-700 bg-gray-800 text-white px-3 py-2 text-sm focus:border-[#8B5CF6] focus:outline-none focus:ring-1 focus:ring-[#8B5CF6]"
                placeholder="22"
              />
            </div>

            <div>
              <label htmlFor="service" className="block text-sm font-medium text-gray-300">
                Service
              </label>
              <select
                id="service"
                value={service}
                onChange={(e) => setService(e.target.value as BruteForceTarget['service'])}
                className="mt-1 block w-full rounded-md border border-gray-700 bg-gray-800 text-white px-3 py-2 text-sm focus:border-[#8B5CF6] focus:outline-none focus:ring-1 focus:ring-[#8B5CF6]"
              >
                <option value="SSH">SSH</option>
                <option value="FTP">FTP</option>
                <option value="HTTP">HTTP</option>
              </select>
            </div>

            <div className="flex justify-end space-x-3">
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2 text-sm text-gray-300 hover:text-white"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-4 py-2 bg-[#8B5CF6] text-white rounded-md hover:bg-[#7C3AED] text-sm"
              >
                Start Attack
              </button>
            </div>
          </form>
        </Dialog.Panel>
      </div>
    </Dialog>
  );
}