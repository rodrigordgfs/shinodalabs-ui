"use client";

import { XIcon } from "lucide-react";
import { useState, useEffect, useRef } from "react";

interface MonthDatePickerProps {
  selectedDate?: Date;
  onChange: (date: Date) => void;
  minDate?: Date;
  maxDate?: Date;
  isOpen: boolean;
  onClose: () => void;
}

const monthNames = [
  "Janeiro",
  "Fevereiro",
  "Março",
  "Abril",
  "Maio",
  "Junho",
  "Julho",
  "Agosto",
  "Setembro",
  "Outubro",
  "Novembro",
  "Dezembro",
];

const MonthDatePicker = ({
  selectedDate,
  onChange,
  minDate,
  maxDate,
  isOpen,
  onClose,
}: MonthDatePickerProps) => {
  const [year, setYear] = useState(
    selectedDate?.getFullYear() ?? new Date().getFullYear()
  );

  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        modalRef.current &&
        !modalRef.current.contains(event.target as Node)
      ) {
        onClose();
      }
    }

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, onClose]);

  useEffect(() => {
    if (selectedDate) {
      setYear(selectedDate.getFullYear());
    }
  }, [selectedDate]);

  const changeYear = (delta: number) => {
    setYear((prev) => prev + delta);
  };

  const isDisabled = (year: number, month: number) => {
    const date = new Date(year, month, 1);
    if (
      minDate &&
      date < new Date(minDate.getFullYear(), minDate.getMonth(), 1)
    )
      return true;
    if (
      maxDate &&
      date > new Date(maxDate.getFullYear(), maxDate.getMonth(), 1)
    )
      return true;
    return false;
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30">
      <div
        ref={modalRef}
        className="bg-white dark:bg-zinc-900 rounded-lg border border-zinc-300 dark:border-zinc-700 shadow-lg p-6 w-[320px] max-w-full"
      >
        {/* Botão fechar */}
        <div className="flex justify-end mb-2">
          <button
            type="button"
            className="text-zinc-500 hover:text-zinc-800 dark:text-zinc-400 dark:hover:text-zinc-200 p-2 hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded-full"
            onClick={onClose}
            aria-label="Fechar calendário"
          >
            <XIcon className="w-5 h-5" />
          </button>
        </div>

        {/* Cabeçalho do ano */}
        <div className="flex justify-between items-center mb-4">
          <button
            onClick={() => changeYear(-1)}
            className="px-2 py-1 rounded hover:bg-zinc-100 dark:hover:bg-zinc-800"
            aria-label="Ano anterior"
            type="button"
          >
            &lt;
          </button>

          <span className="font-semibold text-lg text-zinc-900 dark:text-zinc-100">
            {year}
          </span>

          <button
            onClick={() => changeYear(1)}
            className="px-2 py-1 rounded hover:bg-zinc-100 dark:hover:bg-zinc-800"
            aria-label="Ano seguinte"
            type="button"
          >
            &gt;
          </button>
        </div>

        {/* Grade de meses em 3 colunas com flex */}
        <div className="flex flex-wrap -mx-1">
          {monthNames.map((monthName, index) => {
            const disabled = isDisabled(year, index);
            const isSelected =
              selectedDate?.getFullYear() === year &&
              selectedDate?.getMonth() === index;

            return (
              <div key={monthName} className="w-1/3 px-1 mb-2">
                <button
                  disabled={disabled}
                  onClick={() => {
                    onChange(new Date(year, index, 1));
                    onClose();
                  }}
                  className={`w-full text-center py-2 rounded text-sm font-medium transition
                    ${
                      disabled
                        ? "text-zinc-400 cursor-not-allowed"
                        : isSelected
                        ? "bg-emerald-500 text-white"
                        : "hover:bg-emerald-100 dark:hover:bg-emerald-700"
                    }`}
                  type="button"
                >
                  {monthName}
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default MonthDatePicker;
