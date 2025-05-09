'use client'

import React, {use} from 'react';


import {useRouter} from 'next/navigation';
import PromotionFormModal from '@/app/components/company-promotions-modal';


export default function Page({params}: { params: Promise<{ id: string }> }) {
    const {id: companyId} = use(params);
    const router = useRouter();
    return (
        <PromotionFormModal
            companyId={companyId}

            show={true}
            onCloseAction={() => router.back()}
        />
    );
}