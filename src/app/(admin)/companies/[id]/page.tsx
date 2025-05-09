import React from 'react';
import { notFound } from 'next/navigation';
import { dehydrate, HydrationBoundary } from '@tanstack/react-query';
import Toolbar from '@/app/components/tool-bar';
import AddPromotionsButton from '@/app/components/add-promotions-button';
import SearchInput from '@/app/components/search-input';
import CompanyIt from '@/app/components/company-it';
import { getCompany, getPromotions } from '@/app/lib/api';
import AboutCompany from '@/app/components/about-company';
import DiscountItem from '@/app/components/discount-item';
import getQueryClient from '@/app/lib/utils/getQueryClient';


interface PageProps {
  params: { id: string };
}

export default async function Page({ params }: PageProps) {
  const queryClient = getQueryClient();

  await queryClient.prefetchQuery({
    queryKey: ['companies', params.id],
    queryFn: () => getCompany(params.id),
    staleTime: 10 * 1000,
  });

  await queryClient.prefetchQuery({
    queryKey: ['promotions', params.id],
    queryFn: () => getPromotions({ companyId: params.id }),
    staleTime: 10 * 1000,
  });


  const company = queryClient.getQueryData(['companies', params.id]) as any;
  if (!company) return notFound();

  const promotions = (queryClient.getQueryData(['promotions', params.id]) as any[]) || [];

  const dehydratedState = dehydrate(queryClient);

  return (
    <HydrationBoundary state={dehydratedState}>
      <div className="bg-white shadow-md">
        <Toolbar action={<AddPromotionsButton companyId={params.id} />}>
          <SearchInput />
        </Toolbar>
      </div>

      <div className="grid grid-cols-12 gap-5 bg-gray-100 p-4 ">
        {/* Left panel: company info */}
        <div className="col-span-4 space-y-6">
          <div className="rounded-2xl bg-white p-4 shadow-lg ">
            <CompanyIt
              company={company.title}
              avatar={company.avatar}
              status={company.status}
              id={Number(company.id)}
            />
          </div>
          <div className="rounded-2xl bg-white p-4 shadow-lg">
            <AboutCompany
              company={company.description}
              categoryTitle={company.categoryTitle}
              joinedDate={company.joinedDate}
              country={company.countryTitle}
            />
          </div>
        </div>
        {/* Right panel: promotions */}
        <div className="col-span-8 relative rounded-2xl bg-white p-6 shadow-lg">
          <h2 className="text-2xl text-center font-semibold text-gray-900 mb-4 drop-shadow-sm">Promotions</h2>
          {promotions.length > 0 ? (
            <DiscountItem companyId={params.id} />
          ) : (
            <p className="text-gray-500 text-center">Немає акцій.</p>
          )}
        </div>
      </div>
    </HydrationBoundary>
  );
}





