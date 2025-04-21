'use client';
import React from 'react';
import Image from "next/image";
import {auto} from "@popperjs/core";

export interface GlobalErrorProps {
    config: object;
}

export default function GlobalError({}: GlobalErrorProps) {
    return (
        <html>
        <body>
        <div className="flex flex-col items-center bg-amber-50">
            <p>Something went wrong</p>
            <Image className="w-4/5 items-center" width={1440} height={500} src="/images/wrong.png" alt="wrong page"/>
        </div>
        </body>
        </html>
    );
}