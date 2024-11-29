import { cn } from '@/lib/utils';
import { cva } from 'class-variance-authority';

const variants = cva(
    [
        'border',
        'transition-all',
        'duration-200',
        'rounded',
        'ring-0',
        'outline-none',
        'focus:outline-none',
        'border-gray-300',
        'hover:border-black',
        'hover:ring-1',
        'hover:ring-black',
        'shadow',
        'dark:border-gray-600',
        'dark:hover:border-white',
        'dark:hover:ring-white',
    ],
    {
        variants: {
            type: {
                primary: [
                    'bg-slate-950',
                    'text-white',
                    'border-transparent',
                    'hover:bg-slate-950',
                    'dark:bg-gray-800',
                    'dark:hover:bg-gray-700',
                ],
                secondary: [
                    'bg-white',
                    'text-gray-800',
                    'border-gray-400',
                    'hover:bg-gray-100',
                    'dark:bg-gray-700',
                    'dark:text-gray-300',
                    'dark:hover:bg-gray-600',
                ],
                ghost: [
                    'bg-transparent',
                    'text-gray-800',
                    'border-transparent',
                    'hover:bg-gray-100',
                    'shadow-none',
                    'border-none',
                    'hover:border-none',
                    'hover:ring-0',
                    'dark:text-gray-300',
                    'dark:hover:bg-gray-700',
                ],
            },
            size: {
                small: ['text-sm', 'py-1', 'px-2'],
                medium: ['text-base', 'py-2', 'px-4'],
            },
        },
        defaultVariants: {
            type: 'primary',
            size: 'medium',
        },
    }
);

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variantType?: 'primary' | 'secondary' | 'ghost';
    variantSize?: 'small' | 'medium';
    children?: React.ReactNode;
}

const Button = ({ variantType, variantSize, children, ...props }: ButtonProps) => {
    const classes = cn(variants({ type: variantType, size: variantSize }), props.className);
    props.className = classes;

    return <button {...props}>{children}</button>;
};

export default Button;
