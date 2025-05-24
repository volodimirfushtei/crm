'use client';

import React, { use } from 'react';
import Header from '@/app/components/header';

export default function Page({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);

  return <Header>{`Company (${id})`}</Header>;
}


