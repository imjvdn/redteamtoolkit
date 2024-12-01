import React, { useState } from 'react';
import { Plus } from 'lucide-react';
import { useBruteForceStore } from '../stores/bruteforceStore';
import { NewAttackModal } from '../components/bruteforce/NewAttackModal';
import { AttackCard } from '../components/bruteforce/AttackCard';

export default function BruteForce() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { targets, removeTarget } = useBruteForceStore();

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-white">Brute Force</h1>
          <p className="text-gray-400 mt-1">
            Test login credential strength for various services
          </p>
        </div>
        <button
          onClick={() => setIsModalOpen(true)}
          className="flex items-center space-x-2 px-4 py-2 bg-[#8B5CF6] text-white rounded-md hover:bg-[#7C3AED]"
        >
          <Plus className="h-5 w-5" />
          <span>New Attack</span>
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {targets.map((target) => (
          <AttackCard
            key={target.id}
            target={target}
            onRemove={removeTarget}
          />
        ))}
        {targets.length === 0 && (
          <div className="col-span-full flex flex-col items-center justify-center py-12 bg-gray-900 rounded-lg border border-gray-800">
            <div className="text-gray-400 text-center">
              <p className="mt-2">No brute force attacks running</p>
              <button
                onClick={() => setIsModalOpen(true)}
                className="mt-4 text-[#8B5CF6] hover:text-[#7C3AED]"
              >
                Start your first attack
              </button>
            </div>
          </div>
        )}
      </div>

      <NewAttackModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
}