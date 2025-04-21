'use client';
import React from 'react';

import {useRouter} from 'next/navigation';
import CompanyForm from '@/app/components/company-form';
import Modal from '@/app/components/modal';

export interface PageProps {
}

export default function Page({}: PageProps) {

    const router = useRouter();
    return (

        <Modal show={true} onCloseAction={() => router.back()}>
            <CompanyForm onSubmitAction={console.log}/>
        </Modal>
    );
}