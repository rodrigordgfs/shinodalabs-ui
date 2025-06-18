"use client";

import { ReactNode, MouseEvent } from "react";

interface ModalProps {
  isOpen: boolean;
  title: string;
  description?: string;
  children: ReactNode;
  onClose: () => void;
  onConfirm?: () => void;
  confirmLabel?: string;
  cancelLabel?: string;
  isLoading?: boolean;
}

const Modal = ({
  isOpen,
  title,
  description,
  children,
  onClose,
  onConfirm,
  isLoading = false,
  confirmLabel = "Salvar",
  cancelLabel = "Cancelar",
}: ModalProps) => {
  if (!isOpen) return null;

  const handleBackdropClick = (e: MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div
      className="fixed inset-0 z-40 bg-black/60 animate-in fade-in duration-200 flex items-center justify-center p-4 sm:p-6"
      onClick={handleBackdropClick}
      // NÃO colocar backdrop-blur nem transform aqui
    >
      <div
        className="
          modal
          bg-white dark:bg-zinc-950
          border border-zinc-200 dark:border-zinc-800
          rounded-lg
          flex flex-col
          max-h-[90vh]
          overflow-visible
          z-50
          relative
          w-full max-w-lg
        "
      >
        <div className="p-6 overflow-y-auto">
          <h3 className="text-lg font-semibold mb-2">{title}</h3>
          <div className="w-full max-w-full">
            {description && (
              <p className="text-sm text-zinc-500 dark:text-zinc-400 mb-4">
                {description}
              </p>
            )}
            {children}
          </div>
        </div>

        <div className="p-6 border-t border-zinc-200 dark:border-zinc-800 flex gap-2 justify-end">
          <button
            disabled={isLoading}
            onClick={onClose}
            className="btn-neutral"
          >
            {cancelLabel}
          </button>
          {onConfirm && (
            <button
              disabled={isLoading}
              onClick={onConfirm}
              className="btn-primary"
            >
              {confirmLabel}
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Modal;
