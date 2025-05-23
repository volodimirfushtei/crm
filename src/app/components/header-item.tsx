import React, { useState } from 'react';
import Link from 'next/link';
import GetStartedModal from '@/app/components/get-started-modal';

export interface HeaderItemProps {
}

export default function HeaderItem({}: HeaderItemProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <nav className="container mx-auto px-6 flex items-center justify-between">
        <div className="flex items-center gap-12">
          <div className="flex items-center gap-8 text-[20px]">
            <a href="#features" className="text-primary font-medium text-[20px]">Home</a>
            <a href="#features" className="text-gray-600 hover:text-gray-900">Features</a>
            <a href="#solutions" className="text-gray-600 hover:text-gray-900">Solutions</a>
            <a href="#pricing" className="text-gray-600 hover:text-gray-900">Pricing</a>
            <a href="#about" className="text-gray-600 hover:text-gray-900">About</a>
          </div>
        </div>
        <div className="flex items-center gap-4 text-[20px]">
          <Link href="/sign-in" className="text-gray-600 hover:text-gray-900 font-medium">Sign in</Link>
          <button
            onClick={() => setIsOpen(true)}
            className="bg-primary text-white px-4 py-2 rounded-button font-medium hover:bg-primary/90 transition-colors text-[14px]"
          >
            Get Started
          </button>
        </div>
      </nav>

      {/* Рендер модалки окремо, з show */}
      <GetStartedModal onCloseAction={() => setIsOpen(false)} show={isOpen} />
    </div>
  );
}


