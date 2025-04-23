import React from 'react';
import Toolbar from '@/app/components/tool-bar';
import AddPromotionsButton from "@/app/components/add-promotions-button";
import SearchInput from "@/app/components/search-input";

export interface PageProps {
    params: { id: string };
}

export default function Page({params}: PageProps) {

    return (
        <div className="py-6 px-10">

            <Toolbar action={<AddPromotionsButton/>}>
                <SearchInput/>
            </Toolbar>
        </div>
    );
}



