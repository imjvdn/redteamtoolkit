import React from 'react';
import { Dialog } from '@headlessui/react';
import { X } from 'lucide-react';
import { Button } from './Button';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
  footer?: React.ReactNode;
}

export function Modal({ isOpen, onClose, title, children, footer }: ModalProps) {
  return (
    <Dialog open={isOpen} onClose={onClose} className="relative z-50">
      <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
      <div className="fixed inset-0 flex items-center justify-center p-4">
        <Dialog.Panel className="mx-auto max-w-md rounded-lg bg-gray-900 p-6 border border-gray-800">
          <div className="flex items-center justify-between mb-4">
            <Dialog.Title className="text-lg font-medium text-white">
              {title}
            </Dialog.Title>
            <Button variant="ghost" icon={X} onClick={onClose}>
              <span className="sr-only">Close</span>
            </Button>
          </div>

          {children}

          {footer && (
            <div className="mt-6 flex justify-end space-x-3">
              {footer}
            </div>
          )}
        </Dialog.Panel>
      </div>
    </Dialog>
  );
}