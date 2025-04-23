import React from 'react';
import Header from '@/app/components/header';

export interface PageProps {
    params: { id: string };
}

export default async function Page({params}: PageProps) {
    return <Header>Dashboard</Header>;
}