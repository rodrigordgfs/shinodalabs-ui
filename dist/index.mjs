// src/components/Button/index.tsx
import clsx from "clsx";
import { jsx, jsxs } from "react/jsx-runtime";
var baseStyles = "flex items-center h-10 justify-center rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 transition duration-200 ease-in-out cursor-pointer";
var variants = {
  emerald: "bg-emerald-600 hover:bg-emerald-700 dark:bg-emerald-700 dark:hover:bg-emerald-600 text-white dark:text-white",
  blue: "bg-blue-600 hover:bg-blue-700 dark:bg-blue-700 dark:hover:bg-blue-600 text-white dark:text-white",
  red: "bg-red-600 hover:bg-red-700 dark:bg-red-700 dark:hover:bg-red-600 text-white dark:text-white",
  neutral: "border border-zinc-300 dark:border-zinc-700 bg-transparent text-zinc-900 dark:text-zinc-100 hover:bg-zinc-100 dark:hover:bg-zinc-800"
};
var sizes = {
  sm: "px-3 py-1 text-sm",
  md: "px-4 py-2 text-base",
  lg: "px-5 py-3 text-lg"
};
var Button = ({
  variant = "emerald",
  size = "md",
  icon: Icon,
  children,
  disabled = false,
  className,
  ...props
}) => {
  return /* @__PURE__ */ jsxs(
    "button",
    {
      disabled,
      className: clsx(
        baseStyles,
        variants[variant],
        sizes[size],
        disabled && "opacity-50 cursor-not-allowed focus:ring-0 flex ",
        className
      ),
      ...props,
      children: [
        Icon && /* @__PURE__ */ jsx(Icon, { className: " h-4 w-4" }),
        children && /* @__PURE__ */ jsx("span", { className: Icon ? "md:ml-2" : "", children })
      ]
    }
  );
};
var Button_default = Button;
export {
  Button_default as Button
};
