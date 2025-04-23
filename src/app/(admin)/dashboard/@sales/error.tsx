'use client'

import React from 'react';
import Image from "next/image";

export interface ErrorProps {
    
}

function Error({}: ErrorProps) {
    return (
        <div><Image className="w-full" width={1440} height={500} src="/images/wrong.png" alt="error sales"/>
            Error loading Sales Component</div>
    );
}

export default Error;