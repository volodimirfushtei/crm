'use client';

import React, { useMemo } from 'react';
import { useQuery } from '@tanstack/react-query';
import { getPromotions } from '@/app/lib/api';
import Promotion from '@/app/components/promotion';
import { useCompanySearchStore } from '@/app/lib/store/company-search-store';


export interface DiscountItemProps {
  companyId: string;


}

export default function DiscountItem({
                                       companyId,
                                     }: DiscountItemProps) {
  const { data } = useQuery({
    queryKey: ['promotions', companyId],
    queryFn: () => getPromotions({ companyId }),
    staleTime: 10 * 1000,
  });
  const { searchTerm } = useCompanySearchStore();

  const filteredPromotions = useMemo(() => {
    // Перевірка на undefined перед фільтрацією
    if (!data) return [];

    return searchTerm.trim()
      ? data.filter((promotion) =>
        promotion.title.toLowerCase().includes(searchTerm.toLowerCase()),
      )
      : data;
  }, [data, searchTerm]);
  return (
    <div className="grid grid-cols-12 gap-5  ">
      {filteredPromotions?.map((promotion) => (
        <div key={promotion.id} className=" col-span-4 ">
          <Promotion promotion={promotion}
                     className="relative drop-shadow-lg rounded overflow-hidden animate-border-spin"
          />
        </div>
      ))}

    </div>
  );
}