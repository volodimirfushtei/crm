import React from 'react';
import PromotionsForm from '@/app/components/promotions-form';

export interface PageProps {
  params: { id: string };
}

export default async function Page({ params }: PageProps) {
  const id = params.id;

  return (
    <div className="py-6 px-10 ">
      <PromotionsForm companyId={id} />
    </div>
  );
}
