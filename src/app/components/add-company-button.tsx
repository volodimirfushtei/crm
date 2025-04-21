'use client';

import Button from "@/app/components/button";
import {useRouter} from "next/navigation"


export default function AddCompanyButton() {
    const router = useRouter();

    return (
        <div>
            <Button className="drop-shadow-xl" onClick={() => router.push('/companies/new')}>Add company</Button>
        </div>
    );
}