import { ReactNode } from "react";
import { Title } from "../Title";

export interface LayoutPros {
    title: string;
    children: ReactNode;
}

export function Layout({ title, children }: LayoutPros) {
    return (
        <div className={`
            flex flex-col w-2/3
            bg-white text-gray-800
        `}>
            <Title>{title}</Title>
            <div className="p-6">
                {children}
            </div>
        </div>
    );
}