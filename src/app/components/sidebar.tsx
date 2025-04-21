'use client';

import React from 'react';
import Image from 'next/image';
import SidebarItem from '@/app/components/sidebar-item';
import {usePathname, useRouter} from 'next/navigation';
import {motion} from "framer-motion";

export interface SidebarProps {

}

export default function Sidebar({}: SidebarProps) {
    const router = useRouter();
    const pathname = usePathname();

    const handleExitClick = () => {
        router.push('/');
    };

    return (
        <motion.aside initial={{opacity: 0, x: 100}}
                      animate={{opacity: 1, x: 0, transition: {duration: 0.5}}}>
            <aside className="fixed top-0 left-0 z-40 w-60 h-screen">
                <div className="flex flex-col h-full overflow-y-auto bg-gray-900">
                    <Image
                        className="py-8 mb-11 mx-auto"
                        width={122}
                        height={25}
                        src="/icons/logo.svg"
                        alt="logo"
                    />
                    <ul className="space-y-7">
                        <SidebarItem
                            current={pathname === '/dashboard'}
                            pathname="/dashboard"
                            src="/icons/square.svg"
                            alt="dashboard icon"
                        >
                            Dashboard
                        </SidebarItem>
                        <SidebarItem
                            current={pathname === '/companies'}
                            pathname="/companies"
                            src="/icons/brief.svg"
                            alt="companies icon"
                        >
                            Companies
                        </SidebarItem>
                    </ul>
                    <button
                        className="flex items-center gap-2 p-6 mt-auto mx-auto"
                        onClick={handleExitClick}
                    >
                        <Image
                            width={18}
                            height={18}
                            src="/icons/arrow-left.svg"
                            alt="exit icon"
                        />
                        <span className="font-medium text-white">Exit</span>
                    </button>
                </div>
            </aside>
        </motion.aside>
    );
}
