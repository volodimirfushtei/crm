import React from 'react';
import Header from '@/app/components/header';

export interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function Page({}: PageProps) {

  return <Header>{`Dashboard`}</Header>;
}