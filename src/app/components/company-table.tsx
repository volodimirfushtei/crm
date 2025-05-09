'use client';

import React, { useMemo } from 'react';
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


export default function CompanyTable({ initialData = [] }: CompanyTableProps) {
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
  return (
    <div className="py-8 px-10 bg-gray-100 shadow-md rounded-lg">
      <table className="w-full table-auto border-separate border-spacing-y-2 ">
        <thead>
        <tr>
          {headers.map((header, i) => (
            <th key={i} className="pb-5 text-sm font-light text-gray-900 text-left ">
              {header}
            </th>
          ))}
        </tr>
        </thead>
        <tbody>
        {filteredCompanies.length > 0 ? (
          filteredCompanies.map((company) => (
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
    </div>
  );
}
