'use client';

import React from 'react';
import Image from 'next/image';
import SidebarItem from '@/app/components/sidebar-item';
import { usePathname, useRouter } from 'next/navigation';
import { motion } from 'framer-motion';

export interface SidebarProps {

}

export default function Sidebar({}: SidebarProps) {
  const router = useRouter();
  const pathname = usePathname();

  const handleExitClick = () => {
    router.push('/');
  };

  return (
    <motion.aside
      className="fixed top-0 left-0 z-40 w-64 h-screen"
      initial={{ opacity: 0, x: -100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
    >
      <div className="flex flex-col h-full overflow-y-auto bg-gray-900 text-white shadow-md">
        {/* Логотип */}
        <div className="py-8 mb-11 mx-auto">
          <a href="#" className="flex items-center gap-2">
            <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center">
              <span className="font-['Pacifico'] text-2xl text-primary">T</span>
            </div>
            <span className="font-['Pacifico'] text-2xl">TruScape</span>
          </a>
        </div>

        {/* Навігація */}
        <ul className="space-y-7 px-6">
          <SidebarItem
            current={pathname === '/'}
            pathname="/"
            src="/icons/icons8-home.svg"
            alt="Home icon"
          >
            Home
          </SidebarItem>
          <SidebarItem
            current={pathname === '/dashboard'}
            pathname="/dashboard"
            src="/icons/square.svg"
            alt="Dashboard icon"
          >
            Dashboard
          </SidebarItem>
          <SidebarItem
            current={pathname === '/companies'}
            pathname="/companies"
            src="/icons/brief.svg"
            alt="Companies icon"
          >
            Companies
          </SidebarItem>
        </ul>

        {/* Кнопка Exit */}
        <button onClick={handleExitClick}
                className="flex items-center gap-2 p-6 mt-auto mx-auto text-gray-300 hover:text-white transition-colors w-full justify-center">
          <Image width={18} height={18} src="/icons/arrow-left.svg" alt="exit icon" />
          <span>Exit</span>
        </button>
      </div>
    </motion.aside>
  );
}