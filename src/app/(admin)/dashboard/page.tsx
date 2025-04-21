import React from 'react';
import Header from '@/app/components/header';

export interface PageProps {
    params: { id: string };
}

export default function Page({}: PageProps) {
    return <Header>Dashboard</Header>;
}