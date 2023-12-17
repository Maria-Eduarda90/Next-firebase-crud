import { ReactNode } from "react";

export interface IButtonProps {
    color?: 'teal' | 'blue' | 'gray';
    className?: string;
    children: ReactNode;
    onClick?: () => void;
}

export function Button({ children, color, className, onClick }: IButtonProps) {
    const setColor = color ?? 'gray';

    return (
        <button onClick={onClick} className={`
            bg-gradient-to-r from-${setColor}-600 to-${setColor}-800 text-white
            px-4 py-2 rounded-md
            ${className}
        `}>
            {children}
        </button>
    );
}