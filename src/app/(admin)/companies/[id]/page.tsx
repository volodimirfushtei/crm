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

      <div className="grid grid-cols-12 gap-5 bg-gray-100 p-4">
        {/* Left panel: company info */}
        <div className="col-span-4 space-y-7">
          {/* Company Card */}
          <div className="relative rounded-2xl bg-lime-100 p-4 shadow-lg overflow-hidden">
            {/* Gradient overlay */}
            <div
              className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.6),rgba(255,255,255,0.2))] pointer-events-none" />
            <div className="relative">
              <CompanyIt
                company={company.title}
                avatar={company.avatar}
                status={company.status}
                id={Number(company.id)}
              />
            </div>
          </div>

          {/* About Company Card */}
          <div className="relative rounded-2xl bg-lime-100 p-4 shadow-lg overflow-hidden">
            <div
              className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.6),rgba(255,255,255,0.2))] pointer-events-none" />
            <div className="relative">
              <AboutCompany
                company={company.description}
                categoryTitle={company.categoryTitle}
                joinedDate={company.joinedDate}
                country={company.countryTitle}
              />
            </div>
          </div>
        </div>

        {/* Right panel: promotions */}
        <div className="col-span-8 relative rounded-2xl bg-lime-100 p-6 shadow-lg overflow-hidden">
          <div
            className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.6),rgba(255,255,255,0.2))] pointer-events-none" />
          <div className="relative">
            <h2 className="text-2xl text-center font-semibold text-gray-900 mb-4 drop-shadow-sm">
              Promotions
            </h2>
            {promotions.length > 0 ? (
              <DiscountItem companyId={params.id} />
            ) : (
              <p className="text-gray-500 text-center">Немає акцій.</p>
            )}
          </div>
        </div>
      </div>
    </HydrationBoundary>
  );
}





