'use client';

import React from 'react';
import clsx from 'clsx';

export interface ButtonDeleteProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    disabled?: boolean;

}

export default function Button({disabled, ...rest}: ButtonDeleteProps) {
    return (
        <button
            {...rest}
            disabled={disabled}
            className={clsx(
                'flex items-center gap-2 px-4 py-2 rounded bg-gray-100 text-white',
                !disabled && 'hover:bg-gray-200 active:bg-gray-950',
                disabled && 'text-zinc-400 cursor-not-allowed',
            )}
        >
            <img
                src="/images/garbage.png"
                width={16}
                height={16}
                alt="delete icon"
            />

        </button>
    );
}