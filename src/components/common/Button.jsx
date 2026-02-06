import React from 'react';

const Button = ({
    children,
    variant = 'primary',
    size = 'md',
    className = '',
    onClick,
    type = 'button',
    ...props
}) => {
    const baseStyles = 'inline-flex items-center justify-center font-medium transition-all duration-300 rounded-xl cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 transform hover:scale-[1.02] active:scale-[0.98]';

    const variants = {
        primary: 'bg-primary text-white hover:bg-primary-dark shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/40 focus:ring-primary',
        secondary: 'bg-secondary text-white hover:bg-gray-800 shadow-lg shadow-secondary/30 focus:ring-secondary',
        outline: 'bg-transparent border-2 border-primary text-primary hover:bg-primary/5 hover:border-primary-dark focus:ring-primary',
        white: 'bg-white text-primary hover:bg-gray-50 shadow-lg focus:ring-white',
        ghost: 'bg-transparent text-gray-600 hover:text-primary hover:bg-gray-100 focus:ring-gray-200',
        gradient: 'gradient-primary text-white shadow-lg shadow-indigo-500/30 hover:shadow-indigo-500/50 hover:brightness-110 focus:ring-indigo-400',
        'gradient-accent': 'gradient-accent text-white shadow-lg shadow-teal-500/30 hover:shadow-teal-500/50 hover:brightness-110 focus:ring-teal-400',
    };

    const sizes = {
        sm: 'text-sm px-5 py-2.5',
        md: 'text-base px-6 py-3',
        lg: 'text-lg px-8 py-4',
    };

    return (
        <button
            type={type}
            className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
            onClick={onClick}
            {...props}
        >
            {children}
        </button>
    );
};

export default Button;

