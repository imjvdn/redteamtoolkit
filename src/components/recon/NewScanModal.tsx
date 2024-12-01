import React, { useState } from 'react';
import { Dialog } from '@headlessui/react';
import { X } from 'lucide-react';
import { useReconStore } from '../../stores/reconStore';

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

export function NewScanModal({ isOpen, onClose }: Props) {
  const [domain, setDomain] = useState('');
  const addTarget = useReconStore((state) => state.addTarget);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (domain.trim()) {
      addTarget(domain.trim());
      setDomain('');
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
              New Reconnaissance Scan
            </Dialog.Title>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-white"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label
                htmlFor="domain"
                className="block text-sm font-medium text-gray-300"
              >
                Target Domain
              </label>
              <input
                type="text"
                id="domain"
                value={domain}
                onChange={(e) => setDomain(e.target.value)}
                className="mt-1 block w-full rounded-md border border-gray-700 bg-gray-800 text-white px-3 py-2 text-sm focus:border-[#8B5CF6] focus:outline-none focus:ring-1 focus:ring-[#8B5CF6]"
                placeholder="example.com"
              />
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
                Start Scan
              </button>
            </div>
          </form>
        </Dialog.Panel>
      </div>
    </Dialog>
  );
}