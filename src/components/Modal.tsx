'use client';

import { ReactNode, useEffect } from 'react';

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: ReactNode;
};

export function Modal({ isOpen, onClose, title, children }: ModalProps) {
  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const onEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', onEscape);
    return () => window.removeEventListener('keydown', onEscape);
  }, [isOpen, onClose]);

  if (!isOpen) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4" role="dialog" aria-modal="true" aria-label={title}>
      <div className="w-full max-w-2xl rounded-sm bg-white p-8 shadow-xl">
        <div className="mb-6 flex items-start justify-between gap-4">
          <h3 className="text-xl font-medium">{title}</h3>
          <button
            type="button"
            onClick={onClose}
            className="rounded-sm border border-black/20 px-3 py-1 text-sm transition hover:bg-black/5 focus:outline-none focus:ring-2 focus:ring-accent"
          >
            Close
          </button>
        </div>
        <div className="space-y-4 text-black/80">{children}</div>
      </div>
    </div>
  );
}
