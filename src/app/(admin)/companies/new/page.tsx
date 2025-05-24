'use client';
import React from 'react';
import CompanyForm from '@/app/components/company-form';

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
export interface PageProps {
}


function page({}: PageProps) {
  return (
    <div className="px-10 py-6">
      <CompanyForm onSubmitAction={console.log} />
    </div>
  );
}

export default page;