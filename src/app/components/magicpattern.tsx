import React from 'react';
import Image from 'next/image';

export interface MagicPatternProps {
    children?: React.ReactNode;
    title: string;
    num: number;
}

export default function MagicPattern({children, title, num}: MagicPatternProps) {
    return <div className="rounded-[4px] w-[268px] h-[151px] flex flex-col items-center  relative">
        <div className="h-0.5 w-4 rounded-[20px] absolute  left-[28px] top-[36px] bg-[#111827]"></div>
        <div
            className="absolute font-normal text-[12px] leading-[1.33333] text-[#111827] left-[52px] top-[28px] text-left">{title}</div>
        <span
            className="absolute font-semibold text-[60px] leading-[1] text-[#111827] left-[52px] bottom-[28px] ">{num}</span>
        <Image src="/images/mesh-gradient-1.png" alt="magicpattern" width={268} height={152}/>
        {children}
    </div>;
}