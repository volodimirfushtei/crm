import React from 'react';
import { getSummaryStats } from '@/app/lib/api';
import StatCard, { StatCardType } from '../../../components/stat-card';

export interface PageProps {
}

const labelByStat: Record<Extract<keyof Awaited<ReturnType<typeof getSummaryStats>>, string>, string> = {
  promotions: 'Total promotions',
  categories: 'Total categories',
  newCompanies: 'New companies',
  activeCompanies: 'Total active companies',
};

export default async function Page({}: PageProps) {
  const data = await getSummaryStats({
    next: {
      revalidate: 10,
    },
  });

  return (
    <div className="grid grid-cols-12 gap-5">
      {Object.entries(labelByStat).map(([key, label]) => {
        const typedKey = key as keyof typeof data;
        const count = data[typedKey];

        // Skip if data doesn't contain this key
        if (count === undefined) return null;

        return (
          <div key={key} className="col-span-3">
            <StatCard
              type={StatCardType.Gradient}
              label={label}
              counter={count}
            />
          </div>
        );
      })}
    </div>
  );
}