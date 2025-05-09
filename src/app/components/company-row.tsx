import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import clsx from 'clsx';
import StatusLabel from '@/app/components/status-label';
import { Company, deleteCompany } from '@/app/lib/api';
import ButtonDelete from '@/app/components/button-delete';

export interface CompanyRowProps {
  company: Company;
  avatar?: string;
}

export default function CompanyRow({ company }: CompanyRowProps) {


  async function handleDeleteCompany(companyId: string) {
    if (confirm('Are you sure you want to delete this company?')) {
      try {
        await deleteCompany(companyId);
        alert('Company deleted successfully!');
        // перезавантажити дані чи зробити навігацію
      } catch (error) {
        console.error('Failed to delete company:', error);
        alert('Failed to delete company.');
      }
    }
  }

  return (
    <tr
      className="h-14 text-center text-gray-900 drop-shadow-md bg-white hover:bg-gradient-to-br from-[#A5A5A5] to-white overflow-hidden focus-within:bg-gray-700 ">
      <td className="text-xs font-medium text-blue-700 rounded-l border-l-4 border-blue-700 ">
        {company.categoryTitle}
      </td>
      <td>
        <Link className="flex flex-row gap-1 items-center justify-center"
              href={`/companies/${company.id}`}><img className="object-cover"
                                                     width={28}
                                                     height={28}
                                                     src={company.avatar && company.avatar.startsWith('http') ? company.avatar : `/icons/${company.avatar || 'company-logo'}.svg`}
                                                     alt={'avatar'} />{company.title}
        </Link>
      </td>
      <td>
        <StatusLabel status={company.status} />
      </td>
      <td>
        <div className="inline-flex items-center gap-1">
          <Image
            width={16}
            height={16}
            src={`/icons/${company.hasPromotions ? 'check' : 'mark'}.svg`}
            alt="promotion icon"
          />
          <span
            className={clsx(
              'text-sm font-medium',
              company.hasPromotions ? 'text-green-700' : 'text-red-700',
            )}
          >
            {company.hasPromotions ? 'Yes' : 'No'}
          </span>
        </div>
      </td>
      <td>{company.countryTitle}</td>
      <td className="rounded-r">
        {new Date(company.joinedDate).toLocaleDateString('uk-UA')}
      </td>
      <td className="rounded-r">
        <ButtonDelete onClick={() => handleDeleteCompany(company.id)} className="text-red-500">
          Delete
        </ButtonDelete>
      </td>
    </tr>
  );
}

