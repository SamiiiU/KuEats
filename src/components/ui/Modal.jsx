import { useEffect } from 'react';
import Button from './Button';

export default function Modal({ open, title, description, confirmText = 'Confirm', cancelText = 'Cancel', onConfirm, onCancel }) {
  useEffect(() => {
    function onEsc(e) {
      if (e.key === 'Escape') onCancel?.();
    }
    if (open) window.addEventListener('keydown', onEsc);
    return () => window.removeEventListener('keydown', onEsc);
  }, [open, onCancel]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
      <div className="w-full max-w-md rounded-xl bg-white p-6 shadow-lg">
        <h3 className="text-lg font-semibold">{title}</h3>
        {description && <p className="mt-2 text-gray-600">{description}</p>}
        <div className="mt-6 flex justify-end gap-3">
          <Button className="bg-gray-200 text-gray-900 hover:bg-gray-300" onClick={onCancel}>{cancelText}</Button>
          <Button onClick={onConfirm}>{confirmText}</Button>
        </div>
      </div>
    </div>
  );
}
