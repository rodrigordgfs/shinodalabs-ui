"use client";

import { ReactNode, MouseEvent } from "react";
import Button from "../Button";
import { de } from "date-fns/locale";

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
      className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200 flex items-center justify-center p-4 sm:p-6"
      onClick={handleBackdropClick}
    >
      <div
        className="
          modal
          bg-white dark:bg-zinc-950
          border border-zinc-200 dark:border-zinc-800
          rounded-lg
          flex flex-col
          max-h-[90vh]
        "
      >
        <div className="p-6 overflow-y-auto max-h-[calc(90vh - 96px)]">
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
          <Button disabled={isLoading} onClick={onClose} variant="neutral">
            {cancelLabel}
          </Button>
          {onConfirm && (
            <Button disabled={isLoading} onClick={onConfirm}>
              {confirmLabel}
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Modal;
