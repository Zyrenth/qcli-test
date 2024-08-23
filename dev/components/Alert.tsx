'use client';

import { XMarkIcon } from '@heroicons/react/24/outline';
import React, { BaseHTMLAttributes } from 'react';

import { cn } from '<utils>/class';

import Button from '<components>/Button';

interface AlertProps extends Omit<BaseHTMLAttributes<HTMLDivElement>, 'title'> {
    /**
     * @description The title of the alert.
     */
    title: string | React.ReactNode;
    /**
     * @description The content of the alert.
     */
    description: string | React.ReactNode;
}

/**
 * @description Alert.
 * @example <Alert title="Hello, world!" description="This is an alert." />
 * @requires Button
 */
const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
    {
        className,
        title,
        description,
        ...props
    },
    ref,
) {
    return (
        <div
            ref={ref}
            role="alert"
            className={cn('bg-yellow-100 dark:bg-yellow-700 border-l-4 border-yellow-500 dark:border-yellow-600 text-yellow-700 dark:text-yellow-100 p-4 flex justify-between items-center', className)}
            {...props}
        >
            <div>
                <p class="font-bold">{title}</p>
                <p>{description}</p>
            </div>
            <Button>
                <XMarkIcon />
            </Button>
        </div>
    );
});

Alert.displayName = 'Alert';
export default Alert;
