'use client';

import React from 'react';
import Image from 'next/image';

export interface LogoUploaderProps
    extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type'> {
    label?: string;
    className?: string;
}

export default function LogoUploader({label, placeholder, id, className, ...rest}: LogoUploaderProps) {
    return (
        <div className="flex  flex-col gap-4">
            {label && <p className="text-base font-medium text-gray-900 ">{label}</p>}
            <label
                htmlFor={id}
                className={`flex flex-col items-center justify-center border border-dashed border-slate-900 rounded cursor-pointer ${className}`}
            >
                <Image
                    className="mb-1"
                    width={48}
                    height={48}
                    src="/icons/upload.svg"
                    alt="upload"
                />
                {placeholder && (
                    <p className="text-sm text-gray-500">{placeholder}</p>
                )}
                <input
                    {...rest}
                    id={id}
                    type="file"
                    accept="image/*"
                    className="hidden"
                />
            </label>
        </div>
    );
}
