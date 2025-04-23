import React from 'react';
import CompanyTable from '@/app/components/company-table';
import CompanyRow from '@/app/components/company-row';
import {Status} from '@/app/components/status-label';
import {getCompanies} from '@/app/lib/api';

export interface PageProps {
}

export default async function Page({}: PageProps) {
    const companies = await getCompanies();


    return (
        <CompanyTable>
            {companies.map((company: any) => (
                <CompanyRow
                    key={company.id}
                    id={company.id}
                    category={company.category}
                    logoUrl={company.logoUrl}
                    company={company.name}
                    status={company.status as Status}
                    promotion={company.promotion}
                    country={company.country}
                    joinedDate={company.joinedDate}
                />
            ))}
        </CompanyTable>
    );
}


