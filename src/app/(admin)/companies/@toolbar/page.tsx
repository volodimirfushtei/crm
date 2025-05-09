'use client';

import React from 'react';

import Toolbar from '@/app/components/tool-bar';
import SearchInput from '@/app/components/search-input';
import AddCompanyButton from '@/app/components/add-company-button';

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
export interface PageProps {
}

export default function Page({}: PageProps) {

  return (
    <Toolbar action={<AddCompanyButton />}>
      <SearchInput
      />
    </Toolbar>
  );

}