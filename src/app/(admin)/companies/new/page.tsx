'use client'
import React from 'react';
import CompanyForm from "@/app/components/company-form";

export interface PageProps {
}


function Page({}: PageProps) {
    return (
        <div className="px-10 py-6">
            <CompanyForm onSubmitAction={console.log}/>
        </div>
    );
}

export default Page;