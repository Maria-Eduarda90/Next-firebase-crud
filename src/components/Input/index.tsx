export interface IInputProps {
    type?: 'text' | 'number';
    text: string;
    value: string | number;
    onlyReading?: boolean;
    className?: string;
    onChange?: (value: React.ChangeEvent<HTMLInputElement>) => void;
}

export function Input({ text, type, value, onlyReading, onChange, className }: IInputProps) {
    return (
        <div className={`flex flex-col ${className}`}>
            <label className="mb-2">
                {text}
            </label>
            <input
                type={type ?? 'text'}
                onChange={e => onChange?.(e)}
                value={value}
                readOnly={onlyReading}
                className={`
                    border border-teal-600 rounded-lg
                    focus:outline-none bg-gray-100 px-4 py-2
                    ${onlyReading ? '' : 'focus:bg-white'}
                `}
            />
        </div>
    );
}