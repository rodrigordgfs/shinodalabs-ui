import { LucideIcon } from 'lucide-react';
import React, { FC } from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: "emerald" | "blue" | "red" | "neutral";
    size?: "sm" | "md" | "lg";
    icon?: LucideIcon;
    children: React.ReactNode;
    disabled?: boolean;
}
declare const Button: FC<ButtonProps>;

export { Button };
