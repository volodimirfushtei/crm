'use client';

import React, { useMemo, useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { getPromotions } from '@/app/lib/api';
import Promotion from '@/app/components/promotion';
import { useCompanySearchStore } from '@/app/lib/store/company-search-store';

export interface DiscountItemProps {
  companyId: string;
}

const ITEMS_PER_PAGE = 6;

export default function DiscountItem({ companyId }: DiscountItemProps) {
  const [currentPage, setCurrentPage] = useState(1);
  const { searchTerm } = useCompanySearchStore();

  const { data } = useQuery({
    queryKey: ['promotions', companyId],
    queryFn: () => getPromotions({ companyId }),
    staleTime: 10 * 1000,
  });

  const filteredPromotions = useMemo(() => {
    if (!data) return [];

    return searchTerm.trim()
      ? data.filter((promotion) =>
        promotion.title.toLowerCase().includes(searchTerm.toLowerCase()),
      )
      : data;
  }, [data, searchTerm]);

  const totalPages = Math.ceil(filteredPromotions.length / ITEMS_PER_PAGE);
  const start = (currentPage - 1) * ITEMS_PER_PAGE;
  const paginatedPromotions = filteredPromotions.slice(start, start + ITEMS_PER_PAGE);

  return (
    <div className="flex flex-col gap-6">
      {/* Promotions */}
      <div className="grid grid-cols-12 gap-5">
        {paginatedPromotions.map((promotion) => (
          <div key={promotion.id} className="col-span-12 md:col-span-6 xl:col-span-4">
            <Promotion
              promotion={promotion}
              className="relative drop-shadow-lg rounded overflow-hidden animate-border-spin"
            />
          </div>
        ))}
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex justify-center items-center gap-4 mt-4">
          <button
            onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
            disabled={1 === currentPage}
            className="px-4 py-2 rounded-lg border bg-white text-gray-700 hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Prev
          </button>

          <span className="text-sm text-gray-700 font-medium">
            Page {currentPage} of {totalPages}
          </span>

          <button
            onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))}
            disabled={currentPage === totalPages}
            className="px-4 py-2 rounded-lg border bg-white text-gray-700 hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
}
