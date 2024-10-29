'use client';

import React, { ButtonHTMLAttributes } from 'react';

import { cn } from '<{utils}>/class';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    /**
     * @description Whether the button is disabled.
     * @default false
     */
    disabled?: boolean;
}

/**
 * @description Just. A. Button.
 * @example <Button>Click me</Button>
 */
const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(function Button(
    { children, className, disabled, style, ...props },
    ref,
) {
    return (
        <button
            ref={ref}
            disabled={disabled}
            className={cn(
                'bg-blue-500 dark:bg-blue-700 hover:bg-blue-600 dark:hover:bg-blue-800 text-white font-bold py-2 px-4 rounded',
                /* <<
                style === {{color}} ? '{{color}}-solid-light-bg {{color}}-solid-light-text' : '',
                >> */
                className
            )}
            {...props}
        >
            {children}
        </button>
    );
});

Button.displayName = 'Button';
export default Button;
