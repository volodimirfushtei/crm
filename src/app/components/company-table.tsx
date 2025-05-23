'use client';

import React, { useMemo, useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { Company, getCompanies } from '@/app/lib/api';
import CompanyRow from '@/app/components/company-row';
import { useCompanySearchStore } from '@/app/lib/store/company-search-store';

export interface CompanyTableProps {
  initialData?: Company[];
}

const headers = [
  'Category',
  'Company',
  'Status',
  'Promotion',
  'Country',
  'Joined date',
];

const ITEMS_PER_PAGE = 7;

export default function CompanyTable({ initialData = [] }: CompanyTableProps) {

  const [currentPage, setCurrentPage] = useState(1);
  const { data } = useQuery({
    queryKey: ['companies'],
    queryFn: getCompanies,
    staleTime: 10 * 1000,
    initialData: initialData,
    refetchOnWindowFocus: false,
  });
  const { searchTerm } = useCompanySearchStore();

  const filteredCompanies = useMemo(() => {
    return searchTerm.trim()
      ? data.filter((c) =>
        c.title.toLowerCase().includes(searchTerm.toLowerCase()),
      )
      : data;
  }, [data, searchTerm]);

  const totalPages = Math.ceil(filteredCompanies.length / ITEMS_PER_PAGE);
  const start = (currentPage - 1) * ITEMS_PER_PAGE;
  const paginatedCompanies = filteredCompanies.slice(start, start + ITEMS_PER_PAGE);


  return (
    <div className="py-8 px-10 bg-gray-100 shadow-md rounded-lg">
      <table className="w-full table-auto border-separate border-spacing-y-2 ">
        <thead>
        <tr>
          {headers.map((header, i) => (
            <th key={i} className="pb-5 text-sm font-light text-gray-900 text-left">
              {header}
            </th>
          ))}
        </tr>
        </thead>
        <tbody>
        {paginatedCompanies.length > 0 ? (
          paginatedCompanies.map((company) => (
            <CompanyRow key={company.id} company={company} />
          ))
        ) : (
          <tr>
            <td colSpan={headers.length} className="py-6 text-center text-gray-500">
              No companies found.
            </td>
          </tr>
        )}
        </tbody>
      </table>

      {/* Пагінація */}
      {totalPages > 1 && (
        <div className="flex justify-center items-center gap-4 mt-4">
          <button
            onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
            disabled={currentPage === 1}
            className="px-4 py-2 rounded-lg border bg-white text-gray-700 hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Prev
          </button>

          <span className="text-sm mt-1">
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
