// components/SearchInput.tsx
'use client';

import React, { useEffect, useState } from 'react';
import { useCompanySearchStore } from '@/app/lib/store/company-search-store';

export default function SearchInput() {
  const { searchTerm, setSearchTerm } = useCompanySearchStore();
  const [localTerm, setLocalTerm] = useState(searchTerm);

  useEffect(() => {
    const timer = setTimeout(() => {
      setSearchTerm(localTerm);
    }, 300);

    return () => clearTimeout(timer);
  }, [localTerm]);

  return (
    <div className="relative w-96">
      <input
        type="text"
        placeholder="Search ..."
        value={localTerm}
        onChange={(e) => setLocalTerm(e.target.value)}
        className="w-full py-3 pl-4 pr-10 rounded border border-gray-300 bg-white text-sm focus:outline-none"
      />
      <button
        type="button"
        className="absolute top-0 right-0 p-3 text-gray-500 hover:text-gray-700"
        aria-label="Search"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24"
             stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      </button>
    </div>
  );
}

