"use client";

import { MouseEvent, ReactNode } from "react";
import Button from "../Button";

interface DialogProps {
  isOpen: boolean;
  title: string;
  description?: string | ReactNode;
  confirmLabel?: string;
  cancelLabel?: string;
  onClose: () => void;
  onConfirm: () => void;
  isLoading?: boolean;
}

const Dialog = ({
  isOpen,
  title,
  description,
  confirmLabel = "Confirmar",
  cancelLabel = "Cancelar",
  onClose,
  onConfirm,
  isLoading = false,
}: DialogProps) => {
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
    >
      <div
        className="
          w-full max-w-md
          bg-white dark:bg-zinc-950
          border border-zinc-200 dark:border-zinc-800
          sm:rounded-lg rounded-none
          flex flex-col justify-between
        "
      >
        <div className="p-6 overflow-y-auto">
          <h3 className="text-lg font-semibold mb-2">{title}</h3>
          {description && (
            <div className="text-sm text-zinc-600 dark:text-zinc-400">
              {description}
            </div>
          )}
        </div>

        <div className="p-6 border-t border-zinc-200 dark:border-zinc-800 flex gap-2 justify-end">
          <Button onClick={onClose} disabled={isLoading} variant="neutral">
            {cancelLabel}
          </Button>
          <Button onClick={onConfirm} loading={isLoading}>
            {confirmLabel}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Dialog;
