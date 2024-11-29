import { cn } from '@/lib/utils';
import { cva } from 'class-variance-authority';
import { useState } from 'react';

const variants = cva(
    [
        'border',
        'transition-all',
        'duration-200',
        'rounded',
        'ring-0',
        'outline-none',
        'focus:outline-none',
        'border-slate-300',
        'focus:ring-1',
        'focus:ring-slate-500',
        'shadow',
        'dark:bg-gray-800',
        'dark:border-gray-600',
        'dark:text-white',
        'dark:focus:ring-gray-400',
    ],
    {
        variants: {
            size: {
                small: ['text-sm', 'py-1', 'px-2'],
                medium: ['text-base', 'py-2', 'px-4'],
            },
        },
        defaultVariants: {
            size: 'medium',
        },
    }
);

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    variantSize?: 'small' | 'medium';
    parentClassName?: string;
}

const Input = ({ variantSize, ...props }: InputProps) => {
    const classes = cn(variants({ size: variantSize }), props.className);
    props.className = classes;
    const invalidClasses = cn(classes, 'border-red-500', 'focus:ring-red-500');

    const [invalidMessage, setInvalidMessage] = useState('');

    const handleInvalid = (e: React.FormEvent<HTMLInputElement>) => {
        e.preventDefault();
        const input = e.target as HTMLInputElement;
        classes.split(' ').forEach(c => input.classList.remove(c));
        invalidClasses.split(' ').forEach(c => input.classList.add(c));
        setInvalidMessage(input.validationMessage);
    };

    const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
        const input = e.target as HTMLInputElement;
        invalidClasses.split(' ').forEach(c => input.classList.remove(c));
        classes.split(' ').forEach(c => input.classList.add(c));
        setInvalidMessage('');
    };

    return (
        <div className={props.parentClassName}>
            <input onInvalid={handleInvalid} onChange={handleChange} {...props} />
            {invalidMessage && <div className="mt-2 text-sm text-red-500">{invalidMessage}</div>}
        </div>
    );
};

export default Input;
