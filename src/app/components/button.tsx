'use client';

import React from 'react';
import clsx from 'clsx';

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  disabled?: boolean;
  className?: string;
}

export default function Button({ disabled, ...rest }: ButtonProps) {
  return (
    <button
      {...rest}
      className={clsx(
        'w-full py-2.5 px-5 bg-gray-900 text-zinc-50 text-base text-center font-medium rounded border-2 border-gray-500',
        !disabled && 'hover:bg-gray-800 active:bg-gray-950',
        disabled && 'text-zinc-100',
      )}
    />
  );
}


