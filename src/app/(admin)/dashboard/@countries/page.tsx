import React from 'react';
import Image from 'next/image';
import clsx from 'clsx';

import DashboardCard from '@/app/components/dashboard-card';
import getCountById from '@/app/lib/utils/getCountById';
import {getCompanies, getCountries} from '@/app/lib/api';

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
export interface PageProps {

}

export default async function Page({}: PageProps) {
    const countries = await getCountries();
    const companies = await getCompanies();
    const counts = getCountById(companies, 'countryId');

    return (
        <DashboardCard label="Countries of companies">
            <div className="flex items-end pb-5 px-5 gap-5 ">
                <div>
                    {countries.map(({id, title}) => (
                        <p
                            key={id}
                            className={clsx(
                                'text-sm text-gray-900 font-medium',
                                'before:inline-block before:w-2 before:h-2 before:rounded-full before:align-middle before:mr-2 before:bg-purple-200',
                            )}
                        >{`${title} - ${counts[id] || 0}`}</p>
                    ))}
                </div>
                <Image width={395} height={260} src="/images/World.svg" alt="world"/>
            </div>
        </DashboardCard>
    );
}