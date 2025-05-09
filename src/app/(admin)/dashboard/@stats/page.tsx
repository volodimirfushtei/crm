import React from 'react';
import {getSummaryStats} from "@/app/lib/api"
import StatCard, {StatCardType} from '../../../components/stat-card';

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
export interface PageProps {

}

const labelByStat = {
    promotions: 'Total promotions',
    categories: 'Total categories',
    newCompanies: 'New companies',
    activeCompanies: 'Total active companies',
};

export default async function Page({}: PageProps) {
    const data = await getSummaryStats({
        next: {
            revalidate: 10,
        }
    });

    return (
        <div className="grid grid-cols-12 gap-5">
            {(Object.keys(labelByStat) as (keyof typeof data)[]).map((key) => (
                <div key={key} className="col-span-3">
                    <StatCard
                        type={StatCardType.Gradient}
                        label={labelByStat[key]}
                        counter={data[key]}
                    />
                </div>
            ))}
        </div>
    );
}