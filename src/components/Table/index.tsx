import React from "react";

interface TableProps {
  children: React.ReactNode;
}

const TableRoot = ({ children }: TableProps) => {
  return (
    <div className="rounded-lg border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 shadow-sm">
      <div className="p-6">
        <div className="overflow-x-auto">
          <table className="w-full">{children}</table>
        </div>
      </div>
    </div>
  );
};

interface HeaderColumn<T> {
  key: keyof T | "actions";
  label: React.ReactNode;
  align?: "left" | "right" | "center";
  hidden?: boolean;
  render?: (value: any, row: T) => React.ReactNode;
}

interface TableHeaderProps<T> {
  columns: HeaderColumn<T>[];
}

const TableHeader = <T,>({ columns }: TableHeaderProps<T>) => (
  <thead>
    <tr className="border-b border-zinc-200 dark:border-zinc-800">
      {columns.map(({ key, label, align, hidden }) => (
        <th
          key={String(key)}
          className={`py-3 px-4 font-medium text-zinc-500 dark:text-zinc-400 ${
            align === "right" ? "text-right" : "text-left"
          } ${hidden ? "hidden" : ""}`}
        >
          {label}
        </th>
      ))}
    </tr>
  </thead>
);

const TableBody = ({ children }: { children: React.ReactNode }) => (
  <tbody>{children}</tbody>
);

interface TableRowProps<T> {
  data: T;
  columns: HeaderColumn<T>[];
  onClickEdit?: () => void;
  onClickDelete?: () => void;
}

function TableRow<T extends Record<string, any>>({
  data,
  columns,
  onClickEdit,
  onClickDelete,
}: TableRowProps<T>) {
  return (
    <tr className="border-b border-zinc-200 dark:border-zinc-800 hover:bg-zinc-50 dark:hover:bg-zinc-900">
      {columns.map(({ key, align, hidden, render }) => {
        if (hidden) return null;

        // Lógica para coluna de ações
        if (key === "actions") {
          return (
            <td
              key="actions"
              className={`py-3 px-4 ${
                align === "right" ? "text-right" : "text-left"
              }`}
            >
              <div className="flex justify-end gap-2">
                {onClickEdit && (
                  <button
                    className="p-1 rounded-md text-zinc-500 hover:text-emerald-500 dark:text-zinc-400 dark:hover:text-emerald-500 transition-all"
                    onClick={onClickEdit}
                  >
                    ✏️
                  </button>
                )}
                {onClickDelete && (
                  <button
                    className="p-1 rounded-md text-zinc-500 hover:text-red-500 dark:text-zinc-400 dark:hover:text-red-400 transition-all"
                    onClick={onClickDelete}
                  >
                    🗑️
                  </button>
                )}
              </div>
            </td>
          );
        }

        const value = data[key as keyof T];
        return (
          <td
            key={String(key)}
            className={`py-3 px-4 ${
              align === "right" ? "text-right" : "text-left"
            }`}
          >
            {render ? render(value, data) : String(value)}
          </td>
        );
      })}
    </tr>
  );
}

const Table = Object.assign(TableRoot, {
  Header: TableHeader,
  Body: TableBody,
  Row: TableRow,
});

export default Table;
