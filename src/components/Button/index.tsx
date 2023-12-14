import { ReactNode } from "react";

export interface IButtonProps {
    color?: 'teal' | 'blue' | 'gray';
    className?: string;
    children: ReactNode;
}

export function Button({ children, color, className }: IButtonProps) {
    console.log(color)

    const setColor = color ?? 'gray';

    console.log(setColor)

    return (
        <button className={`
            bg-gradient-to-r from-${setColor}-600 to-${setColor}-800 text-white
            px-4 py-2 rounded-md
            ${className}
        `}>
            {children}
        </button>
    );
}