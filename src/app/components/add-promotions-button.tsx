'use client';

import React from 'react';
import {useRouter} from 'next/navigation';
import Button from '@/app/components/button';
import {motion} from 'framer-motion';

export interface AddPromotionButtonProps {
    companyId: string;
}

export default function AddPromotionButton({
                                               companyId,
                                           }: AddPromotionButtonProps) {

    console.log('Company ID:', companyId);


    const router = useRouter();


    return (
        <motion.div initial={{opacity: 0, x: 100}}
                    animate={{opacity: 1, x: 0, transition: {duration: 1.5}}}>
            <Button
                onClick={() =>
                    router.push(`/companies/${companyId}/new-promotion`, {scroll: false})
                }
            >
                Add promotions
            </Button>
        </motion.div>
    );
}